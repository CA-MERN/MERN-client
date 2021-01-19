# fridgeMate

##### Created by:
#### Adrienne Smith | [GitHub](https://github.com/aes89) | and Shelby El-rassi | [GitHub](https://github.com/Shelby219) |

---
### Front-end Repository
---

<div style="width:70%; margin: 0 auto;"><img src="./docs/home.png"/></div>

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/f03a4191-5b3c-4ca3-98dc-37bc6c6758a2/deploy-status)](https://app.netlify.com/sites/fridgemate/deploys) 
##### Deployed App: https://fridgemate.netlify.app/

##### Documentation Repository: https://github.com/CA-MERN/MERN-Part-A-Docs

##### Client Repository: https://github.com/CA-MERN/MERN-client

##### Server Repository: https://github.com/CA-MERN/MERN-server

---

### Purpose
<details>
<summary>Click to expand</summary>

The purpose of this application is for users to be able to enter ingredients which are always on their grocery list/fridge with the intent to search for recipes made up from those ingredients. The idea for this web application stemmed from the situation of the first Australian lockdown of Covid19, in which stores sold out of a lot of popular and favourite grocery items of customers. An application such as this means users can input the ingredients they have currently at home and recipes including these ingredients will be displayed. Alongside this factor is the need for users to stick to a grocery budget, so they do not want to be constantly going to the store to get expensive ingredients. Also, the type of users using this app are ones that need recipe inspiration for their weekly meals, ones that search recipes based on dietary requirements and excluded ingredients, and also users that are new to the cooking scene and want to start with cooking by just utilising ingredients already at home. This app can help to minimise food waste by helping users to combine items they may not have made a meal with otherwise.

The overall goal of this application is a search application based on user ingredient lists, with the ability to save those recipes, rate and review recipes. 

</details>

---

### Features
<details>
<summary>Click to expand</summary>

#### MVP Features

* Users:
    * Sign up
    * Login
    * Logout
    * Edit account details in account settings.
    * Upload profile image.
    * Edit user preferences. 
* Navigation Bar:
    * When not signed in can navigate to Sign up/login pop out windows.
    * When not signed in the other nav links forward to sign up/login pop out windows.
    * When signed in can navigate to 'My Fridge'.
    * When signed in can navigate to 'My Pantry Staples'.
    * When signed in can navigate to 'My Preferences'.
    * When signed in can click the Search Recipes button and will forward to browse recipe page.
* Home Page:
    * Random food joke displayed each refresh.
    * Get Searching Today link with either returns recipe page or link to sign up.
* My Fridge Page:
    * Can add new ingredients.
    * Can delete ingredients.
    * Can clear whole fridge list.
    * Predictive text on the ingredient input.
* Pantry Staples Page:
    * Starts off with default staples (like salt, pepper, olive oil, vinegar).
    * Can add new staples.
    * Can delete staples.
    * Can clear whole staples list.
    * Predictive text on the ingredient input.
* Browse Recipe Search Page:
    * View list of returned recipes based on the user's fridge and pantry contents.
    * Save option under each recipe to save to user's recipe collection. 
    * Title of the page is how many recipes the user can make.
    * Each recipe you can see name, image, prep time.
    * Each recipe you can see how many ingredients you have to make it e.g. "You have 4/8 ingredients".
* Single Recipe page:
    * The recipe information includes name, image, source, prep time, servings and cuisines, dish types and diets. 
    * Ingredients are listed.
    * Directions are listed.
    * Button to save the recipe to user collection. 
    * If the recipe is in the users saved collection display data from that, else call the food API.
* Account Settings:
    * User can update their profile picture, name, email and password. 
    * Current data gets preloaded as placeholder.
    * Save button then loads and alerts the user of saved. 
* Preferences:
    * The user can set diet and health preferences (via checkboxes) which will automatically be used to filter the recipes returned. 
* Saved Recipes:
    * Each recipe you can see name, image, category, prep time.
    * Click on the recipe to go to single recipe page and display recipe data from saved data.
   
#### Future Features

* Priority - Improve UI around profile image upload - input validation needed, instructions on accepted formats needed, change image to update AFTER upload so user gets feedback on when process complete.
* Search History capture.
* Oauth with sign up and login.
* Recipes of the week on the home page.
* Save recipes by different collections.
* Categories for ingredients in Fridge.
* User can rate a recipe.
* User can write a review on a recipe (including picture).
* Filter feature used to filter recipes, this include diet, health labels, cuisine and prep time. 
* Filter buttons on saved recipe page at the top to show dishes based off Breakfast, lunch, dinner, snack.
* Highlight ingredients in single recipe page that the user has a does not have. 

</details>


---

### Target audience

<details><summary>Click to expand</summary>

**Key Demographics**
* Gender: Anyone, predominantly women.
* Age: 18-55.
* Family status: Cooking for self, partner or dependents.
* Profession: Students, professionals and homemakers.
* Language: English.
* Main interests: cooking, health, diet, low waste, saving money, trying new things.

**Key Psychographics**
* Dislikes repetitive meals, like variety and new options.
* Dislikes spending lots of money on lots of ingredients and food waste.
* Enjoys sharing and preparing meals.

**Challenges**
* Finds it difficult to create recipes.
* Has a limited food budget or limited access to ingredients.
* Has an interest in cooking but limitations (e.g. budget, dietary restrictions, skill).

**Preferred Channels**
* Follows celebrity chefs and food themed accounts on social media.
* Searches for recipes/blogs on Google.

**Preferred Content Types**
* Articles.
* Blog posts.
* Social media posts.


</details>

---
### Dataflow Diagram

<details><summary>Click to expand</summary>

[Click here to View on Lucid Chart](https://lucid.app/lucidchart/invitations/accept/63016e48-cfa5-489b-b7fc-e2e8c84311d2)


![Dataflow-Diagram](./docs/diagrams/DFD.png)
</details>

---
### Application Architecture Diagram

<details><summary>Click to expand</summary>

[Click here to View on Lucid Chart](https://lucid.app/lucidchart/invitations/accept/8e98769d-0f56-4e25-8b80-25d8c69c2047)

![Application-Architecture-Diagram](./docs/diagrams/aad.png)
</details>    

---
### User Stories


#### Personas
<details><summary>Click to expand</summary>

![Sarah Persona](./docs/persons/sarah.png)
![Wayne Persona](./docs/persons/wayne.png)
![Liza Persona](./docs/persons/Eliza.png)
![Bez Persona](./docs/persons/bez2.png)

</details>

#### Intial Draft Stories

<details><summary>Click to expand</summary>

* As a overall user:
    * I can go to the home page sign up to create an account
    * I can login
    * I can navigate to my account settings and edit my account details
    * I can navigate to the account settings and delete the account
    * I can navigate to my dash and see what recipes I have interacted with (vote, save, reviewed) so I can quickly access/reaccess them later.
    * I can navigate to my dash and see my current groceries organised by category
    * I can navigate to my dashboard and see my current pantry staples
    * I can navigate to main interface and see 'get searching today'!
    * Once an initial search is done, I want see 'refresh again'
    * From main interface  I can make a recipe search 
    * From main interface I can navigate to my grocery lists
    * From main interface I can navigate to my saved recipes
    * I can add more groceries with predictive input
    * I can delete groceries from my list
    * I can clear all my grocery list
    * I can clear all of my grocery list
    * I can see my recipes returned search with them categories in breakfast, lunch and dinner
    * I can further filter by diet (eg vegan) and prep time
    * I can see my recipes returned via list with image, name, time and calories
    * I can click go to recipe
    * I can click a like heart on the recipe
    * On a clicked recipe page I can click the save recipe button
    * On a clicked recipe page I can view the whole recipe
    * On a clicked recipe page I can rate the recipe

</details>


#### MVP
 
<details><summary>Click to expand</summary>


##### Overall User
* As a overall user who is not logged in I can navigate to the home page and:
    * click "Login/Sign Up" and get a pop up.
    * click on any link and be prompted to log in/sign up with a popup. 

* As a overall, logged in user I can navigate to the home page and:
    * navigate to my <a href="#accsettings">account settings</a>.
    * search recipes and be redirected to <a href="#searchresults">search results</a>. 

* As a overall user I navigate to my <a id="accsettings">account settings and:</a>
    * edit my account details.
    * delete my account.

* As an overall user I can see my side navigation on all pages and:
    * navigate to <a href="#myfridge">My Fridge</a> page.
    * navigate to <a href="#mypantry">My Pantry Staples</a> page.
    * navigate to <a href="#mysaved">My Saved Recipes</a> page.
    * search recipes and be redirected to <a href="#searchresults">search results</a>.
    * navigate to the <a href="#mypreferences">My Preferences</a> page.
    * click sign up if not logged in
    * click login if not logged in
    * click logout if logged in

* As an overall user I can navigate to <a id="myfridge">My Fridge page</a> and:
    * remove all items from my list with the "Empty My Fridge" button, which will confirm my choice.
    * add ingredients to my list using predictive input.
    * remove ingredients from my list.
    * search for recipes by pressing the "search" button and be redirected to the <a href="#searchresults">results</a> page.
  
* As an overall user I can navigate to <a id="mypantry">My Pantry Staples page</a> and:
    * add a pantry staple.
    * delete a pantry staple.

* As an overall user I can navigate to <a id="mysaved">My Saved Recipes page</a> and:
    * view my saved recipes with their name, category and preparation time.
    * delete a saved recipe
    * navigate to a <a href="#single">single recipe's</a> page.

* As an overall user, when redirected to the <a id="searchresults">search result</a> page I can:
    * view returned results with their name, category and preparation time.
    * navigate to a <a href="#single">single recipe's</a> page.
    * filter results with the filter button, returning a pop up with filter choices.
    * click save recipe
    
* As an overall user I can navigate to a <a id="single">single recipe page</a> and:
    * view full details of a recipe including original web address, average user rating, category, preparation time, servings, calories, ingredients, link to full directions and photo.
    * navigate to the original web address.
    * view how many ingredients I have and how many are required (ie "You have 7/10 required ingredients").

* As an overall user I can navigate to <a id="mypreferences">My Preferences page</a> and:
    * enter/update preferred dietary requirements (e.g. vegetarian).
    * enter/update preferred dietary restrictions (e.g. no nuts).

##### Sarah 
* As a mother and busy worker…
    * I would like to have a tool where I can utilise my current groceries to the fullest.
    * I would like to find some recipe variety for my family.
    * I would like to be able to filter via prep time in case I want a quick and easy recipe.
    * I would like a tool that is simple and easy to use.
    * I would like to see my saved recipes so I can use them another time if I like them.
    * I would like to filter via gluten free due to my child’s allergies.
    * I would like to see the nutrient values in the recipes as I am health conscious.

##### Wayne 
* As a full-time worker and novice chef...
    * I would like to view times on recipes when deciding what to try to cook.
    * I would like a simple interface without confusing options.
    * I would like the app to remember my items so I do not need to repeatedly enter staples.
    * I would like to see how many ingredients are missing when selecting a recipe.
    
##### Eliza 
* As a student and vegetarian…
    * I would like to have a tool to find recipe inspiration with my favourite ingredients.
    * I would also like a tool to find vegetarian dishes with alternatives to my favourite ingredients.
    * I would like to be able to filter recipes based on my dietary needs as a vegetarian.
  
##### Bez 
* As a chef with an egg surplus, an interest in learning different ways to cook them and some extra time for cooking...
    * I would like to save recipes for later.
    * I would like to see how many more ingredients I need without reading the whole recipe.
    * I would like to filter searches by how long a recipe takes, for when I have more/less time.


</details>


#### Nice to have Extra Features
 
<details><summary>Click to expand</summary>

* As a overall user who is not logged in I can navigate to the home page and:
    * login/sign up using Google Oauth.

* As a overall user I can navigate to home page and:
    * View some highlighted recipes of the week.

* As an overall user, when redirected to the <a id="searchresults">search result</a> page I can:
    * view returned results as above along with average star rating. 
    * Click save recipe and be prompted to save to a collection.

* As an overall user I can navigate to <a id="mysaved">My Saved Recipes page</a> and:
    * View my recipe collections
    * Create a new collection
    * Edit a collection
    * Delete a collection

* As an overall user I can navigate to <a id="myfridge">My Fridge page</a> and:
    * View all my ingredients by category
  
* As an overall user I can navigate to a <a id="single">single recipe page</a> and:
    * view recipe as above, along with the average star rating.
    * view written all written reviews at bottom of recipe.
    * Click review recipe, and pop out window comes up to write a review and add a star rating. 
    
</details>

---
### Design Planning

#### Mood Board

<details><summary>Click to expand</summary>

![Mood board](./docs/diagrams/moodboard.png)

</details>

#### Wireframes

<details><summary>Click to expand</summary>

[Click here to View on Miro](https://miro.com/app/board/o9J_led5nw4=/)

#### Mobile
![Mobile Wireframe 1](./docs/wireframes/v1/mobilewv1.jpg)    
#### Tablet
![Tablet Wireframe 1](./docs/wireframes/v1/tablet.jpg)
#### Desktop
![Desktop Wireframe 1](./docs/wireframes/v1/desktop.jpg)
#### Nav and Footer
![Nav and Footer](./docs/wireframes/v1/nav_footer.jpg)
#### Pop Out Windows
![Pop Out Windows](./docs/wireframes/v1/pop_out.jpg)

</details>
        

#### Prototypes

<details><summary>Click to expand</summary>

[Click here to View on Framer](https://framer.com/projects/Mockups-Prototypes--gQTgOBRzoQePnxdnXfiq-51eZf)

#### Pages
![Home](./docs/prototypes/home.png)
![Fridge](./docs/prototypes/fridge.png)
![pantry](./docs/prototypes/pantry.png)    
![pantry-fridge-no-items](./docs/prototypes/pantryfridgenoitems.png)  
![browse](./docs/prototypes/browse.png)   
![saved-recipes](./docs/prototypes/saved-recipes.png)  
![single-recipes](./docs/prototypes/single-recipe.png)  
![preferences](./docs/prototypes/pref.png)  
![settings](./docs/prototypes/settings.png)  
![pop-outs](./docs/prototypes/pop-outs.png)  
![404](./docs/prototypes/404.png)  

#### How They Link
![linking](./docs/prototypes/linking.png)  

</details>

----

### Screen Shots
<details>
<summary>Click to expand</summary>


<img src="./docs/screenshots/screenshot1.png" alt="Screen Shots of Website" width="80%" />
<img src="./docs/screenshots/screenshot2.png" alt="Screen Shots of Website" width="80%" />
<img src="./docs/screenshots/screenshot3.png" alt="Screen Shots of Website" width="80%" />
<img src="./docs/screenshots/screenshot4.png" alt="Screen Shots of Website" width="80%" />
<img src="./docs/screenshots/screenshot5.png" alt="Screen Shots of Website" width="80%" />
<img src="./docs/screenshots/screenshot6.png" alt="Screen Shots of Website" width="80%" />
<img src="./docs/screenshots/screenshot7.png" alt="Screen Shots of Website" width="80%" />
<img src="./docs/screenshots/screenshot8.png" alt="Screen Shots of Website" width="80%" />
<img src="./docs/screenshots/screenshot9.png" alt="Screen Shots of Website" width="80%" />
<img src="./docs/screenshots/screenshot10.png" alt="Screen Shots of Website" width="80%" />
<img src="./docs/screenshots/screenshot11.png" alt="Screen Shots of Website" width="80%" />
<img src="./docs/screenshots/screenshot12.png" alt="Screen Shots of Website" width="80%" />
<img src="./docs/screenshots/screenshot13.png" alt="Screen Shots of Website" width="80%" />




</details>

---

### Tech stack
<details><summary>Click to expand</summary>

**Design and Planning**
* **Trello** - Project management and planning. 
* **Miro** - Wireframing. 
* **xtensio** - Personas.
* **Framer** - Prototyping. 
* **Lucid Chart**- Diagramming. 
* **Slack** - Team communication. 

**Frontend**
* **HTML5**  - A markup language used for structuring and presenting content.
* **CSS3** - A style sheet language used for describing the presentation of a document
* **CSS Modules** -A CSS Module is a CSS file in which all class names and animation names are scoped locally by default, class names become similar to JavaScript variables . A CSS Module goes into the compiler, and CSS comes out the other side.
* **React JS** - An open-source, front end, JavaScript library for building user interfaces or UI components.
* **JavaScript**  -

**Backend**
* **Node JS** - An open-source, cross-platform, back-end, asynchronous event-driven JavaScript runtime environment that executes JavaScript code outside a web browser.
* **AWS s3** - Amazon S3 or Amazon Simple Storage Service is a service offered by Amazon Web Services that provides object storage through a web service interface. This was utilised in our profile image upload feature, in which the file is uploaded to S3 and then saved as a URL in MongoDb.

**Database**
* **MongoDB** - Is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

**Other**
* **Spoonacular API** - Recipe API that includes over 360,000 recipes as well as an open source recipe database.
* **Heroku**  - Is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud supporting several programming languages. This was used as our server deployment service.
* **Netlify** - A powerful serverless platform with an intuitive git-based workflow. This was used as our client side deployment. 
* **GitHub** - Is a provider of Internet hosting for software development and version control using Git and it was our Version Control Host. 
* **[Noun Project](https://thenounproject.com/)** - Icons/images which included the nav bar icons.
* **[PngTree](pngtree.com)** - Images of food on nav bar.
* **[Pixabay](pixabay.com)** - Background images. 
* **[Unsplash](unsplash.com)** - Background images. 


</details>

---

### Libraries and Dependencies

<details>
<summary>Click to expand</summary>

**Server**

* **express 4.17.1** - Is a back end web application framework for Node.js designed for building web applications and APIs.
* **mongoose 5.7.1** - Is an Object Data Modeling (ODM) library for MongoDB and Node. js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.
* **mongoose-bcrypt ^1.9.0** - Is a package that will automatically encrypt the appropriate fields when a document is created or saved using the regular static and instance methods. With mongoose versions >= 4.1. 3, the plugin also provides automatic encryption when updates are performed using update queries.
* **express-session 1.17.1** - Simple session middleware- Used to assign a unique session to each user on implementation. 
* **connect-mongo 3.2.0** - User sessions created with express session can then be saved in DB. Removing expired sessions. 
* **cors 2.8.5** - Is a middleware utilised cross origin resource sharing between the Express server and React client.
* **passport 0.4.1** - Is a flexible and modular authentication middleware for Node. js that can be easily implemented in an Express-based web application using various strategies like using a username and password, Facebook, Twitter, and more.
* **passport-jwt  4.0.0** - A Passport strategy for authenticating with a JSON Web Token. This module lets you authenticate endpoints using a JSON web token. This was utilised to verify our secure routes by passport checking if the JWT was present in the cookie. 
* **passport-local 1.0.0** - Passport strategy for authenticating with a username and password. This module lets you authenticate using a username and password in your Node. js applications.
* **dotenv 8.2.0** - Dotenv is a zero-dependency module that loads environment variables from a . env file into process. env .
* **body-parser 1.19.0** - This npm extracts the entire body portion of an incoming request stream and exposes it on req.body.
* **cookie-parser 1.4.5** - This npm parses the Cookie header and populates req.cookies with an object keyed by the cookie names.
* **axios 0.21.1** - Is a promise-based HTTP client that supports an easy-to-use API and can be used in both the browser and Node. js.
* **aws-sdk ^2.805.0** - Utilised to develop server-side web applications using Node, Node Modules, and the Node HTTP server. Allowing access AWS services directly from your RESTful applications using Node.js frameworks. This was implementing in our profile picture upload feature, using s3 to upload the file then extra the URL to save in mongoDB.
* **multer 1.4.2** - Is a node. js middleware for handling multipart/form-data , which is primarily used for uploading files.
* **multer-s3 2.9.0** - Streaming multer storage engine for AWS S3.
* **celebrate 13.0.4** - Is an express middleware function that wraps the joi validation library. This allows you to use this middleware in any single route, or globally, and ensure that all of your inputs are correct before any handler function. This was utilised to verify our login. 
* **express-validator 6.8.0** -Is a set of Express. js middleware that wraps validator. js , a library that provides validator and sanitizer functions. This was utilised to validation our register user input, account settings, params and recipes. 
* **jsonwebtoken 8.5.1** - JSON Web Token (JWT) is a compact URL-safe means of representing claims to be transferred between two parties. Utilised to create our JSON web tokens on register and login. 
* **nodemailer 6.4.17** - Is a module for Node. js applications to allow simple mail sending. This was utilised for our forgot password feature. 

**Server Development** 

* **nodemon 1.19.2** - Is a tool that helps develop node. js based applications by automatically restarting the node application when file changes in the directory are detected. 
* **mocha 6.2.0** - Is a JavaScript test framework running on Node. js and in the browser, making asynchronous testing simple. 
* **expect 24.9.0** - This package exports the expect function used in Jest. This was utilised in our primary server side testing. 
* **nyc 15.1.0** - Is Istanbul's state of the art command line interface. It was utilised to output our test coverage reports. 
* **supertest 6.0.1** - HTTP assertions made easy via superagent which works with any testing framework to test HTTP assertions. This was used to test our all back end API routes. 


**Client**

* **react 17.0.1** - An open-source, front end, JavaScript library for building user interfaces or UI components.
* **react-dom 17.0.1** - This package serves as the entry point to the DOM and server renderers for React.
* **react-router-dom 5.2.0** - React Router is a collection of navigational components that compose declaratively with your application, DOM bindings for React Router. 
* **react-scripts 4.0.1** - includes scripts and configuration used by Create React App used to initiate the project.
* **formik 2.2.5** - Is a open source library for React it is declarative, intuitive and adoptable. Its key features are getting values in and out of form state, validation and error messages and handling form submission.This library was used for all our form inputs, excluding preferences. 
* **axios 0.21.1** - Is a promise-based HTTP client that supports an easy-to-use API and can be used in both the browser and Node. js.
* **react-redux 7.2.2** - Is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.
* **@reduxjs/toolkit** - Is the official, opinionated, batteries-included toolset for efficient Redux development, intended to be the standard way to write Redux logic. It includes utility functions and several Redux add ons. 
* **redux-thunk 2.3.0** - This middleware allows you to write action creators that return a function instead of an action. The inner function receives the store methods dispatch and getState as parameters.
* **react-helmet 6.1.0** - Is simple component that makes it easy to manage and dynamically set what's in the document's head section. 
* **react-modal 3.12.1** - A modal is a message box that is displayed on top of your screen that put an overlay on the screen; therefore, they take visual precedence over all the other elements. React modal allowed for easy implementation of message box modals which we used for login, register, forgot/reset password and a help box. 
* **react-loading 2.0.3** - Easy to use loading animations for React projects using SVG animations. Utilised for our main loading screen. 
* **react-reveal 1.2.2** - Is high performance animation library for React. It provides a simple way to add cool reveal-on-scroll animations to your React app. 
* **react-toastify 6.2.0** - Allows for easy notification adding. Used for all our success and error notifications. 
* **material-auto-rotating-carousel 3.0.2** - A package created using Material-UI to be a moving carousel. This was used for our introduction for new users. 
* **react-swipeable-view 0.13.9** - This package was used in conjunction with material auto rotating carousel. 
* **material UI** - Is the most popular React framework, it enables using React components faster development or building a custom design. 
* **@material-ui/core 4.11.2** - Our main styling layout for done with Material UI grid and paper
* **@material-ui/icons 4.11.2** - This package was used for various icons in our application. 
* **@material-ui/lab 4.0.0-alpha.57** -This was used to import our 'Autocomplete' component which was very useful for our ingredient input. 
* **@cypress/instrument-cra 1.4.0** - This package helps Cypress to work with "Create React Apps" without ejecting react-scripts.
* **dotenv 8.2.0** -  This loads environment variables from a .env file into process.env.
* **lodash 4.17.20** - A Javascript utility library. Used to filter ingredients and clear the Autocomplete component on submission. 
* **web-vitals 0.2.4** - Used with Cypress. A modular library for measuring all the Web Vitals metrics.

* **@testing-library/jest-dom 5.11.4** - A companion library for Testing Library that provides custom DOM element matchers for Jest.

**Client Development**

* **cypress 6.2.1** - Is a front end testing tool for end-to-end, integration and unit tests.
* **@cypress/code-coverage 3.9.1** - Peery dependency with Cypress, used for code coverage reporting but does not instrument code which allows for code coverage calculation. 
* **@testing-library/cypress 7.0.3** - This allows you to use all the useful DOM Testing Library methods in your tests.
* **cypress-localstorage-commands 1.3.1** - Extends Cypress' cy commands with localStorage methods. Allows preserving localStorage between tests and disabling localStorage.
* **@babel/core 7.12.9** - Babel is a JavaScript compiler.
* **@babel/preset-env 7.12.7** - A Babel preset for each environment.
* **@babel/preset-react 7.12.7** - Babel preset for all React plugins.
* **babel-plugin-istanbul 6.0.0** - A Babel plugin that instruments your code with Istanbul coverage.
* **babel-jest 26.6.3** - Jest plugin to use babel for transformation. 
* **identity-obj-proxy 3.0.0** - An identity object using ES6 proxies. Useful for testing trivial webpack imports. For instance, you can tell Jest to mock this object as imported CSS modules; then all your className lookups on the imported styles object will be returned as-is.
* **jest-transform-stub 2.0.0** - Jest doesn't handle non JavaScript assets by default. You can use this module to avoid errors when importing non JavaScript assets.
* **@wojtekmaj/enzyme-adapter-react-17 0.4.1** - Unofficial adapter for React 17 for Enzyme.
* **enzyme 3.11.0** - Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output. Used for snapshots.
* **enzyme-adapter-react-16 1.15.5** - Has peer dependencies on react and react-dom. Adapts enzyme to the specific version of react.
* **enzyme-to-json 3.6.18** - Convert Enzyme wrappers to a format compatible with Jest snapshot testing.
* **react-test-renderer 17.0.1** - Used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.

</details>

---

### API Endpoints

<details>
<summary>Click to expand</summary>

| User | Ingredients | Preferences| Recipes| 
|:---:|:---:|:---:|:---:|
|POST user/register |GET ingredients/:username/fridge| GET preferences/:username| GET recipes/browse|
|POST user/login |POST ingredients/:username/fridge/new|PATCH preferences/:username/edit|GET recipes/saved-recipes|
|GET user/logout |DELETE ingredients/:username/fridge/delete|   |GET recipes/:id|
|GET user/:username/account-settings |DELETE ingredients/:username/fridge/clear-all|   |POST recipes/add|
|PATCH user/:username/account-settings |GET ingredients/:username/pantry|    |DELETE recipes/:id|
|POST user/forgot-password|POST ingredients/:username/pantry/new|||
|GET user/reset-password|DELETE ingredients/:username/pantry/delete|||
|PUT user/update-password|DELETE ingredients/:username/pantry/clear-all|||
|POST user/:username/add-profile-picture||| |

</details>

---

## Testing

This application has been tested in Chrome, Safari and FireFox on Mac OS Big Sur 11.1.

Our application has gone through comprehensive testing with Mocha for the Server and Cypress for the client. Along with countless manual tests using Postman and the console. 

### Manual Testing Log - Development
Also see screen recordings in /docs/devtestvideo.

#### Server 

<details>
<summary>Click to expand</summary>

| Date | Feature | Test | Notes| 
|:---:|:---:|:---:|:---:|
| 16/12/2020 | https://api.spoonacular.com/recipes/findByIngredients?ingredients=chicken,+cheese&number=25&apiKey={API KEY HERE} | Correct | Spooancular FIND BY INGREDIENTS API Endpoint test via Postman |
| 16/12/2020 | https://api.spoonacular.com/recipes/complexSearch?includeIngredients=lemon,strawberries&fillIngredients=true&intolerances=gluten&number=25&apiKey={API KEY HERE} | Correct | Spooancular COMPLEX SEARCH API Endpoint test via Postman |
| 16/12/2020 | https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey={API KEY HERE}| Correct | Spooancular API Endpoint test via Postman |
| 16/12/2020 | https://api.spoonacular.com/recipes/informationBulk?ids=715538,716429&apiKey={API KEY HERE} |Correct | Spooancular BULK RECIPE SEARCH VIA ID API Endpoint test via Postman |
| 16/12/2020 | https://api.spoonacular.com/recipes/random?number=2&apiKey={API KEY HERE} | test | Spooancular RANDOM RECIPE SEARCH API Endpoint test via Postman |
| 16/12/2020 | FUNCTION -  ingredientJoiner() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| 16/12/2020 | FUNCTION -  preferenceSeparator() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing| 
| 16/12/2020 | FUNCTION -  queryEditor() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| 16/12/2020 | FUNCTION -  userQueryBuilder() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| 24/12/2020 | FUNCTION -  recipeIdGetter() | Console Test | First Tested via console with dummy data, before incorporating into Mocha Unit Testing|
| Date | Feature | Test | Notes| 


</details>

#### Client

<details>
<summary>Click to expand</summary>

| Date | Feature | Test |
|:---:|:---:|:---:|
| 07/12/2020 | Preferences creates false/true object | Form completed manually, able to console log returned object showing { "vegetarian": true, "vegan": false ...} |
| 08/12/2020 | Log in and Register Modals | Able to click on Log in or Register, modal appears. Able to click on Log in or Register within modal to switch forms. |
| 24/12/2020 | User register | Manual Testing via the console checking if the redux state, and local storage was updated on register then login. |
| 24/12/2020 | User login | Manual Testing via the console checking if the redux state, and local storage was updated on login. Additionally checking the JWT storage as cookie.|
| 24/12/2020 | User Logout | Manual Testing via the console. |
| 25/12/2020 | User Settings | Manual Testing via the console checking if the redux state, and local storage was updated on useEffect calling the DB get request and returning the user data.|
| 25/12/2020 | User Settings Update | Manual Testing via the console. |
| 28/12/2020 | Browse Recipe Page| Json File of test data used to load the page |
| 28/12/2020 | Browse Recipe Page| Manual Testing via the console checking if the redux state, and local storage was updated. |
| 06/01/2021 | Fridge Page| Manual Testing via the console. |
| 06/01/2021 | Pantry Page| Manual Testing via the console. |
| 06/01/2021 | Add New Fridge Ingredient | Manual Testing via the console.|
| 06/01/2021 | Add New Pantry Ingredient | Manual Testing via the console.|
| 06/01/2021 | Delete Fridge Ingredient | Manual Testing via the console.|
| 06/01/2021 | Delete Pantry Ingredient | Manual Testing via the console.|
| 06/01/2021 | Delete All Fridge Ingredients | Manual Testing via the console.|
| 06/01/2021 | Delete All Pantry Ingredients | Manual Testing via the console.|
| 11/01/2021 | Forgot Password | Test Account created to send forgot password request. |
| 11/01/2021 | Reset Password | Manual Testing via the console. |
| 11/01/2021 | Update Password | Manual Testing via the console. |
| 07/01/2021 | Saved Recipe Page| Json File of test data used to load the page |
| 12/01/2021 | Add Saved Recipe | Manual Testing via the console. |
| 12/01/2021 | Delete Saved Recipe | Manual Testing via the console. |

| Sprint | Feature | Test |
|:---:|:---:|:---:|
| 1 | Register Form | Form is able to be typed into and returns input as an array |
| 1 | Log In Form | Form is able to be typed into and returns input as an array |
| 1 | Register Form | Register form returns errors when email format incorrect, when fields are blank after interacting with them, when password does not meet requirements and when the confirmed password does not match the password |
| 1 | Log In Form | Log in form returns errors when email format incorrect, when fields are blank after interacting with them and when password does not meet requirements, however this error is generic |
| 1 | User Settings Form | Form is able to be typed into and returns input as an array. Photo file is stored in browser but not state or database yet. |
| 2 | Log In Modal | Can click on "log in", modal opens, modal closes when click "cancel" or click away from modal |
| 2 | Register Modal | Can click on "register", modal opens, modal closes when click "cancel" or click away from modal |
| 2 | Log In - Redux | When user logged in, username can be seen logged in console  |
| 2 | Log Out - Redux | When user logged out, username can be seen logged in console as null |
| 2 | Preferences | Radio buttons are able to be selected/deselected and submitted, returning input as an array |
| 3 | Fridge | Form loads correctly, can type into field |
| 3 | Pantry | Form loads correctly, can type into field |
| 3 | Preferences | Form loads correctly, radio buttons can be selected/deselected, form can be submitted which returns an array |
| 4 | Profile image | Image can be uploaded on user settings page, photo is displayed without manual refresh |
| 4 | User Settings | User settings can be updated independently from the profile image  |
| 4 | Pantry | Ingredients can be selected from the Autocomplete field which are displayed as tags within the field, and cannot be selected from the drop down a second time |
| 4 | Fridge | Ingredients can be selected from the Autocomplete field which are displayed as tags within the field, and cannot be selected from the drop down a second time |
| 5 | Home | Home page loads with appropriate components (nav, joke, home page, footer). |
| 5 | Carousel | Carousel opens when "Where to start" clicked, slides display as expected.  |
| 5 | Carousel | Carousel closes when user clicks away from modal, "Register" modal opens.  |
| 5 | Carousel | Carousel closes when user clicks "Get started" in modal, however "Register" modal does not open. Persisting bug. |
| 5 | Nav | Nav renders on wide home screen, is hidden on smaller screens. Comes into view on hover on top of page and menu icon.  |
| 5 | Home - no user | All links redirect to home page excluding log in/register/where to start. |
| 5 | Help | Help modal opens from link in nav. Closes when "back" clicked or clicks away from modal. |
| 5 | Register | Register modal opens from nav link. Closes when "cancel" clicked or user clicks away from modal. |
| 5 | Register | Changes to "Login" modal when "Have an account?" link clicked. |
| 5 | Login | Login modal opens from nav link. Closes when "cancel" clicked or user clicks away from modal. |
| 5 | Login | Changes to "Register" modal when "New?" link clicked. |
| 5 | Register | New user can register from Register modal. Appropriate error messages displayed for incorrect or missing input (advises required format or "required" if empty after field is interacted with). |
| 5 | Login | User can login from login modal. Appropriate error messages displayed for incorrect or missing input (advises required format or "required" if empty after field is interacted with). |
| 5 | Register | Changes to "Login" modal when "Have an account?" link clicked. |
| 5 | Home with user | Successful login and registration redirects to home page, "Yu are logged in!" toast displays. |
| 5 | Nav with user | When user authenticated, "log in" and "register" links change to "log out". |
| 5 | Logout | When "log out" clicked, user is redirected to home page, toast displays "come back soon!" and home pge returns to stat where links redirect to home page. |
| 5 | Nav/Profile image | Users without an uploaded image display the default silhouette image, otherwise their uploaded image is displayed.  |
| 5 | Nav/Profile image | Clicking the silhouette image links to user settings page. |
| 5 | User settings | Form loads with previously entered username, email and fields for password displaying "password" and "retype password" and profile image upload form. |
| 5 | User settings | All fields, must be entered to update any user setting, i.e. password cannot be updated without entering/changing username or email address. Note for future improvement. |
| 5 | Profile image | Clicking "browse" opens file browser, file can be selected. Selecting incorrect format (e.g. word document) shows "oh no!" toast and does not give option to upload. |
| 5 | Profile image | Clicking "browse" opens file browser, file can be selected. Selecting correct format (e.g. .jpeg) shows the image above the form and changes the nav image on submit. Clicking upload displays confirmation toast. |
| 5 | Profile image | Clicking "upload" with no image selected  displays "oh no!" toast. |
| 5 | Profile image | Attempting to upload incorrect file type crashes DB. Added to future features list with priority. |
| 5 | Fridge | Loads as expected with previously entered ingredients or blank form if none. |
| 5 | Fridge | Can remove individual ingredients and all ingredients via empty fridge.  |
| 5 | Fridge | "Browse Recipes" button works as expected - displays browse recipes section. |
| 5 | Pantry | Loads as expected with previously entered staples or blank form if none. |
| 5 | Pantry | Can remove individual ingredients and all ingredients via empty pantry.  |
| 5 | Pantry | "Browse Recipes" button works as expected - displays browse recipes section. |
| 5 | Autocomplete | Displays fridge or pantry lists on appropriate pages. |
| 5 | Autocomplete | Selects ingredient from list and adds ingredient as a tag to autocomplete field. Ingredient cannot be selected from list again. |
| 5 | Autocomplete | "Add Ingredients" clears tags and displays the ingredients individually in the fridge/pantry cutting board space. |
| 5 | Autocomplete | Persisting bug - removing an individual ingredient or all ingredients returns them to the Autocomplete field. They can be entered multiple times using the "add ingredients" button.|
| 5 | Autocomplete | Displays fridge or pantry lists on appropriate pages. Handled using server-side validation however not ideal UI. |
| 5 | Autocomplete | Displays fridge or pantry lists on appropriate pages. |
| 5 | Preferences | Loads as expected with previously entered preferences or blank form if none. |
| 5 | Preferences | Preference options can be selected/deselected using check boxes. "Update Preferences" button displays "Preferences updated..." toast to confirm.  |
| 5 | Browse Recipes | Loads as expected with suggested recipes if no ingredients etc entered, or suggested recipes matching entered ingredients/staples. |
| 5 | Browse Recipes | Clicking "save recipe" shows "ou have saves this recipe!" toast, saving the same recipe displays "you have already saved this recipe" toast. |
| 5 | Browse recipes | Persisting bug - sometimes "3/5" ingredients will display as "/NaN", possibly an API issue. Required further testing. |
| 5 | Browse Recipes | Previously searches recipes will display on page after changing ingredients/staples, clicking "refresh search" button on browse recipes page will display new recipes. |
| 5 | Saved Recipes | Loads as expected with previously saves recipes or "Looks like you have no recipes saved!"|
| 5 | Saved Recipes | Clicking "remove recipe" on a saved recipe displays "removed from saved recipes" toast and recipe is no longer visible in component. |
| 5 | Saved Recipes | Both "back to search" and "browse recipes" buttons return user to Browse Recipe page. |


</details>

---

### Automated Testing Log - Development

#### Server 

<details>
<summary>Click to expand</summary>

  
![Image of tests](./docs/testhtml.png)

#### Expecting Tests
| Date | Feature | Test | Notes| 
|:---:|:---:|:---:|:---:|
| 01/12/2020 | GET Register User | Passing |   |
| 01/12/2020 | POST Register User | Passing |   |
| 01/12/2020 | GET Login User | Passing |   |
| 01/12/2020 | POST Login User | Passing |   |
| 08/12/2020 | GET Logout User | Passing |   |
| 01/12/2020 | Find a User from DB | Passing |   |
| 06/12/2020 | GET User Settings | Passing | Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place |
| 06/12/2020 | PATCH Edit User Settings | Passing |   |
| 07/12/2020 | GET User Preferences  | Passing | Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place  |
| 07/12/2020 | PATCH Edit User Preferences  | Passing  | Ensure req.body.preference is updated in codebase  |
| 07/12/2020 | GET Fridge Ingredients | Passing |  Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place |
| 07/12/2020 | POST New Fridge Ingredient | Passing |   |
| 08/12/2020 | DELETE Fridge Ingredient | Passing |   |
| 10/12/2020 | DELETE ALL Fridge Ingredients | Passing |   |
| 08/12/2020 | GET Pantry Ingredients | Passing |  Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place |
| 08/12/2020 | POST New Pantry Ingredient| Passing |   |
| 08/12/2020 | DELETE Pantry Ingredient | Passing |   |
| 10/12/2020 | DELETE ALL Pantry Ingredients | Passing |   |
| 09/12/2020 | POST Upload profile picture to s3 | Passing |   |
| 16/12/2020 | GET - Browse Recipes- via Recipe Utils  returnRecipesToBrowse(req) | Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place | This function tests finding a User in Db per params, builds the query info per the data from user, uses that data to axios request Spoonacular API for recipes based off ingredients, then collect those recipes IDs, sanitize the data, then use the IDS for another API call to get the detailed recipe information. |
| 20/12/2020 | Recipe Controller  displayRecipes(req) | Passing |  |
| 21/12/2020 | GET All Saved Recipes | Passing | Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place && Line 27 of recipe utils allowed me to test it using test user |
| 21/12/2020 | GET Single Saved Recipes if in DB | Passing | Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place |
| 21/12/2020 | GET Single Saved Recipes if not in DB- use Spoonacular | Passing | Passes, but being able to test with this middleware (passport.authenticate('jwt', {session: false})) not in place && Double check this- async promise |
| 22/12/2020 | POST Add new saved recipe | Passing | Line 74 of recipe controller allowed me to test using test user |
| 22/12/2020 | DELETE A saved recipe | Passing |  |
| 11/01/2020 | GET Reset Password with token- expired link| Passing | Notes| 
| 11/01/2020 | POST Forgot Password | &cross; | Notes| 
| 11/01/2020 | GET Reset Password with token | &cross; | Notes| 
| 11/01/2020 | PUT Reset Password in DB | &cross; | Notes| 

#### Expect to Fail Tests

| Date | Feature | Test | Notes| 
|:---:|:---:|:---:|:---:|
| 09/12/2020 | POST Login User- Incorrect Password  | Passing |   |
| 09/12/2020 | POST Register User- Incorrect Email and Password Format  | Passing |   |
| 09/12/2020 | GET User Settings- Incorrect Params  | Passing |   |
| 09/12/2020 | PATCH User Settings- Incorrect  Email, Password, Name Format  | Passing |   |
| 22/12/2020 | GET Single Saved Recipes- Recipe ID not found  | Passing |  |
| 11/01/2020 | POST Register Create- username already existing| Passing | Notes| 
| 11/01/2020 | POST Register Create- if Error is thrown when creating user | Passing | Notes| 
| 11/01/2020 | GET All Ingredients-Fridge- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | GET All Ingredients-Pantry- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | POST New Ingredient-Fridge-- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | POST New Ingredient-Pantry-- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | DELETE A Ingredient-Fridge- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | DELETE A Ingredient-Pantry- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | DELETE All Ingredients-Pantry- if Error is thrown 500 | Passing | Notes| 
| 11/01/2020 | DELETE All Ingredients-Fridge- if Error is thrown 500 | Passing | Notes| 


</details>

#### Client

<details>
<summary>Click to expand</summary>

####  Tests Expected to Pass
| Framework | Feature | Test | Notes| 
|:---:|:---:|:---:|:---:|
| Cypress | Home page without user | Should have the right initial state |  Pass |
| Cypress | Home page without user | Loads the home page |  Pass |
| Cypress | Home page without user | Shows the nav |  Pass |
| Cypress | Home page without user | Shows the nav |  Pass |
| Cypress | Home page with user logged in | Logs in |  Pass |
| Cypress | Home page with user logged in | Loads the home page |  Pass |
| Cypress | Home page with user | Shows the nav |  Pass |
| Cypress | Home page with user | Navigates to My Fridge |  Pass |
| Cypress | Home page with user | Navigates to Pantry Staples |  Pass |
| Cypress | Home page with user | Navigates to Saves Recipes |  Pass |
| Cypress | Home page with user | Navigates to My Preferences |  Pass |
| Cypress | Log in modal | Has the right initial state |  Pass |
| Cypress | Log in modal | Closes login modal |  Pass |
| Cypress | Browse Recipes | Should load browse |  Pass |
| Cypress | Log in | Should have the right initial state |  Pass |
| Cypress | Forgot Password Modal | Shows forgot password modal |  Pass |
| Cypress | Forgot Password Modal | Closes forgot password modal |  Pass |
| Cypress | Forgot Password Modal | Enters incorrect email format and gets an error |  Pass |
| Cypress | Forgot Password Modal | Enters no email and gets an error |  Pass |
| Cypress | Fridge | Logs in and loads home page with username in nav |  Pass |
| Cypress | Fridge | Should have the right initial state |  Pass |
| Cypress | Fridge | Loads the fridge page |  Pass |
| Cypress | Fridge | Filters ingredients based on input |  Pass |
| Cypress | Fridge | Should have the right initial state |  Pass |
| Cypress | Help modal | pens and closes Help modal from home page when not logged in |  Pass |
| Cypress | Logs in | Should have the right initial state |  Pass |
| Cypress | Logs in | Should have the right initial state |  Pass |
| Cypress | Logs in | Opens log in modal |  Pass |
| Cypress | Logs in | Closes log in modal |  Pass |
| Cypress | Logs in | Doesn't log in with incorrect credentials |  Pass |
| Cypress | Logs in | Enters incorrect email format and no password and and gets an error |  Pass |
| Cypress | Logs in | Logs in and logs out |  Pass |
| Cypress | Preferences | Logs in and loads homepage with username in nav |  Pass |
| Cypress | Preferences| Loads the preferences page |  Pass |
| Cypress | Preferences | Shows preferences from state|  Pass |
| Cypress | Preferences | Previous selections are loaded from state |  Pass |
| Jest | Nav | Snapshot test |  Pass |
| Jest | Footer | Snapshot test |  Pass |
| Cypress | Register | Opens register modal |  Pass |
| Cypress |Register | Closes register modal |  Pass |
| Cypress |Register | Registers a user |  Pass |
| Cypress |Register | Correct errors for incorrect input |  Pass |




####  Tests Expected to Fail
| Framework | Feature | Test | Notes| 
|:---:|:---:|:---:|:---:|
| Cypress | Home page without user | Should be logged in |  Fail |
| Cypress | Home page with user logged in | Should not be logged in |  Fail |
| Cypress | Fridge | Loads the preferences page (when navigating to fridge) |  Fail |
| Cypress | Log in | Logs in and loads homepage with incorrect username in nav |  Fail |
 | Cypress | Log in | Enters incorrect email format and password and and gets an error (incorrect error) |  Fail |
 | Cypress |Register | Incorrect errors for incorrect input |  Fail |




</details>

---

###  User Testing  - Development


<details>
<summary>Click to expand</summary>

<br>

#### Screen Recordings
[User Test 1](https://github.com/CA-MERN/MERN-server/tree/main/docs/devtestvideo/user-test-dev-1.mp4)

[User Test- Reset Password](https://github.com/CA-MERN/MERN-server/tree/main/docs/devtestvideo/dev-password-reset-.mp4)

[User Desktop](https://github.com/CA-MERN/MERN-server/tree/main/docs/devtestvideo/full-dev-test.mp4)

[User Mobile](https://github.com/CA-MERN/MERN-server/tree/main/docs/devtestvideo/phone-overview.mp4)

[User Tablet](https://github.com/CA-MERN/MERN-server/tree/main/docs/devtestvideo/tablet-overview.mp4)


#### Test Notes

| Date | Feature | Test | Notes | Refactored | Screen Record ? |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 11/01/2020 | Register | Register an Account | Password validation too complex, simplify | &cross; | |
| 11/01/2020 | Home Page | Initial Application View | Onboarding needed for application explanation | Yes | |
| 11/01/2020 | Fridge Page | Initial View | Description/prompt needed for adding ingredients | Yes | |
| 11/01/2020 | Pantry Page | Initial View | Description/prompt needed for adding Staples | Yes | |
| 11/01/2020 | Preferences Page | Initial View | Description/prompt needed for choosing preferences | Yes | |
| 11/01/2020 | Home | Initial View | Help button needed in navigation | Yes | |
| 11/01/2020 | Browse Recipes | Page Load | Additional loading time needed for recipes to return from DB | Yes | |
| 14/01/2020 | Add Fridge Ingredients | Component | Clear Autocomplete ingredient component after adding |  Yes | User Test 1  |
| 14/01/2020 | Add Pantry Staples | Component | Clear Autocomplete ingredient component after adding |  Yes | User Test 1 |
| 14/01/2020 | Pantry Page| Component | Error - filterpantry function not working , undefined |  Yes | User Test 1 |
| 14/01/2020 | Browse Recipe | Component | Loading fridge animation applied to all browse recipe buttons |  &cross; | User Test 1 |
| 14/01/2020 | Browse Page | Recipe Title | Recipe Title - room not large enough for longer recipe names |  Yes | User Test 1  |
| 14/01/2020 | Saved Recipe Page | Component | Need back to saved recipes button for smoother user experience  |  Yes | User Test 1 |
| 14/01/2020 | User Settings Page | Component | Add loading screen after update settings for smoother UX  |  Yes | User Test 1 |
| 14/01/2020 | Login In Modal  | Modal | Add loading screen for after clicking login |  Yes | User Test 1  |
| 18/01/2020 | Username | Nav | Username coming up on nav bar- causing issues with saving recipes  |  Yes | User Test- Reset Password |
| 18/01/2020 | Single Recipe | Checker local storage | Property ID of Null coming up. |  Yes- refactored |  |

</details>

---

###  User Testing   - Production

<details>
<summary>Click to expand</summary>

Manual development testing was repeated on deployment and finalised on 19/01/2021. 

| Feature | Test |
|:---:|:---:|
| Home | Home page loads with appropriate components (nav, joke, home page, footer). |
| Carousel | Carousel opens when "Where to start" clicked, slides display as expected.  |
| Carousel | Carousel closes when user clicks away from modal, "Register" modal opens.  |
| Carousel | Carousel closes when user clicks "Get started" in modal, however "Register" modal does not open. Persisting bug. |
| Nav | Nav renders on wide home screen, is hidden on smaller screens. Comes into view on hover on top of page and menu icon.  |
| Home - no user | All links redirect to home page excluding log in/register/where to start. |
| Help | Help modal opens from link in nav. Closes when "back" clicked or clicks away from modal. |
| Register | Register modal opens from nav link. Closes when "cancel" clicked or user clicks away from modal. |
| Register | Changes to "Login" modal when "Have an account?" link clicked. |
| Login | Login modal opens from nav link. Closes when "cancel" clicked or user clicks away from modal. |
| Login | Changes to "Register" modal when "New?" link clicked. |
| Register | New user can register from Register modal. Appropriate error messages displayed for incorrect or missing input (advises required format or "required" if empty after field is interacted with). |
| Login | User can login from login modal. Appropriate error messages displayed for incorrect or missing input (advises required format or "required" if empty after field is interacted with). |
| Register | Changes to "Login" modal when "Have an account?" link clicked. |
| Home with user | Successful login and registration redirects to home page, "Yu are logged in!" toast displays. |
| Nav with user | When user authenticated, "log in" and "register" links change to "log out". |
| Logout | When "log out" clicked, user is redirected to home page, toast displays "come back soon!" and home pge returns to stat where links redirect to home page. |
| Nav/Profile image | Users without an uploaded image display the default silhouette image, otherwise their uploaded image is displayed.  |
| Nav/Profile image | Clicking the silhouette image links to user settings page. |
| User settings | Form loads with previously entered username, email and fields for password displaying "password" and "retype password" and profile image upload form. |
| User settings | All fields, must be entered to update any user setting, i.e. password cannot be updated without entering/changing username or email address. Note for future improvement. |
| Profile image | Clicking "browse" opens file browser, file can be selected. Selecting incorrect format (e.g. word document) shows "oh no!" toast and does not give option to upload.|
| Profile image | Clicking "browse" opens file browser, file can be selected. Selecting correct format (e.g. .jpeg) shows the image above the form and changes the nav image on submit. Clicking upload displays confirmation toast. |
| Profile image | Clicking "upload" with no image selected  displays "oh no!" toast. |
| Profile image | Attempting to upload incorrect file type crashes DB. Added to future features list with priority. |
| Fridge | Loads as expected with previously entered ingredients or blank form if none. |
| Fridge | Can remove individual ingredients and all ingredients via empty fridge.  |
| Fridge | "Browse Recipes" button works as expected - displays browse recipes section. |
| Pantry | Loads as expected with previously entered staples or blank form if none. |
| Pantry | Can remove individual ingredients and all ingredients via empty pantry.  |
| Pantry | "Browse Recipes" button works as expected - displays browse recipes section. |
| Autocomplete | Displays fridge or pantry lists on appropriate pages. |
| Autocomplete | Selects ingredient from list and adds ingredient as a tag to autocomplete field. Ingredient cannot be selected from list again. |
| Autocomplete | "Add Ingredients" clears tags and displays the ingredients individually in the fridge/pantry cutting board space. |
| Autocomplete | Persisting bug - removing an individual ingredient or all ingredients returns them to the Autocomplete field. They can be entered multiple times using the "add ingredients" button.|
| Autocomplete | Displays fridge or pantry lists on appropriate pages. Handled using server-side validation however not ideal UI. |
| Autocomplete | Displays fridge or pantry lists on appropriate pages. |
| Preferences | Loads as expected with previously entered preferences or blank form if none. |
| Preferences | Preference options can be selected/deselected using check boxes. "Update Preferences" button displays "Preferences updated..." toast to confirm.  |
| Browse Recipes | Loads as expected with suggested recipes if no ingredients etc entered, or suggested recipes matching entered ingredients/staples. |
| Browse Recipes | Clicking "save recipe" shows "ou have saves this recipe!" toast, saving the same recipe displays "you have already saved this recipe" toast. |
| Browse recipes | Persisting bug - sometimes "3/5" ingredients will display as "/NaN", possibly an API issue. Required further testing. |
| Browse Recipes | Previously searches recipes will display on page after changing ingredients/staples, clicking "refresh search" button on browse recipes page will display new recipes. |
| Saved Recipes | Loads as expected with previously saves recipes or "Looks like you have no recipes saved!"|
| Saved Recipes | Clicking "remove recipe" on a saved recipe displays "removed from saved recipes" toast and recipe is no longer visible in component. |
| Saved Recipes | Both "back to search" and "browse recipes" buttons return user to Browse Recipe page. |



<br>

#### Screen Recordings

[User Test Production 1](https://github.com/CA-MERN/MERN-server/tree/main/docs/prodtestvideo/Production-test-1.mp4)

[User Test Production Full](https://github.com/CA-MERN/MERN-server/tree/main/docs/prodtestvideo/main-prod-test.mp4)

| Date | Feature | Test | Notes | Refactored | Screen Record ? |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 17/01/2020 | CORS | App | CORS error- has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. |  Yes- Procfile was missing | n/a  |
| 18/01/2020 | Cookies | App | Cookies are being sent from server, but browser is not holding them. |  Yes |  Production user test video 1  |


</details>

---


### Planning & Project Management

<details>
<summary>Click to expand</summary>

##### Initial Management Set Up

As shown below we organised our planning based cards showing the rubric, testing, server, client and nice to have. With additional cards for development and production for any notes or tasks needed to be recorded at a later date. 

<img src="./docs/trello/firstplan.png" alt="initial planning" width="500" height="400"/>
<img src="./docs/trello/firstplan-2.png" alt="initial planning"  width="500" height="400"/>


We determined that setting weekly/fortnightly sprints was an ideal agile format for our project. We created a card in Trello that organised them by date and we were able to form checklists of what we wanted to have completed at the end of each sprint for the front-end and back-end. Whilst working we have a current doing card and then a completed card which we are able to distinguish each feature/component being worked on and what is completed. Additionally a card for revision proved helpful as we would have tasks completed, but they would in turn need revising/additional testing later on.

<img src="./docs/trello/sprintplanning.png" alt="sprint planning" width="60%" />

In the initial planning stages we planned our Trello for the server/client based off features which would be the names of the branches. Our first feature for server/client was the user and during the first Sprint it was decided Shelby would complete the back-end code and testing and Adrienne would complete the front-end code and testing.  Each morning we begin with our own stand up in which we show what we have worked on, explained our code, listed any challenges and also any wins. Since we are working on back-end and front-end separate, this ensures we are both know what is happening on each feature. 

Initially we were going to switch front-end and back-end for each feature, but we decided for the MVP product that Shelby would stick to the back-end and Adrienne on the front-end to ensure we delivered a great MVP product on time. This plan tailored to each of our strengths. This being said, once the MVP is completed all our nice to have features that we want to implement, we will switch roles for the implementation of these features. Mid-way during the projects timeline, Shelby did start completing the client side styling code along with the code which connects the front-end and the back-end, this allowed for Adrienne to continue completing the client-side testing and main react code for the features. 


</details>

#### Sprint 1- 30/11- 6/12

<details>
<summary>Click to expand</summary>

<img src="./docs/trello/sprint1-1.png" alt="sprint 1 card 1" width="80%" />
<img src="./docs/trello/sprint1-2.png" alt="sprint 1 card 1" width="80%" />
<img src="./docs/trello/sprint1-3.png" alt="sprint 1 card 1"  width="80%" />

###### USER-server

At this start of this Sprint, Shelby set up the initial back-end server code and all the express/mongo/mongoose connections and tested it was all set up correctly. Then the first component worked on was the implementation of passport, passport-JWT and jsonwebtoken for user account and authorisation. The implementation of this involved using the express session to pass around the JWT. Alongside this was the initial user account routes , the setting up of the testing of these API end points was a steep initial learning curve. This began with researching testing frameworks in which Mocha along with super test was chosen. Shelby decided on constructing the tests with a description of each Http request eg. 'GET /ingredients/:username/fridge’. The get requests were test with expecting a 200 code back along with JSON content, the post/patch requests tested by sending dummy data through the test database and testing the response matching, and the delete requests were tested with a 204 response code. The biggest hurdles during the process were setting up the correct dummy data, the tear down data functions and deciding on the structure of the tests. 

Some issues were the concern of updating the user via account settings page and then the whole data being overridden, however this issue was solved for the moment since the whole user model is being sent to the account settings page, so there for can be returned with the new data. However this solution is ok for the level the project is at now, for future scalabilty this would need to be altered.


######  LOG IN AND REGISTER-client
Initial forms for registering a user and logging in were written using Formik. Input could be "submitted" as an array, but this is not connected to anything yet.  
Input validation was added to the forms regarding email format, password requirements and passwords matching for registration.

######  USER SETTINGS-client
The user settings form was written using the same Formik structure for the registration form to allow users to change their details e.g. password. 
A section to upload a profile image was also added. This caused some difficulties as Formik does not support this function by default. 

###### TESTING-client
Basic snapshot tests of existing components were written using Jest and Enzyme.

######  STRUCTURING-client
Component file structure was refactored to have /src/components/componentName/index.js for renaming ease i refactoring needed.

###### DIFFICULTIES-client
Forgot to add node_modules to .gitignore.


</details>

#### Sprint 2- 7/12- 13/12
<details>
<summary>Click to expand</summary>

<img src="./docs/trello/sprint2-1.png" alt="sprint 2 card 1" width="80%" />
<img src="./docs/trello/sprint2-2.png" alt="sprint 2 card 1"  width="80%" />


###### FRIDGE/PANTRY-server

During this sprint the CRUD for ingredients was implemented. Shelby managed to keep the codebase dry by not doing Fridge and Pantry CRUD, rather just implementing an Ingredient CRUD base and using conditionals checking the path name, which then determines which part of the user model gets updated. 

###### USER-server

When implementing s3 and Multer for profile image upload, some blockers were incorrect set up of IAM policy, the use of .single with multer (use .any to ensure the image would upload.)

Shelby also began implementing validation using express-validator starting with validation for the email, password and user information on registering, account settings page and login. 

Started writing passing fail tests to test the end points when errors arise. This pair with using validation I was able to test the results of invalid data being input for the user model. 

Current blockers are implementation of persisting cookies with mocha/supertest testing so tests can be run even with authenticated routes. eg. with the middleware of "passport.authenticate('jwt', {session: false})". Currently all  tests are based with this middleware not being implemented. Code that was tried includes, using superagent, setting headers, setting a beforeAll function of logging in the user and trying to manually set the cookies. The closest to success was using a beforeAll function of logging in the user, however accessing the cookies from that Http request response was not successful. This task will be moved to next sprint. 

###### STYLING-client

Completed the initial styling for the home/nav/login/register to start the basis of styling, to enable easier implementation of the react client-side.

######  REDUX-client

Redux was added to the project to manage global state. Redux may not be required for a project of this size but gives room for the project to grow. Users logging in and out managed through Redux.

######  LOG IN AND REGISTER-client

Log in and Register forms were developed to be modals accessed from the nav bar. Modals were opened and closed through Redux state (i.e setModalOpen("register OR login OR null");).

###### PREFERENCES-client

The preferences form was started. There was some difficulty getting Formik to iterate over the preferences list (vegetarian, vegan, cheap etc) with a radio button and it was decided to build this as a usual <form>. 

###### CYPRESS-client
Initial tests written for logging in and registering a user.

######  BLOCKERS-client
- Difficulty getting Formik to iterate over options with radio buttons.


</details>


#### Sprint 3- 14/12-27/12
<details>
<summary>Click to expand</summary>

<img src="./docs/trello/sprint3-1.png" alt="sprint 3 card 1" width="80%" />
<img src="./docs/trello/sprint3-2.png" alt="sprint 3 card 1"  width="80%" />


###### RECIPE-server

Began Work on this feature branch on the server client. Initial routes set up. The biggest challenge was the code required for the process of getting the user data from the DB (being ingredients and preferences), error handling, sanitising the data (functions checking if null, processing booleans into an array then finally a string), then sending the correct data to the Spoonacular API calls. During the code process of the helper functions a lot of manual testing done via the console was done with some dummy data, to ensure that the JS functions were working as intended. Additionally testing Spoonacular API via postman was done to determine with Http request URLs were the right ones to use for this application. 

Through Automatic testing coupled with some manual testing the main utility function for return recipe data for the browse page is:
finding a User in Db per params, builds the query info per the data from user, uses that data to axios request Spoonacular API for recipes based off ingredients, then collect those recipes IDs, sanitize the data, then use the IDS for another API call to get the detailed recipe information. 

In my testing of the main function in which makes all the API calls and data validation, I had some trouble testing with getting the data. I was trying to return it as a variable, then I used await outside the main async function (even though the test function was async). What you was needed was to wrap the await call inside an async function, and then call that async function in the top-level of your script. Immediately outputting the result just returned a promise pending, then using the given code with another await to return the promise returned undefined. The below is the serious of options:

In my first test call:

````js
const recipes = returnRecipesToBrowse(req);ƒr
console.log(recipes); // will give you something like Promise {pending}
````
Then this was tried:
````js
const recipes = await returnRecipesToBrowse(req);; // will error
console.log(recipes); //undefined
````
What was the final result was:
````js
const returnRecipesToBrowse = async (req) => {
   const recipes = await User.findOne({ username: req.user.username })
    .then(recipes =>  userQueryBuilder(recipes))
    .then(queryItems =>  sanitizeDataForIngredientQuery(queryItems))
    .then(recipesObject => recipeIdGetter(recipesObject.data))
    .then(data => detailedRecipeAPISearch(data))
    .then(recipes =>  {return recipes})
    .catch(error => {return error})
  return recipes
};  
 
returnRecipesToBrowse(req); // run the async function at the top-level, since top-level await is not currently supported in Node

````
I did not need to await on the final returnRecipesToBrowse(req) call, since Node won't exit until its event loop is empty.

When implementing the main code for displaying recipes for browsing, it was discovered that there were certain limitations with using the Spoonacular API. The 'search recipes' which enables a complex search with ingredients and other query parameters like diet and intolerances, proved not useful as it only displays recipes that have all the ingredients in the query not recipes that include one or more of the ingredients. This search was much too specific as we needed to return recipes with one or more of the query ingredients. To supplement the above option, it was decided to use the 'search recipes by ingredients', which will return recipes that include one or more the ingredients in the query, however the returned object is not detailed. Using the object returned above, the recipe ID's were extracted to then use in another query which is ' get recipe information bulk' which returns detailed recipe information using the recipe ID's as the parameters. The returned object from this query though I believe was limited by the paid tiers of the API. Which meant the preferences list was reduced down to just include vegetarian, vegan, gluten-free, dairy-free, very healthy, cheap, popular, sustainable, and low-fod-map. In future the payment tier may not opted to increase which would enable more preference options. 

To overcome the blocker of needing the information from the ingredient search query, but also the information from the get recipe bulk query, the used and missed ingredients were filtered out from the first lot of returned data, then passed onto the next function, so that after the bulk recipe query was returned the two objects could be joined and returned. 

###### END TO END CONNECTION

The initial connecting of the front-end and back-end was started. This started a learning curve with how having the JWT in a cookie works. To begin with registering a user was connected, and logging in a user, this followed some blockers including the register user function on the back-end not signing a JWT, and on the front-end determining how to keep a user logged in. Local storage was implemented for this issue with the storage housing the username and at the moment the JWT (which is not necessary, but just in place for manual testing). Along with local storage is the state manager being redux. 

######  FRIDGE PANTRY-client

Started the fridge and pantry components using the AutoComplete component and JSON ingredient/pantry lists from Shelby. The forms were built using the Formik library. Some difficulties were found around structuring shared functions and what needed to be separated. 

###### PREFERENCES-client

The preferences form was completed and ready to be connected to the database. The form was built using Formik again but using radio buttons and iterating over a separated list of preferences (vegetarian, sustainable etc). There is still some repetition as the values need to be initialized in Formik so if the list was edited, the form would also need to be edited rather than just updating the list.

###### LOG IN/OUT AND REGISTRATION-client

The registration and log in forms were completed to a point where it could be connected with the database.
Input validation/input errors were added to the user registration form. 

###### Blockers
- Adrienne had some difficulties properly adding .eslintcache to .gitignore and it had to be removed many, many times. 
- Dev tools was not showing state so the Redux dev tools were added and configured within the project to work with the firefox browser. 

</details>

#### Sprint 4- 28/12/20 - 10/1/21

<details>
<summary>Click to expand</summary>

<img src="./docs/trello/sprint4-1.png" alt="sprint 4 card 1" width="80%" />
<img src="./docs/trello/sprint4-2.png" alt="sprint 4 card 2" width="80%" />
<img src="./docs/trello/sprint4-3.png" alt="sprint 4 card 3" width="80%" />
<img src="./docs/trello/sprint4-4.png" alt="sprint 4 card 4"  width="80%" />

###### STYLING-client

Foundational styling was done as I went to ensure easy readability of the pages being worked on. This involved implementing a Grid layout from Material UI for styling. The main components used from Material UI include the autocomplete component, Grid, Paper and Buttons. Additional usage will be put in place once the final in depth styling is completed. 
Initial set up React Toastify for Notifications was put in place for later use. 
Some refining of a basic footer and the top logo for linking back to the home page was completed. 
Adjusted the user profile image styling as Adrienne was going to be implementing this code. 
Not found page was implementing and styled.

Loading screen was implemented with React Loading to enable a loading time frame for browse recipes, fridge, pantry and eventually saved recipes. To ensure the data has loaded correctly. The initial of adding transitions and effects for better user experience was started. 

###### BROWSE RECIPES-client

Browse Recipe component was created and some test data was put in place via a JSON file to enable to initially styling of the recipe cards. Like the separate ingredient component, using a separate recipe card component means it can be reused when it comes to displaying the saved recipes pages. 

Then the start of the coding process for calling the backend to return the recipes for browsing. The services code for calling the DB route was implementing quite quickly, initially with the idea that the DB would be called by clicking the search recipe button. This may be changed back to this. However right now it was changed that that button takes you to the browse recipe page, then a useEffect calls the DB and returns the browse data IF the local storage is empty. If the local storage has browse recipes in it. A major blocker during this project was the object coming up with [object, object]. This was discovered that local storage, in order to pass it around from page to page, requires the data to be stringified then parsed back. Once this was implementing the data displayed from local storage no issue.

The next step is being able to refactor the code to allow for if the user was to do a refresh search, that the browse recipe DB route will  be called again and then update local storage. Also to make it obvious to the user that if it was a search with no ingredients, that a random search was made just to show some random recipes. 

Issue: check if the server code is working correctly with taking fridge and pantry ingredients for the recipe search.

###### FRIDGE PANTRY-client

Adrienne implemented the foundational code for the fridge and pantry components and the functions for connecting to the back end, alongside was some great code for being able to save the state of multiple ingredients for adding to the DB. I just did some refactoring as instead of manually coding the add multiple ingredients, Material UI has this available in the autocomplete component. Additional I was able to incorporate the ingredient services methods.

The connecting of the backend to the frontend was completed for the fridge and pantry for adding, deleting and deleting all ingredients. Some issues along the way were being able to take the array of ingredients from autocomplete and adding them to the array in the DB. Initially it was adding the array to the array in DB, this was able to be resolved by updating on the server side the following:  

````js
from (newItem)

to (...newItem)

````

Then was the issue of duplicates being able to be added to the list. Adrienne is currently working on a fix for this issue, because as it stands you can add duplicates, but when you delete one, it deletes all as that is the server method of deleting. So to overcome this, a function for stopping duplicates is needed. 

###### USER-server

A blocker which was causing issues when finding by username and updating for settings and preferences, was this:

````js
//ISSUE
User.findOneAndUpdate(req.params.username)

//FIXED
User.findOneAndUpdate({ username:  req.params.username })

````

This above caused issue with for example it would update the wrong users profile image, and I believe it was updating the first user in the DB. 

A fix was made for the Regex for registering a user and the username, this was fixed so as to allow for usernames of 5 letters or more. 

A major blocker was the user password being rehashed each log in/update. It was thought that this was fixed with a pre mongoose model method, however it was discovered it was just the ingredients adding and saving that was overriding the current users information and rehashing the password. When they was changed to findOneAndUpdate instead of FindByID this issue was fixed.  

Another issue was on initial login the users current profile image was not loaded until navigating to the settings page, this was due to the DB not loading the profile on initial home page render. This was fixed by doing a single DB call to get the profile image and save in redux so that it would load on first login. 

###### INGREDIENTS-client

A conditional was implemented that if no ingredients for fridge or pantry were present it would render a white space filler letting the user know that there are no ingredients present. 

###### DEPLOYMENT

Server code was successfully deployed to Heroku. The client code however was deployed to netlify, but some issues are remaining. Keep working on deployment. 

###### APP

A private route function was set up so that it could be utilised with any routes that require logging in. This then redirects the user to the home page. 

###### HOME-client

A json file with random food jokes was created and utilised on the home page to display random food jokes. This was done as a JSON file to enable new jokes to be added later.

###### RESET PASSWORD-server/client

For a fuller user experience, I implementing a reset password feature via nodemailer and a built in module in Node.js called crypto which will hash a unique token.
This was implemented relatively quickly with an initial post route for clicking reset password, which opens a modal in React with a form which the user enters their email, then on submit it fires a function on the server which will check if the user is in the DB, sending back errors if not, then created a random token via crypto, then inserting this and a token expiring into the users document in MongoDB. Then via Nodemailer using a gmail accounted created for this application, it sends a basic template outlining the instructions for resetting their password with a link that will take the user to a reset password form. The get request for this form involves checking that the token in the link is in the users DB first before allowing the user to see the page. This subsequently the user can enter their new password in the form, which then submits a request to the DB to update the password, using the username, token and date less then expiring to ensure the correct user's password is updated. The main blockers during the process was determining the correct was the insert a field into a document, upsert was not working so after some research and trial and error the below was the correct code:

````js
{ 
            returnNewDocument: true,
            new: true,
            strict: false
          }
````
The strict: false allowed me to insert a field that was not in the current schema. 
Additionally some other blockers, were ensuring there was enough time on the loading screen to make sure the server can fulfill the request, the function which sends the nodemailer can load slow at times, so ensuring there were enough seconds to allow for this was key. 


###### PROFILE PHOTO-client
Image upload added. Initially file upload was working but with bugs, and was initially included in the User Settings form. It was moved into it's own component to allow for separate updates to image and username, email and password respectively. 
The photo upload was not displaying without manual refresh. This was resolved by adding the image to state via updateProfile to currentUserSettings.

###### FRIDGE PANTRY-client
Updates to ingredients list where when ingredient selected it is removed from the list, so it cannot be selected again. Input field still doesn't clear after adding ingredients though so they can be added again/duplicated.


###### Blockers:

- Password being hashed on hash.
- Local storage holding JSON file, needed to pass string and then parse back our to JSON for render.
- Cypress testing would interact with web pages but would not submit some forms or interact with the state of the application. Able to interact with database as would register user and log in, but not save that user to local state.
- Clearing tags from Automcomplete Fridge and Pantry fields, still. 


</details>


#### Sprint 5- 10/01- 19/01
<details>
<summary>Click to expand</summary>

<img src="./docs/trello/sprint5-1.png" alt="sprint 5 card 1" width="80%" />


##### TESTING-client
Configured package cypress-and-jest coordinated code coverage reports. 
Continued development of end-to-end testing for components. Able to set state manually using package cypress-localstorage-commands but having difficulty integrating state with database calls and changing state on return. Cypress-testing-library added 
Revisited unit testing for front end with Jest. Previously written tests failing as components completed and refactored. All Jest tests failing. Time spent debugging, see blockers. To look into Storybook and Cypress Unit testing. 

##### Blockers:
Modules and Jest conflicting - Jest throwing errors on JS files with modules.css styling. 
Difficulty getting MaterialUI Autocomplete to clear after adding ingredients resulting in duplicated on ingredients being added.

###### REVIEWING TESTING-server

Current sitting at 75% test coverage. 
![Image of tests](./docs/testhtml.png)

Following a review using Istanbul of the server side test coverage, it was determined additional tests would need to be written to increase test coverage, another 10 tests were put in place, most of which were testing for if errors occurred. This increased our back-end test coverage to approximately 75%.

###### RECIPES-server/client

During this final sprint the implementation of connecting the back-end to the front-end for browsing recipes, viewing saved recipes, adding, deleting and viewing a single recipe was completed. For the features such as user settings, a API call was done on initial page load due to the sensitive nature of the data, but for the lists of recipes, we wanted to utilise local storage to minimize database calls. In a production setting of the DB, at any time the recipes returned could be set up to 100 (depending on the limits set), so saving in local storage meant that the API calls would not need to be done each render. The API call gets made again if the User presses 'Search Again'. Even during production usage, our browse recipe data returned will be set at a reduced limit, due to a the payment tiers of the Spoonacular API call. 

The users 'Saved Recipe' page was connected to the server next. Utilising the same listed recipe component to display the recipe cards the same as the search recipe page. Then connecting the back-end to the single recipe page next was trickier. This page is set up to display the ID in the URL parameters, however if the recipe is from the users DB it will be an ObjectID from MongoDB, and if the recipe is just being view from the search the ID will be the ID from Spoonacular API. The back-end determines if the ID is a Object and returns the data based off this check, either returning DB data or calling the Spoonacular API which the recipe ID. Both sets of Data are handled the same on the front end, since they both contain the same key properties for displaying. The code that took some time to implement correctly was storing the single recipe in Local Storage, then a checker which determines by ID from the URL if it is a Local, then if so display that data, before trying to call the DB. 

Removals: From the saved recipe page, the feature of having categories for breakfast, lunch and dinner was removed due to the time frame and placed in nice to have for future. Additionally the major filter components for the browse recipe page was removed again due to the time frame, this is a large complex component/feature which requires the needed time and effort to implement correctly. 

The functionality which takes the users preferences and filters out recipes using these preferences was built, and implemented int he server code. It searches the users DB and filters out any recipes that do not match the preferences. Additionally code was added that shows these preferences on the search page and recipe display page as little badges.


<img src="./docs/trello/sprint5-2.png" alt="sprint 5 card 2" width="80%" />
<img src="./docs/trello/sprint5-3.png" alt="sprint 5 card 3" width="80%" />
<img src="./docs/trello/sprint5-4.png" alt="sprint 5 card 4" width="80%" />

#### Final Trello

<img src="./docs/trello/sprint5-5.png" alt="sprint 5 card 5" width="80%" />


</details>

---

### Pending Updates

<details>
<summary>Click to expand</summary>


| Date | Feature | Notes | Refactored | 
|:---:|:---:|:---:|:---:|
|19/01/2021| Browse Recipes | The checker which determines if a message about no fridge ingredients is displayed only works if fridge page is visited first - this would be fixed by calling DB for all use info on log in and store in local store. |&cross;|
|19/01/2021| Preference Filter in Server | Adjust the filter function, as not working correctly.  |&cross;|


</details>
