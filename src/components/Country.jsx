import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Country extends Component {
  render() {
    const { country } = this.props;
    return (
      <div className="country">
        <div className="country-overview">
          <img src={country.flags.svg} alt={`bandeira do ${country.translations.por.common}`} />
          <p>Nome: {country.translations.por.common}</p>
          <p>Capital: {country.capital}</p>
          <p>{country.subregion}</p>
          <Link to={ `countries/${country.cca3}` }>More details</Link>
        </div>
      </div>
    );
  };
}

export default Country;
