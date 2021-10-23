Build
________________

To build the application, simply commit something to the master branch. 
The circleci config.yml will build and deploy the backend and frontend images to DockerHub.


Deploy
________________

To deploy the application, create an EC2 instance. Install docker on the EC2 instance 
and run the docker service. Take the docker-compose.yml file included in the repository and copy
it into the EC2 instance. 
Run `docker-compose pull` to get the most up to date images.
Run `docker-compose up --detach` to run the app.
The app will take some time to fully boot up.
Navigate to the publicip address of the instance and add port :3000 to get the frontend app.
Make sure you are on http, and not https.
 

Run
________________

To run the application, the easiest thing is to visit our EC2 instance. 
Frontend = http://3.105.25.226:3000/
Login_ms = http://3.105.25.226:8080/
Book_ms = http://3.105.25.226:8081/
Transaction_ms = http://3.105.25.226:8082/
Listing_ms = http://3.105.25.226:8083/

Or you could `npm start` the react app, which will take data from aws.

If you want everything locally, you can replace all occurences of "3.105.25.226" with "localhost" for the React app.
For the backend, remove all references to MySql from application.properties.