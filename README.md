 # MS-NodeJS

## Description

MS-NodeJs is little project for me to implement Microservice using NodeJS with Express for Jenius Academy Backend Challenge.

## Installation

Pre-requisites:
1. Linux Operationg System 18.04
2. npm and nodejs
3. mongodb

<br />

## How to run

So there are 3 main microservices with 1 gateway microservice, every request will be use gateway microservice before going into main microservice.

- Gateway Microservice will run in port 3000
```
cd ms-nodejs/ms-gateway
node index.js
```

- Register Microservice will run in port 3002
```
cd ms-nodejs/ms-register
node src/server/index.js
```

- Auth Microservice will run in port 3001
```
cd ms-nodejs/ms-auth
node src/server/index.js
```

- Profile Microservice will run in port 3003
```
cd ms-nodejs/ms-profile
node index.js
```

## How to use
So there are 3 main function that you can use after run the microservice

- Register (POST)
[localhost:3000/users/register](localhost:3000/users/register)
with username and password in Body as JSON

- Verify Token (GET)
[localhost:3000/verify/token](http://localhost:3000/verify/token)
with token in Headers

- User Profile (GET)
[localhost:3003/users/profile](http://localhost:3003/users/profile)
with username in Params

 
  



