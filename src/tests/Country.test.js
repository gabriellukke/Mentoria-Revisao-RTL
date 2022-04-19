import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import Home from '../pages/Home';
import userEvent from '@testing-library/user-event';
import Country from '../components/Country';

describe('Country', () => {
  test('Testa se o componente Country (card) renderiza as informações corretamente', () => {
    const countryProp = {
      capital: 'Brasília',
      subregion: 'South America',
      cca3: 'BRA',
      translations: {
        por: {
          common: 'Brasil',
        }
      },
      flags: {
        svg: 'https://flagcdn.com/w320/br.png',
      }
    }
    renderWithRouter(<Country country={countryProp} />);

    const altImg = screen.getByAltText('bandeira do Brasil')
    expect(altImg).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  })
})
