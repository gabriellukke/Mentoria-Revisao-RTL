/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

describe('App.js', () => {
  test('Testa se existe os links de navegação', async () => {
    renderWithRouter(<App/>);

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
  
    const aboutLink = screen.getByRole('link', { name: 'About' });
    expect(aboutLink).toBeInTheDocument();

    const allLink = screen.getByRole('link', { name: 'All' });
    expect(allLink).toBeInTheDocument();
  });

  test('Testa o redirecionamento do Link About', () => {
    const { history } = renderWithRouter(<App/>);

    const aboutLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(aboutLink);
  
    expect(history.location.pathname).toBe('/about')

    const aboutTitle = screen.getByRole('heading', {
      name: /about rest countries api/i,
    });

    expect(aboutTitle).toBeInTheDocument();
  })
})

