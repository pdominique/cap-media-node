# Getting started

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
