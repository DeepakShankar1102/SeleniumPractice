// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  testMatch: 'POM_1.spec.js',
  retries:2,
  workers:10,

  timeout: 30*1000,
  expect :{
    timeout: 5*1000

  },

  reporter:'html',
   projects:[
    
    {
        name:"PR1",
        use:{
     browserName:"chromium",
     headless:false,
     actionTimeout: 10000,
     navigationTimeout: 10000,
     screenshot:'on',
     trace:'on',
     video:'on',

            }

        
    },

    {
        name:"PR2",
        use:{
            
             browserName:"firefox",
             headless:false,
             actionTimeout: 10000,
             navigationTimeout: 10000,
             screenshot:'on',
             video:'retain-on-failure',
             trace:'on',
              viewport:{width:300,height:300},
           // ...devices['iPhone 11'],
            ignoreHttpsError:true,
           permissions:['geolocation'],

        }
        
    }
  

   ],

  use: {
    
     browserName:"chromium",
     headless:false,
     actionTimeout: 10000,
     navigationTimeout: 10000,
     screenshot:'on',
     trace:'on'

  },

  
});