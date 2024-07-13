import React from 'react'
const Toggle = ({checked,func,id}) => {
    // console.log(checked)
    const bcol = checked?"bg-green-600":"bg-gray-600"
  return (
    <div className="p-8">
        <label htmlFor={`${id}`} className={`flex  ${bcol} cursor-pointer  relative w-20 h-10 rounded-full`} >
            
        <input type="checkbox" name={`${id}`} id={`${id}`} className="sr-only peer" onClick={func} />
        <span className="w-2/5 h-4/5 bg-gray-100  absolute rounded-full left-1 top-1  peer-checked:left-11 transition-all duration-500"></span>
        </label>
    </div>
  )
}

export default Toggle
