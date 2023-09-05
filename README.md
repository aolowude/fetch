## Setup

Run
`npm i`
to install neccessary packages

## Development

Run:
`npm run dev`

## Test

While server is running, in a terminal, run:

- Ping
  `curl --location --request GET 'localhost:8090/api/v1/fetch`
  Response should match what is in 'App.ts'
- Populate sample data
  `curl --location --request POST 'localhost:8090/api/v1/test/data'`
