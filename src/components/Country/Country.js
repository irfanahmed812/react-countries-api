import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    // console.log(country);
    const { name, flags, population, capital, region } = country;
    return (
        <div className='single-country-details'>
            <img src={flags.png} alt="" />
            <h3 className='pt-2'>{name.official}</h3>
            <h5 className='pt-2'>Capital: {capital}</h5>
            <h5 className='pt-2'>Region: {region}</h5>
            <h5 className='pt-2 pb-2'>Population: {population}+ People</h5>
        </div>
    );
};

export default Country;