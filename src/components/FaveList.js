import React from 'react'
import FaveItem from './FaveItem'

const FaveList = ({faveCountries, onCountrySelect}) => {
    
    const faveList = [...faveCountries]
    const handleClick = (event) => {
        onCountrySelect(faveList[event.target.value])
    }

    const faveNodes = faveList.map((country, index) => <FaveItem key={index} value={index} name={country.name.common} onClick={handleClick} flag={country.flag}/>)
  
    return (
      <ul>
        {faveNodes}
      </ul>
  )
}

export default FaveList