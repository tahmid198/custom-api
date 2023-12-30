## README

### DEPENDENCIES
- [Express.js](https://www.npmjs.com/package/express) is used to simplify the development process of building our RESTful API by providing us a set of features and tools to handle common tasks.
- [NODEMON](https://www.npmjs.com/package/nodemon) is used for speedy develoment of Node.js, automatically restarting the node application when it detects saved changes, without user having to restart the server manually. Installed as a devDependencie.
- [UUID](https://www.npmjs.com/package/uuid) is being used to uniquely identify a json object.
- [Mongoose](https://www.npmjs.com/package/mongoose) is being used for simplified interaction with MongoDB using javascript.
- [dotenv](https://www.npmjs.com/package/dotenv) is used for loading environment variables from a .env file into process.env.


### HOW TO RUN

Use `npm start` to start the node.js server configured on port 8080. 

Feel free to use your browser to use the GET request so you can retrive data from `http://localhost:/8080`.

All other request must be performed using an API client such as Postman or Insomnia.

Alternatively, you can also use cURL on your CLI.
The following are commands using cURL to perform the implemented api requests.

* GET
  > `curl -X GET http://localhost:8080/api/getAll`

* POST 
  > `curl -X POST -H "Content-Type: application/json" -d '{"first_name": "Bruce","last_name":"Wayne","alias":"Batman"}' http://localhost:8080/api/post`

* GET with uuid 
  > `curl -X GET http://localhost:8080/api/getOne/4f4a63a7-6634-454a-ba14-87e6bf48c1e2`

* DELETE with uuid
  > `url -X DELETE http://localhost:8080/api/delete/094225cf-5fbc-44b1-bf78-6d4f275012c4`

* PATCH with uuid
  > `curl -X PATCH -H "Content-Type: application/json" -d '{"alias":"ROBIN"}' http://localhost:8080/api/update/f55e4500-2af7-4f4a-962d-e4d80ab1ba7c`

