import React from 'react'

const OptionsItem = ({ title, list, selectValue, onChangeList}) => {
    let opetion;
    let opetions = [];
    
    for (let i = 0; i < 2; i++) {
        opetion = <option value={list[i]}>{list[i]}</option>;
        opetions.push(opetion);
    }

    
    return (
        <div className="optionItem">
            <span>
                {title}
            </span>
            <select value={selectValue} onChange={onChangeList}>
                {opetions}
            </select>
        </div>
    )
}

export default OptionsItem
