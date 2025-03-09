import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { describe, it, expect, vi } from 'vitest';
import { Forecast } from './forecast';
import { mockForecast } from '../../utils/mocks';
import { withStore } from '../../utils/mock-component';

const testStore = configureStore({
  reducer: {
    main: () => ({ forecast: mockForecast }),
  },
});

vi.mock('../../store/main-process/selectors', () => ({
  getForecast: vi.fn(() => mockForecast),
}));

describe('Forecast component', () => {

  it('should render component', () => {
    const { getByTestId } = render(
      <Provider store={testStore}>
        <Forecast />
      </Provider>
    );
    expect(getByTestId('forecast-container')).toBeInTheDocument();
  })

  it('should display forecast items', () => {

    render(
      <Provider store={testStore}>
        <Forecast />
      </Provider>
    );

    expect(screen.getAllByTestId('forecast-item-container')).toHaveLength(2);
  });

  it('should format date and temperature correctly', () => {
    render(
      <Provider store={testStore}>
        <Forecast />
      </Provider>
    );

    expect(screen.getByText(/Sunday/i)).toBeInTheDocument();
    expect(screen.getByText(/12:00/i)).toBeInTheDocument();
    expect(screen.getByText(/20 °C/i)).toBeInTheDocument();
  });

  it('should handle empty forecast', () => {

    render(
      <Provider store={testStore}>
        <Forecast />
      </Provider>
    );

    expect(screen.queryByRole('forecast-item-container')).toBeNull();
  });

  // it('should generate unique keys', () => {  // TODO надо ли этот тест?

  //   const { container } = render(
  //     <Provider store={testStore}>
  //       <Forecast />
  //     </Provider>
  //   );

  //   // Проверяем наличие ключей
  //   const items = container.querySelectorAll('[key]');
  //   const keys = Array.from(items).map(item => item.getAttribute('key'));
  //   console.log(items);
  //   expect(keys).toEqual([
  //     '0-2025-03-09T12:00:00',
  //     '1-2025-03-10T15:00:00'
  //   ]);
  // });

  // import { store } from '../../store';

  it('should work with real store', () => {
    const { withStoreComponent } = withStore(<Forecast />, {
      Main: {  // TODO types(
        forecast: [
          { date: '2025-03-09T12:00:00', temperature: 20 }
        ]
      }
    });

    render(withStoreComponent);

    expect(screen.getByText(/Sunday/i)).toBeInTheDocument();
    expect(screen.getByText(/20 °C/i)).toBeInTheDocument();
  });
})
