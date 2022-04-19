import React, { Component } from 'react';

import Country from '../components/Country';
import { fetchAllCountries } from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: [],
      index: 0,
    }

    this.nextCountry = this.nextCountry.bind(this);
    this.getAllCountries = this.getAllCountries.bind(this);
  }

  componentDidMount() {
    this.getAllCountries();
  }

  /* getRandomCountry(){
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    const MAX = 200;
    const MIN = 0;
    return Math.floor(Math.random() * (MAX - MIN + 1) + MIN);
  } */

  async getAllCountries() {
    const countries = await fetchAllCountries();
    this.setState({ countries });
  }

  nextCountry() {
    const { countries, index } = this.state;
    if (index === countries.length) {
      this.setState({ index: 0 })
      return null;
    }

    this.setState(({ index }) => ({
      index: index + 1,
    }))
  }

  render() {
    const { countries, index } = this.state;
    return (
      <section>
        <h2>Encountered Country</h2>
        {!!countries.length && <Country country={countries[index]} />}
        <button
          className="nextcountry-button"
          onClick={this.nextCountry }
          disabled={countries.length <= 1}
        >Próximo País</button>
      </section>
    );
  }
}

export default Home;
