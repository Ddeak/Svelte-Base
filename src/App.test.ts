import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/svelte';

import App from './App.svelte';

test('abc', () => {
  const screen = render(App, { name: 'world' });

  expect(screen.getByText('Hello world!')).toBeInTheDocument();
});
