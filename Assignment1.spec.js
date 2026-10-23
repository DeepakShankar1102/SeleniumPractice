const {test, expect}=require('@playwright/test')


function futureDateValue() {
   const date = new Date(Date.now() + 60 * 60 * 1000);
   date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
   return date.toISOString().slice(0, 16);
}


test('Assignment-1', async({browser})=>{

   const context= await browser.newContext();
   const page=await context.newPage();

   //Navigation
   await page.goto('https://eventhub.rahulshettyacademy.com');
   //Login
   await page.getByPlaceholder('you@email.com').fill('deepakgen99@gmail.com');
   await page.getByLabel('password').fill('Deepak@123');
   await page.locator('#login-btn').click();
 

   
   await page.getByRole('button', { name: 'Admin' }).click();
   await page.locator('.absolute .flex').nth(0).click();

   const Event_Title=`Test Event ${Date.now()}`
   await page.locator('#event-title-input').fill(Event_Title);
   await page.locator('#admin-event-form textarea').fill("Text area Description");
   await page.getByLabel('city').fill("Chennai");
   await page.getByLabel('Venue').fill("Venue Address");
   await page.getByLabel('Event Date & Time').fill(futureDateValue());
   await page.getByLabel('Price ($)*').fill("100");
   await page.getByLabel('Total Seats*').fill("50");
   await page.locator('#add-event-btn').click();
   await expect(page.getByText('Event created!')).toBeVisible();
   await page.pause();  
   






   

})