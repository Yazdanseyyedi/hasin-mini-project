import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/این یک مینی پروژه آزمایشی برای شرکت حصین است که توسط میر یزدان سیدی پیاده سازی شده است/i);
  expect(linkElement).toBeInTheDocument();
});
