import { FullConfig } from '@playwright/test';

const globalTeardown = async (config: FullConfig) => {
  // TODO :  Add something to run after all tests executed.
};

export default globalTeardown;
