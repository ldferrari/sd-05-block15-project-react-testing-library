import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

afterEach(cleanup);

describe('Testes de funcionalidade da página Favorite Pokemons', () => {
  it('Caso a pessoa não tenha pokémons favoritos, a mensagem No favorite pokemon found deve aparecer na tela',() => {
    const { getByText } = render(
      <MemoryRouter>
        <FavoritePokemons />
      </MemoryRouter>,
    );
  
    expect(getByText('No favorite pokemon found')).toBeInTheDocument();
  });

  it('A página não deve exibir nenhum card de pokémon não favoritado', () => {
    const { getByText, getByLabelText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

  fireEvent.click(getByText(/more details/i));
  fireEvent.click(getByLabelText(/pokémon favoritado/i));
  fireEvent.click(getByText(/Favorite Pokémons/i));

  expect(getByText(/More details/i)).toBeInTheDocument();
  });
});
