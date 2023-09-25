
## 1. What is REST?
In the realm of web interactions, there exists a crucial architectural style known as REST, which stands for Representational State Transfer. REST is like the conductor of a symphony, bringing harmony and structure to the chaos of web communication between computer systems.



RESTful systems adhere to six fundamental constraints, as initially articulated by Roy Fielding in his doctoral dissertation. These constraints serve as the building blocks of the RESTful style:
- **Uniform Interface:** Creating a common language for both clients and servers.
- **Stateless:** No storage of session information on the server between requests.
- **Cacheable:** Explicitly stating whether responses can be cached.
- **Client-Server:** Keeping client and server concerns separate.
- **Layered System:** Composing systems with multiple layers.
- **Code on Demand:** Providing the option to extend a client's functionality by transferring logic.

REST's appeal lies in its use of HTTP requests for **CRUD** operations (Create, Read, Update, Delete), making it a straightforward and standardized approach to interact with web services.

## 2. What is Express.js?
Express is a fast, assertive, essential and moderate web framework of Node.js. You can assume express as a layer built on the top of the Node.js that helps manage a server and routes. It provides a robust set of features to develop web and mobile applications.

Let’s see some of the core features of Express framework:

- It can be used to design single-page, multi-page and hybrid web applications.
- It allows to setup middleware to respond to HTTP Requests.
- It defines a routing table which is used to perform different actions based on HTTP method and URL.
- It allows to dynamically render HTML Pages based on passing arguments to templates.

## 3. Express.js Architecture


![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6t16e7bill66720yczxc.png)
## 3 Why Choose Express.js?

- Speedy I/O Operations: It handles data quickly.
- Works Smoothly with Asynchronous Tasks: It handles multiple tasks without getting stuck.
- Organized Like MVC: Makes your code neat and organized.
- Easy Routing with a Strong API: Helps you guide your web traffic effortlessly.

## 4 Tools and Tech You Need

- Node.js
- MongoDB
- A Text Editor 
- Postman (for testing your work)

## 5 What You Need Before We Start
Before we dive in, make sure you have these two essentials installed:

[Node.js](https://nodejs.org/en/download/package-manager)

[MongoDB](https://www.mongodb.com/docs/manual/installation/)

## Getting started
Basically this project contains RESTful APIs for CRUD operations which developed using Mongoose and Express.js. 

Open your terminal and follow the following steps.
1. Clone this project to your computer \
**`git clone https://github.com/osandadeshan/ExpressJs-RESTFUL--API_demo.git`**

2. Navigate to the project folder \
**`ExpressJs-RESTFUL--API_demo`**

3. Install the relevant node modules \
**`npm install`**

4. Start the server \
**`npm start`** \
Then you will see \
**RESTful API demo server started on: 3000**
<br />

## Testing via Postman
Now that everything is now connected, let’s test each of the routes and the respective methods.

Open your postman and type:
1. **http://localhost:3000/tasks** in the enter request URL section

2. Change the HTTP method to **POST** and select raw radio button

3. Then choose **JSON (application/json)**

4. Enter the body as follows
```json
{
	"name": "Task 1",
	"category": "school",
	"status": "Completed",
	
}
```
5. Click on Send button

6. It will give the response as **201 (Created)**
   
**POST Request**
![post](https://github.com/Laban254/ExpressJs-RESTFUL--API_demo/assets/64686919/cf9f728e-40fa-4d91-9198-2e1d5e0bcfd1)

**GET Request**
![get](https://github.com/Laban254/ExpressJs-RESTFUL--API_demo/assets/64686919/0f281816-1077-4dfa-8361-e22d68017c1d)

**PUT Request**
![put](https://github.com/Laban254/ExpressJs-RESTFUL--API_demo/assets/64686919/9491add0-dd84-4ff9-9568-7dd7c979c92b)

**DELETE Request**
![delete](https://github.com/Laban254/ExpressJs-RESTFUL--API_demo/assets/64686919/a0159259-0f8c-4acd-bba5-22bdb07772c8)

**Health Request**

**Note**: Health route can be verified using **GET http://localhost:3000/health**
![health](https://github.com/Laban254/ExpressJs-RESTFUL--API_demo/assets/64686919/b38e8715-6eb3-48d8-b8ed-6818a24c27e1)

