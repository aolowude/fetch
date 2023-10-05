## Setup

Run
`npm run install-client`
`npm run install-admin`

OR Manually
`npm i --include=dev`
`cd client && npm i`
`cd admin && npm i`

to install neccessary packages

Create a '.env' file in the root folder
The 'config' folder will reference environment variables or default values

## Development

Either

Run backend AND Frontend:
`npm run dev`

OR

Run backend:
`npm run start`

Run Front end:
`cd fe`
`npm run start`
--
Run Admin:
`npm run admin`

## GraphQL Visual Interface

After running the server, navigate to the url:
http://localhost:8090/graphiql

## Test

While server is running, in a terminal, run:

- Ping
  `curl --location --request GET 'localhost:8090/api/v1/fetch`

- Populate sample data
  `curl --location --request POST 'localhost:8090/api/v1/test/data'`
