Todo RESTFUL API
=============

This RESTFUL API is the todo list api.

Prerequisits
-----------
- docker
- docker-compose
- npm


Installation
-----------

Install dependency

On "app/" directory run npm install
```
npm install
```
run docker-compose
```
docker-compose up
```
The Todo API will be available in http://localhost:8000


API Documents
-----------
Use apidoc to generated Todo RESTFUL API document
```
apidoc -i app/server/routes -o apidoc/
```
The Todo RESTFUL API document available in "apidoc/index.html"