import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ForecastItem } from './forecast-item';
import { mockForecastItem } from '../../utils/mocks';


describe('Forecast item component', () => {

  it('should render component', () => {
    const { getByTestId } = render(
      <ForecastItem
        day={mockForecastItem.day}
        time={mockForecastItem.time}
        temp={mockForecastItem.temperature}
      />
    );
    expect(getByTestId('forecast-item-container')).toBeInTheDocument();
  })

  it('should display forecast item', () => {

    render(
      <ForecastItem
        day={mockForecastItem.day}
        time={mockForecastItem.time}
        temp={mockForecastItem.temperature}
      />
    );

    expect(screen.getAllByTestId('forecast-item-container'));
  });

  it('should format date and temperature correctly', () => {
    render(
      <ForecastItem
        day={mockForecastItem.day}
        time={mockForecastItem.time}
        temp={mockForecastItem.temperature}
      />
    );

    expect(screen.getByText(/Sunday/i)).toBeInTheDocument();
    expect(screen.getByText(/12:00/i)).toBeInTheDocument();
    expect(screen.getByText(/20 °C/i)).toBeInTheDocument();
  });

  it('should handle empty forecast', () => {
    expect(screen.queryByRole('forecast-item')).toBeNull();
  });

})
