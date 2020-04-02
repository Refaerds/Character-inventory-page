import React from 'react';
import InventoryItem from './InventoryItem';

const InventorySection = ({ items, handleItemClick }) => {
    return (
        <div className="p-4">
            {items.map((item) => {
                return <InventoryItem 
                    key = {item.id}
                    id = {item.id}
                    name = {item.name}
                    type = {item.type}
                    description = {item.description}
                    item_level = {item.item_level}
                    physical_damage = {item.physical_damage}
                    magical_damage = {item.magical_damage}
                    defense = {item.defense}
                    wealth = {item.wealth}
                    weight = {item.weight}
                    onClick = {handleItemClick}
                />
            })}
            
        </div>
    )
}

export default InventorySection;