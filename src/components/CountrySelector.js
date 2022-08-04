import React from 'react'

const CountrySelector = ({countries, onCountrySelect}) => {
    
    const countriesToSelect = countries.sort((a,b) => {
        const nameA = a.name.common
        const nameB = b.name.common
        if (nameA < nameB) {
            return -1
        }
        if (nameA > nameB) {
            return 1
        }
        return 0
    }).map((country, index) => <option key={index} value={index}>{country.name.common}</option>);

    const handleSelect = (event) => {
        const selectedCountry = countries[event.target.value]
        onCountrySelect(selectedCountry)
    }
  
    return (
    <select onChange={handleSelect}>
        {countriesToSelect}
    </select>
)
}

export default CountrySelector