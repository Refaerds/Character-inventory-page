import React from 'react';

export const transformText = (txt) => {
    return (txt.charAt(0).toUpperCase() + txt.slice(1)).replace("_", " ");
}

const Tooltip = (props) => {
    const prop_array = Object.entries(props);
    return (
        <div className="mytooltip">
            {prop_array.map((item_prop, i) => {
                return item_prop[1] ? <div key={i}>{transformText(item_prop[0])}: {transformText(item_prop[1].toString())}</div> : "";
            })}
        </div>
    )
}

export default Tooltip;