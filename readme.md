# How to start with the Project MERN stack Login and File Upload system

You can create user login with user and wile creating user you can choose user can be Admin, Subadmin or simple user so the only Subadmin or admin can upload images.

## Clone this repository
```bash
git clone https://github.com/meermustan/MERN-Login-Fileupload.git .
```
After completing the cloning, let's move to installation.

## Installation

Run this command to install dependencies of backend.
```bash
npm install
```
After successfully installation of backend dependencies, let's move to install frontend dependencies.
```bash
cd ./client && npm install
```
After completing the installation, return to the main directory.
```bash
cd ..
```
Now you are where your server.js file exists.
## Changes to do to run project.
First create .env file and create your account on [MongoDB](https://mongodb.com) and then create a cluster and click on connect application, and you get ``mongodb+srv://<username>:<password>@cluster0.e7bgj.mongodb.net/?retryWrites=true&w=majority``
you just change the password in it and then paste it into your .env file, so it's further looks like
```txt
MONGO_URI='mongodb+srv://<username>:<password>@cluster0.e7bgj.mongodb.net/?retryWrites=true&w=majority'
```
And it's done, but don't forget to put your password and username in your cluster link.

## Start Server.
First run the command and sure that you are in where your server.js exist
Run backend server.
```bash
npm start
```
Now start the frontend server.
```bash
cd ./client && npm start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)