import React from 'react';
import { transformText } from './Tooltip';

const RollButton = ({ category, handleCategoryClick, disabled, roll_items }) => {

    const roll2Dice = () => {
        const roll = Math.floor(Math.random() * 20 + 1);
        return (roll === 20) ? (roll + Math.floor(Math.random() * 20 + 1)) : roll;
    }

    const findRolledItem = (roll, search_for) => {
        const roll_match = Object.keys(roll_items[search_for.toLowerCase()])
        .sort((a, b) => +a - +b)
        .find((value) => roll < +value);
        return roll_items[search_for.toLowerCase()][roll_match];
    }

    const mergeItems = (item, addition) => {
        const addition_props = Object.keys(addition);
        addition_props.forEach((prop) => {
            item[prop] += addition[prop]; 
        })
        return item;
    }

    const createGUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
           const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
           return v.toString(16);
        });
     }

    const rollAndFindItem = (search_for) => {
        const roll = roll2Dice();
        const rolled_item = Object.assign({}, findRolledItem(roll, search_for));
        const { additional_roll } = rolled_item;
        if (additional_roll && additional_roll !== undefined) {
            const addition = rollAndFindItem(rolled_item.additional_roll);
            const merged_item = mergeItems(rolled_item, addition);
            delete merged_item.additional_roll;
            return {
                "roll": roll, 
                "item": merged_item
            };
        }
        else if (additional_roll === 0) {
            delete rolled_item.additional_roll;
            return {
                "roll": roll, 
                "item": rolled_item
            };
        }
        return rolled_item;
    }

    const handleRollClick = (event) => {
        const rollAndItem = rollAndFindItem(category);
        const { roll, item } = rollAndItem;
        item.id = createGUID();
        handleCategoryClick(event, roll, item, category);
    }

    return <button 
        className="btn bg-dark-grey text-white-50 shadow w-min-120 w-25 d-block mx-auto mb-2" 
        disabled={disabled ? "disabled" : ""} 
        onClick={handleRollClick}>{transformText(category)}
    </button>;
}

export default RollButton;