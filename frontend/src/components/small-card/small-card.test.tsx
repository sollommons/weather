import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SmallCard } from './small-card';
import { mockSmallCardItem } from '../../utils/mocks';


describe('Small card item component', () => {

  it('should render component', () => {
    const { getByTestId } = render(
      <SmallCard
        icon={mockSmallCardItem.icon}
        name={mockSmallCardItem.name}
        value={mockSmallCardItem.value}
        desc={mockSmallCardItem.desc}
      />
    );
    expect(getByTestId('small-card-item-container')).toBeInTheDocument();
  })

  it('should display correct data', () => {

    render(
      <SmallCard
        icon={mockSmallCardItem.icon}
        name={mockSmallCardItem.name}
        value={mockSmallCardItem.value}
        desc={mockSmallCardItem.desc}
      />
    );

    expect(screen.getByRole('img', { name: /icon/i })).toHaveAttribute('src', mockSmallCardItem.icon);
    expect(screen.getByText(mockSmallCardItem.name)).toBeInTheDocument();
    expect(screen.getByText(`${mockSmallCardItem.value} ${mockSmallCardItem.desc}`)).toBeInTheDocument();
  });
})
