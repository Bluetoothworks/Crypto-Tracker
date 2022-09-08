import React from 'react'

const SelectButton = ({children, selected, onClick}) => {
  return (
    <div>
    <span
    onClick={onClick}
    className='{classes.selectbutton}' 
    >{children}
    </span>
    </div>
  )
}

export default SelectButton