## README

### DEPENDENCIES
- [Express.js](https://www.npmjs.com/package/express) is used to simplify the development process of building our RESTful API by providing us a set of features and toold to handle common tasks.
- [NODEMON](https://www.npmjs.com/package/nodemon) is used for speedy develoment of Node.js, automatically restarting the node application when it detects saved changes, without user having to restart the server manually.
- [UUID](https://www.npmjs.com/package/uuid) is being used to uniquely identify a json object.


### RUN

Use `npm start` to start the node.js server configured on port 8080. 

Feel free to use your browser to use the GET request so you can retrive data from `http://localhost:/8080`.

All other request must be performed using an API client such as Postman or Insomnia.

Alternatively you can also use cURL from your CLI.
The following are commands using cURL to perform the implemented api requests.

* GET
  > `curl -X GET http://localhost:8080/users/`

* POST 
  > `curl -X POST -H "Content-Type: application/json" -d '{"first_name": "Bruce","last_name":"Wayne","alias":"Batman"}' http://localhost:8080/users/`

* GET with uuid 
  > `curl -X GET http://localhost:8080/users/4f4a63a7-6634-454a-ba14-87e6bf48c1e2`

* DELETE with uuid
  > `url -X DELETE http://localhost:8080/users/094225cf-5fbc-44b1-bf78-6d4f275012c4`

* PATCH with uuid
  > `curl -X PATCH -H "Content-Type: application/json" -d '{"alias":"ROBIN"}' http://localhost:8080/users/f55e4500-2af7-4f4a-962d-e4d80ab1ba7c`

