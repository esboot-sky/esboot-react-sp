import { expect, test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
// import { fireEvent } from '@testing-library/user-event';

import Home from '@/modules/demo/app';

test('Demo', () => {
  const { container } = render(<Home />);

  expect(container.querySelector('p')?.textContent).toBe('close');
});
