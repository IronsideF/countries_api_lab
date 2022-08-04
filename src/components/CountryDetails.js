import React from 'react'

const CountryDetails = ({selectedCountry, addFaveCountry, selectedBorders, onCountrySelect}) => {
    let borderNodes = null
    let bordersTotal = null

    const handleClick = (event) => {
        onCountrySelect(selectedBorders[event.target.value])
    }
    
    if (selectedBorders){
        borderNodes = selectedBorders.map((country, i) => <li className='list-item' value={i} onClick={handleClick} key={i}>{country.name.common} {country.flag}</li> )
        bordersTotal = selectedBorders.reduce((accumulator, country) => accumulator+country.population, 0)} 

        
    return (
    <ul>
        <li key={selectedCountry.name.common}>Name: {selectedCountry.name.common} <img className='selected-flag' src={selectedCountry.flags.svg} alt="The flag of the selected country"/></li>
        <li key={selectedCountry.population}>Population: {selectedCountry.population}</li>
        <li key={selectedCountry.flag}>Flag: {selectedCountry.flag}</li>
        <ul>
            {borderNodes}
            <li>Total Population Bordering: {bordersTotal}</li>
        </ul>
        <button onClick={addFaveCountry}>Add to favourites</button>
    </ul>
  )
}

export default CountryDetails