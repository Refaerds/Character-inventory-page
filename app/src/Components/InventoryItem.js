import React from 'react';
import Tooltip from './Tooltip';

const InventoryItem = ({ id, name, type, description, item_level, physical_damage, magical_damage, defense, wealth, weight, onClick }) => {
    return (
        <div className="relative d-inline-block">
            <button type="button" className="btn bg-dark-grey text-white-50 shadow mr-2 mb-2" id={id} onClick={onClick}>{name}</button>
            <Tooltip 
                type = {type}
                description = {description}
                item_level = {item_level}
                physical_damage = {physical_damage}
                magical_damage = {magical_damage}
                defense = {defense}
                wealth = {wealth}
                weight = {weight}
            />
        </div>
    )
}

export default InventoryItem;