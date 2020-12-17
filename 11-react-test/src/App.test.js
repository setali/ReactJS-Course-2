import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {getByText} = render(<App />);
  getByText(/learn react/i)
  // expect(getByText(/learn react/i)).toBeInTheDocument();
});
