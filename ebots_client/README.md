What is Auth??

Authentication
  - user is who they say they are

Authorization
  - allows a user to do what they are allowed to do
  - give them access to be able to do what they should be able to do

Rails way
Session - login use the password and begin a session 
  - has_secure_password - password_digest
  - login
  - how do we confirm where the data is coming from?
    - there is a cookie being sent with every request to confirm that there is that secret key that is related to our application to confirm that the information is coming from a trusted source

Rails and React
- validations - we can validate in many ways
  - params - check that the information is valid information and then use it accordingly
  - make sure they sent the correct information and it makes sense
- cors - protect the domains that are able to have access to our application

React - how do we protect our react app

how to go about it
- protect backend routes with some of validation and confirm the client side is allowed access
- client side confirm the information we get back from the data base
  - we can provide access if authorized
  - if not we can reroute to login and send back an error message
  - a lot of the client side auth will involve a conditional based on information from out backend


Pt. 2

### JWT (JSON Web Token) 

- What is JWT (JSON Web Token) 
  1. how to use it and why
  2. when to send it?? 
    - do we always send a token???
    - login/sign up
  3. where to store it
    - did we get one? 
    - did we expect one?

Backend: 
  - we saw the flow we are going make some helper functions to abstract away some of this logic
    - where does this logic belong?
  - what routes do we need to protect and what does that mean?
    - we can choose to protect particular routes
  - when do we send a token
    - login/signup
  - when do we receive a token 
    - only for authorized routes or every request depends on the application

Frontend:
  - how do we get a token?
    - login and sign up
  - where do we store it
    - local storage
    - how long though?
  - when should we send it to the backend
    - any request that requires it or every request?
    