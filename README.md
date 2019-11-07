# Getting started

## Run Local

1. Install and start [localstack](https://github.com/localstack/localstack)

2. Install the [aws cli](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

3. Run `./localstack-create-bucket.sh`

4. Run `npm run build`, `npm run deploy` and then `npm run start:localstack`

5. If you're running VS Code with the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) Extenstion and configured this ennvironment:

```
    "local": {
      "protocol": "http",
      "host": "localhost",
      "port": "4004"
    }
 ```
 
 you should be able to use requests defined in `srv/tests/media.http`

## On SAP Cloud Platform - Cloud Foundry

1. Clone this repository in SAP Web IDE

2. Build the project & run the service

3. Add an image

```
POST: https://host/media/Pictures

Request Headers:
Content-Type: application/json

Request Body : <JSON>
```

```
PUT: https://host/media/Pictures(fe5a9812-d3a0-44a2-9cc6-30adbfa15595)/content

Request Headers:
Content-Type: image/png

Request Body : <MEDIA>
```

4. Get the image

```
GET: https://host/media/Pictures(fe5a9812-d3a0-44a2-9cc6-30adbfa15595)/content
```
