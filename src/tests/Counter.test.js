// import necessary react testing library helpers here
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import the Counter component here
import Counter from '../components/Counter';


beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText(/Counter/);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const initialCountValue = screen.getByTestId('count');
  expect(initialCountValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementsCount = screen.getByText('+');

  const clickCount = screen.getByTestId('count');

  userEvent.click(incrementsCount);
  expect(clickCount).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const incrementsCount = screen.getByText('+');
  const decrementsCount = screen.getByText('-');

  const clickCount = screen.getByTestId('count');

  userEvent.click(incrementsCount);
  expect(clickCount).toHaveTextContent('1');
  userEvent.click(decrementsCount);
  expect(clickCount).toHaveTextContent('0');
});
