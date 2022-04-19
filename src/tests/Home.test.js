import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import Home from '../pages/Home';
import userEvent from '@testing-library/user-event';

describe('Home.jsx', () => {
  test('Verifica se está sendo renderizado um card com um país', async () => {
    renderWithRouter(<App />);

    /* const loading = screen.getByText('Loading...');
  
    await waitForElementToBeRemoved(loading, { timeout: 60000 }); */
    
    const homeTitle = screen.getByRole('heading', { name: 'Encountered Country' });
    expect(homeTitle).toBeInTheDocument();

    const countryName = screen.getByText('Nome: Uruguai');
    expect(countryName).toBeInTheDocument();
  })

  test('Verifica se o botão de próximo país está funcionando corretamente', async () => {
    renderWithRouter(<App />);

    //const loading = screen.getByText('Loading...');
  
    //await waitForElementToBeRemoved(loading, { timeout: 60000 });
    
    const nextButton = screen.getByRole('button', { name: 'Próximo País' });
    userEvent.click(nextButton);

    const countryName = screen.getByText('Nome: Paraguai');
    expect(countryName).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
  })
})
