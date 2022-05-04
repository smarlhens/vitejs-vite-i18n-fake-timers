import { afterAll, afterEach, vi } from 'vitest';

//  Close server after all tests
afterAll(() => {
  vi.resetAllMocks();
});

// Reset handlers after each test `important for test isolation`
afterEach(() => {
  vi.restoreAllMocks();
});
