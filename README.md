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

## Backend

It is written in JS using express framework, a MongoDB is used to store data and communication between server and database is handeled by Mongoose

### Models
2 models are used to store data
* **Post model** : in which posts are stored and it has the following properties:<br/> =>**title** , **describtion** which are the main data of a post, <br/>=>**createdBy**, **email** which cointain the data of the creator user, <br/>=>**replies** which holds all the replies to the post, and finally <br/>=>**date** which cointains the creating date of a post
* **User model** : in which Users data are stored and it has the following properties: **name**, **email**, **password**, and **date** for user creation time

### Endpoints
The server has 7 end points which are:
* **Root Endpoint** : recieves a get request and returns all the posts ordered by date (The most recent are shown first)
* **New Post Endpoint** : recieves a post request with a post's (title, description, createdBy, email) data in JSON format and returns the new created post
* **Edit Post Endpoint** : it gets the post id from the url and recieves a post request with a post's (title, description) data in JSON format and returns the edited post after updating it
* **Delete Post Endpoint** : receives a delete request and gets the post id from the url and then delete the post
* **Reply Endpoint** : receives a post request with a reply's (description, writtenBy) data and store it to the desired post using the post id from the url and returns back the post after update
* **Register Endpoint** : receives a post request with a user's (name, email, password) data, hashs the password and saves the information in the database and returns the user's information
* **Signin Endpoint** : receives a post request with the email and password and if email is in the database it compares the password and gives back the user's information 