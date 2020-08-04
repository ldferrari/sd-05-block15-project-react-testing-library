import React from 'react';
import { cleanup, render } from '@testing-library/react';
import About from '../components/About';

afterEach(cleanup);

test('Elementos no componente About', () => {
  const { queryByText, container } = render(<About />);
  const aboutTag = queryByText('About Pokédex');
  expect(aboutTag).toBeInTheDocument();
  expect(aboutTag.tagName).toBe('H2');
  expect(container.querySelectorAll('p').length).toBe(2);
  expect(container.querySelector('img')).toHaveAttribute('src', 'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
});
