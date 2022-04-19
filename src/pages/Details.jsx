import React, { Component } from 'react';
import { fetchCountryByCode } from '../services/api';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: [],
    }
  }

  componentDidMount() {
    this.getCountryByCode();
  }

  async getCountryByCode() {
    const { match } = this.props;
    const { params: { id } } = match;
    const country = await fetchCountryByCode(id);
    this.setState({ country });
  }

  render() {
    const { country } = this.state;

    if (country.length < 1) return <div>Loading...</div>;

    return (
      <section>
        <h1>Country Details</h1>
        <h2>{country[0].name.common}</h2>
        <p>Capital: {country[0].capital}</p>
        <img src={country[0].flags.svg} alt={`bandeira do ${country[0].translations.por.common}`} />
        <p>Region: {country[0].region}</p>
        <p>Subregion: {country[0].subregion}</p>
        <p>Population: {country[0].population}</p>
      </section>
    );
  }
}

export default Details;
