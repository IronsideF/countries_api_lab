import React from 'react'

const FaveItem = ({name, flag, onClick, value}) => {
  return (
    <>
        <li className='list-item' value={value} onClick={onClick} key={name}>{name} {flag}</li>
    </>
  )
}

export default FaveItem