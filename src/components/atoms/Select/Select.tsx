import React from 'react'

type SelectProps = {
    value: string
}
function Select({value}:SelectProps) {

    return (
        <select>
           <option value={value}></option>
        </select>
    )
};
export default Select;

