const {test, expect}=require('@playwright/test');
const {LoginPage}=require('./POM/Login_Page.spec')
const {POM_Manager}=require('./POM/POM_Manager.spec');
const { log } = require('node:console');
const dataset=JSON.parse(JSON.stringify((require("./POM/POM_1.json"))))
const dataset2=JSON.parse(JSON.stringify((require("./POM/POM_2.json"))))

//To Run Parallel
test.describe.configure({mode:'parallel'})
test('POM -1 withot POM Manager', async({browser})=>{

  const context= await browser.newContext();
  const page=await context.newPage();

  const loginCred=new LoginPage(page);
  
  await loginCred.url("https://demo.cyclos.org/ui/login")
  await loginCred.validLogin("DeepakShankar99","Deepak@123")
  
  await expect(page).toHaveTitle("Dashboard - Cyclos");

  

})

test('POM -2 with POM Manager', async({browser})=>{

  const context= await browser.newContext();
  const page=await context.newPage();

  const login=new POM_Manager(page);

  const loginCred= login.getloginpage();

  await loginCred.url("https://demo.cyclos.org/ui/login")
  await loginCred.validLogin("DeepakShankar99","Deepak@123")
  
  await expect(page).toHaveTitle("Dashboard - Cyclos");

  

})


test('POM-3 Using DataSet', async({browser})=>{

  console.log("POM Using dataset");
  
  const context=await browser.newContext();
  const page= await browser.newPage();

  const loginPage=new LoginPage(page);
  await loginPage.url(dataset.url);
  await loginPage.validLogin(dataset.username,dataset.password);
  await expect(page).toHaveTitle("Dashboard - Cyclos");

})

test(`@POM-4 Using Template literals ${dataset.username}`, async({browser})=>{

  console.log("POM Using dataset using Template literals");
  
  const context=await browser.newContext();
  const page= await browser.newPage();

  const loginPage=new LoginPage(page);
  await loginPage.url(dataset.url);
  await loginPage.validLogin(dataset.username,dataset.password);
  await expect(page).toHaveTitle("Dashboard - Cyclosss");

})

for(const data of dataset2){

test(`@POM-5 Using different dataset ${data.username}`, async({browser})=>{

  console.log("POM Using different dataset using Template literals");
  
  const context=await browser.newContext();
  const page= await browser.newPage();

  const loginPage=new LoginPage(page);
  await loginPage.url(data.url);
  await loginPage.validLogin(data.username,data.password);
  await expect(page).toHaveTitle("Dashboard - Cyclos");

})

}




  
