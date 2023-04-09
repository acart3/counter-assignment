// import necessary react testing library helpers here
// import the Counter component here
import { render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
//import Fetch from './fetch'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
  
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const counterValue = screen.getByText('0');
  expect(counterValue).toBeInTheDocument();
});

test('clicking + increments the count', async () => {
  // Complete the unit test below based on the objective in the line above
  await userEvent.click(screen.getByText('+'));
  expect(await screen.findByText('1')).toBeInTheDocument();

});

test('clicking - decrements the count',async () => {
  // Complete the unit test below based on the objective in the line above
  await userEvent.click(screen.getByText('-'));
  expect(await screen.findByText('-1')).toBeInTheDocument();
});
