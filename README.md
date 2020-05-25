# Guest Book App

A simple app for writing posts and replying to others posts <br/>
You can also edit or delete posts but only the ones that you have created previously <br/>
This is a MERN app which uses React and CSS for the front end and Node JS (Express) and MongoDB (Mongoose) for the backend

## Installation

Clone the Github repository and use npm to install dependencies at the server folder <br/>
```
$ git clone https://github.com/Zomaldinho/Guest-Book-App.git
$ cd Guest-Book-App
$ cd server
$ npm install
```
After installation run `$ npm start` to start the server at port 5000 and make sure that the following message are shown in the terminal `App is working on port 5000` and `Successfully connected to the database`. if not, restart the server by pressing CTRL+C and `$ npm start` again <br/>
Then open a new terminal window inside the **gb-front-end** folder.
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

## Frontend
It is written in JS using React framwork and CSS is used for styling. <br/>
The app contains 7 components and 5 pages. <br/>
As I did not use ant 3rd part liberary (like react-router or redux), I used the state to navigate between the pages .
### Components
* **App Component**: The main component it's state has the user information (which is received from siginin or register component), route to change the page display, and the edited post data which is received from Post component and passed to the Edit component.
* **Post Component**: It's state has the initial data recieved from the server and the reply text to be sent to the server.<br/>
It renders all the posts with reply, edit and delete buttons.
* **Edit Component**: It's state initially has the post's data (recieved from app component) which is updated with the changes and sends the updated data to the server.<br>
It renders the form with which you can update the post. 
* **Navbar Component**: It is a navigation bar function component which renders the application name on top left and button links on the top right.
* **NewPost Component**: It's state has the title and description of the new post to be sent to the server.<br/>
It renders the form with which you can create new the post. 
* **Signin Component**: It's state has the name and email of the user to be sent to the server to get authenticated and authorized. <br/>
It renders the form with which you can signin 
* **Register Component**: It's state has the name, email, and password of the user to be sent to the server to get registered. <br/>
It renders the form with which you can register.

### Pages

* **Home Page**: In which Navbar and Post components are rendered when the `App.state.router === 'home'`
* **Edit Page**: In which Navbar and Edit components are rendered when the `App.state.router === 'edit'`
* **NewPost Page**: In which Navbar and NewPost components are rendered when the `App.state.router === 'newPost'`
* **Signin Page**: In which Signin component is rendered when the `App.state.router === 'signin'`
* **Register Page**: In which Register component is rendered when the `App.state.router === 'register'`

## Security 

* **No Duplicate Emails**: The emails are unique so that a user can't register 2 accounts with the same email 
* **Editing and Deleting**: Only the creator user can edit or delete the post
* **Passwords**: Passwords are hashed and stored scurely in the database and they are not sent to the server or the front end from any endpoint
* **Registering**: Validating inputs for the register form so that the email format is correct, the password is matching the re-typed password, and user can't submit an empty field