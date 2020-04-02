import React from 'react';

const RolledItemDescription = ({ item, roll, handleSaveClick, handleDiscardClick }) => {

    if (!Object.keys(item).length) {
        return null;
    }
    return (
        <div className="text-white-50 text-center">
            <p className="mb-1">You've rolled: {roll}</p>
            <p className="mb-1">{item.description}</p>
            <p className="mb-1">{isNaN(item.level) ? "" : "Level: " + item.level}</p>
            <p className="mb-1">{item.physical_damage ? "Physical damage: " + item.physical_damage : ""}</p>
            <p className="mb-1">{item.magical_damage ? "Magical damage: " + item.magical_damage : ""}</p>
            <p className="mb-1">{item.defense ? "Defense: " + item.defense : ""}</p>
            <p className="mb-1">{item.wealth ? "Wealth: " + item.wealth : ""}</p>
            <p>{item.weight ? "Weight: " + item.weight : ""}</p>
            {item.description === "Failed roll" ? "" : <button className="btn bg-dark-grey text-success shadow mr-1 w-min-80" onClick={handleSaveClick}>Save</button>}
            <button className="btn bg-dark-grey text-danger shadow w-min-80" onClick={handleDiscardClick}>Discard</button>
        </div>
    )
}

export default RolledItemDescription;