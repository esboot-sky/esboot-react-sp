import { test, expect } from 'vitest';

// import Home from '@/modules/demo/app';
import { add } from '@/modules/demo/test';

test('Demo', () => {
  expect(add(1, 2)).toBe(3);
  // const { container } = render(<Home />);

  // expect(container.querySelector('p')?.textContent).toBe('close');
});
