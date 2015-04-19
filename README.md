# api-nodejs
Rest API using nodeJS

## Best practices
Do NOT use console.log to print to the console. Use winston logger instead. The configuration file is in
<code>/configuration/logger.js</code>.

## Installation instruction
1. Install nodeJS
2. Install mongoDB
3. Install nodemon, apidoc, mocha 
    * <code>npm install -g nodemon</code> (restart the server automatically on update)
    * <code>npm install -g apidoc</code> (generate the documentation)
    * <code>npm install -g mocha</code> (write test cases)
4. Download the project
5. Use <code>npm install</code> to download dependencies
6. If you use a db check the server is running
7. Use <code>npm start</code> to start the API

## Documentation
To generate it use <code>apidoc -i controllers -o doc/</code>.  
To see the documentation use the path /v1/doc after starting the server

## Test
Launch tests with <code>npm test</code>
