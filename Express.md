# Express.JS Response Methods

## res.send()
Sends a response to the client. It can send text, HTML, JSON,a Buffer, or any data type.This method also automatically ends the response.

## res.json()
This is the method of express which send data in javaScript object or json formate to clint.This is the standard method to send responses in APIs using JavaScript objects.

## res.jsonp()
This is a method of Express Js which sends a JSONP (JSON with Padding) response. This is used for making cross-domain requests when CORS is not supported by the client.
### CORS
- cross origion resorce sharing 
This is a security feature which allow browser to determines which domains are permitted to access resources and share data from another origin.

## res.redirect()
This is a express js method which is use to Redirects the client to a different route or external URL.

## res.render()
Renders a view template using the configured view engine (like EJS, Pug, etc.) and sends the rendered HTML to the client.

## res.download()
This is the method which send request from client to server to download a file as an attachment, prompting a download dialog

## res.sendFile()
It is a method which is use to send complete file (like image , pdf , html file) to client 

## res.end()
It is a express js method which is use to end a response .... if we don't write this then ower client will wait for the response to be sent...if we end the response then res.sent will no work

## res.sendStatus()
Sends a HTTP status code to client also include the default message to it and ends the response.
### status codes
200 - Ok
201 - Created
403 - Forbidden
404 - NOt Found
500 - Internal Server Error
503 - Service Unavailable 
503 - Gateway Timeout

## res.headersSent()
A boolean property that checks whether the response headers returns true if the response headers have already been sent to the client. If true, you should not call methods like res.send(), res.json(), or res.set() again, otherwise it will cause an error.

## res.set()
It is a method which is use to set a http response header.

## res.get()
It is a method which is use to gets (return) the value of a sepcific response header.