import React, {useState, useEffect} from 'react';
import TotalPop from '../components/TotalPop';
import FaveList from '../components/FaveList';
import CountrySelector from '../components/CountrySelector';
import CountryDetails from '../components/CountryDetails';
import RegionSelector from '../components/RegionSelector';

const CountriesContainer = () => {
  
    const [countries, setCountries] = useState([]);
    const [region, setRegion] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [faveCountries, setFaveCountries] = useState([]);
    const [selectedBorders, setSelectedBorders] = useState([]);

    const onCountrySelect = (country) => {
        setSelectedCountry(country)
    };

    const onRegionSelect = (region) => {
        setRegion(region)
    };

    const addFaveCountry = () => {
        const newFaves = new Set(faveCountries)
        newFaves.add(selectedCountry)
        setFaveCountries(newFaves)
    };

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then((response) => response.json()).then((data) => setCountries(data));
    }, []);

    useEffect(() => {
        if (selectedCountry && Object.keys(selectedCountry).includes('borders')){
        const borders = countries.filter((country) => selectedCountry.borders.includes(country.cca3))
        setSelectedBorders(borders)} else {setSelectedBorders([])}
    }, [selectedCountry]);

    const totalPop = countries.reduce((accumulator, country) => accumulator+country.population,0);

    const regions = new Set(countries.map((country) => country.region));

    let countriesInRegion = countries
    if (region){
    countriesInRegion = countries.filter((country) => country.region === region)}

  
    return (
    <>
        <RegionSelector regions={regions} onRegionSelect={onRegionSelect}/>
        <CountrySelector countries={countriesInRegion} onCountrySelect={onCountrySelect} />
        {selectedCountry ? <CountryDetails selectedBorders={selectedBorders} addFaveCountry={addFaveCountry} selectedCountry={selectedCountry} onCountrySelect={onCountrySelect} /> : null}
        <FaveList onCountrySelect={onCountrySelect} faveCountries={faveCountries} />
        <TotalPop totalPop={totalPop} />
    </>
  );
};

export default CountriesContainer;