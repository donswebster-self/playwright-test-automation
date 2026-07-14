import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,

  reporter: [['html', { open: 'on-failure' }]],
  
  use: {
    baseURL: process.env.APP_URL,
    testIdAttribute: 'data-test',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
