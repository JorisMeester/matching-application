# Matching Application Search Filter

## Introduction
I'm making a feature for a Matching application to filter and search people on some of their attributes, so that the user will get results that fit their interest. I'm using Node.js, NPM, Express and EJS to create dynamic pages.

## Table of contents
* Install
* Languages and frameworks being used

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

## Languages and frameworks being used
* HTML
* CSS
* JS

* Node.js https://nodejs.dev/
* Express https://expressjs.com/
* EJS https://ejs.co/
