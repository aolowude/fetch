## Setup

Run
`npm i`
to install neccessary packages

## Development

Run:
`npm run dev`

## Test

Create a '.env' file in the root folder
The 'config' folder will reference environment variables or default values

While server is running, in a terminal, run:

- Ping
  `curl --location --request GET 'localhost:8090/api/v1/fetch`

- Populate sample data
  `curl --location --request POST 'localhost:8090/api/v1/test/data'`
