# Matching Application Search Filter

## Introduction
I'm making a feature for a Matching application to create, retrieve, update and delete dating profiles from the database. I'm using Node.js, NPM, Express, MongoDB and EJS to create dynamic pages.

## Table of contents
* Try application on Heroku
* Install
* Getting it to work
* Languages and frameworks being used
* MongoDB Data structure
* Resources

## Try application on Heroku
Here is a link where the application is deployed online if you want to check it out quick:
https://joris-matching-application.herokuapp.com/


## Install
To install the Matching Application start by cloning this repository with Git (you need to have Git installed on your machine). Navigate to the directory where you want to install and enter the following in the terminal:

`git clone https://github.com/JorisMeester/matching-application`

Then install the packages needed with npm by entering the following in the terminal:

`npm install`

## Getting it to work
Create an .env file in the root of the project and fill it with your own MongoDB Atlas credentials (you need a MongoDB cluster and database):
```
MONGODB_CLUSTER=yourClusterName
MONGODB_NAME=yourDatabaseName
MONGODB_USER=yourUsername
MONGODB_PASSWORD=yourPassword
```

And to run the server enter the following command in the terminal:

`npm start`

Now enter `localhost:3000` in the browser URL bar, the application should run.

## Languages and frameworks being used
* HTML
* CSS
* JS

* Node.js https://nodejs.dev/
* Express https://expressjs.com/
* EJS https://ejs.co/

## MongoDB Data structure
This is the MongoDB structure that my database uses:

![MongoDB Data structure](https://github.com/JorisMeester/matching-application/blob/main/images/MongoDB_Data_Structure.png)

## Resources
These are the resources used for creating this application:

Meijers, J. (2021, February 26). theonejonahgold/vragenuurtje. GitHub. https://github.com/theonejonahgold/vragenuurtje

Sears, A. (2019, December 11). Keeping API Routing Clean Using Express Routers. Scotch. https://scotch.io/tutorials/keeping-api-routing-clean-using-express-routers

CodAffection. (2018, October 25). Complete Node.js Express MongoDB CRUD [Video]. YouTube. https://www.youtube.com/watch?v=voDummz1gO0

Data Pilot. (2020, January 16). How to use mongoose to find by id and update with an example | ObjectRocket. Object Rocket. https://kb.objectrocket.com/mongo-db/how-to-use-mongoose-to-find-by-id-and-update-with-an-example-1209

Ahmed, T. (2013, January 8). How to set default value to the input[type="date"]. Stack Overflow. https://stackoverflow.com/questions/14212527/how-to-set-default-value-to-the-inputtype-date/39429678#39429678

RaddyTheBrand. (2020, August 14). Node JS Server Side Form Validation using Express-Validator, Body-Parser and EJS [Video]. YouTube. https://www.youtube.com/watch?v=z8m_Vy_9FIs
