// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  testMatch: 'POM_1.spec.js',

  timeout: 30*1000,
  expect :{
    timeout: 5*1000

  },

  reporter:'html',
  use: {
     browserName:"chromium",
     headless:false,
     actionTimeout: 10000,
     navigationTimeout: 10000,
     screenshot:'on',
     trace:'on'

  },

  
});