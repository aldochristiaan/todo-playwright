import { PlaywrightTestConfig, devices } from '@playwright/test';
import 'dotenv/config';

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.BASE_URL,
    headless: process.env.HEADLESS?.toLowerCase() === 'true',
    viewport: {
      width: Number(process.env.SCREEN_WIDTH) || 1280,
      height: Number(process.env.SCREEN_HEIGHT) || 720,
    },
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
    actionTimeout: 0,
  },
  timeout: Number(process.env.TIMEOUT || 30) * 1000,
  expect: {
    timeout: Number(process.env.EXPECT_TIMEOUT || 5) * 1000,
  },
  retries: Number(process.env.RETRIES || 0),
  testDir: './tests',
  globalSetup: './global-setup',
  globalTeardown: './global-teardown',
  reporter: [['line'], ['allure-playwright'], ['html']],
  outputDir: process.env.OUTPUT_DIR || 'test-results/',
  workers: Number(process.env.WORKERS) || undefined,
  fullyParallel: process.env.FULLY_PARALLEL?.toLowerCase() === 'true',
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { channel: 'chrome' },
    // },
  ],
};

export default config;
