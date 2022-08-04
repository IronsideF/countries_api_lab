import React from 'react'

const RegionSelector = ({regions, onRegionSelect}) => {
    
    const handleClick = (event) => {
        onRegionSelect(event.target.value)
    };

    const regionsToSelect = [...regions]
    const regionsNodes = regionsToSelect.map((region, i) => <><label htmlFor={region}>{region}</label><input type='radio' value={region} key={i} id={region} name='region-select' onClick={handleClick} /></>)
   
  
    return (
        <>
            <label htmlFor="all">All</label>
            <input type="radio" id="all" value='' name='region-select' onClick={handleClick} />
            {regionsNodes}
        </>
    )
}

export default RegionSelector;