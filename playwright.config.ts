import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,

  reporter: [['html', { open: 'on-failure' }]],

  use: {
    baseURL: process.env.APP_URL || 'https://practicesoftwaretesting.com',
    testIdAttribute: 'data-test',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
        viewport: {width: 1920, height: 1080},
      },
    },
  ],
});