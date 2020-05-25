# Guest Book App

A simple app for writing posts and replying to others posts <br/>
You can also edit or delete posts but only the ones that you have created previously <br/>
This is a MERN app which used React and CSS for the front end and Node JS (Express) and MongoDB (Mongoose) for the backend

## Installation

Clone the Github repository and use npm to install dependencies <br/>
```
$ git clone https://github.com/Zomaldinho/Guest-Book-App.git
$ cd Guest-Book-App
$ cd server
$ npm install
```
After installation run `$ npm start` to start the server at port 5000 <br/>
Then open a new terminal window inside the **gb-front-end** folder and install the dependencies for the front end using `$ npm install`<br/>
Finally start the front end with `$ npm start` at port 3000

## More Information

### Backend

It is written in JS using express framework, a MongoDB is used to store data and communication between server and database is handeled by Mongoose

#### Models
2 models are used to store data
* **Post model** : in which posts are stored and it has the following properties:<br/> **title** , **describtion** which are the main data of a post, <br/>**createdBy**, **email** which cointain the data of the creator user, <br/>**replies** which holds all the replies to the post, and finally <br/>**date** which cointains the creating date of a post
* **User model** : in which Users data are stored and it has the following properties: **name**, **email**, **password**, and **date** for user creation time