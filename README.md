CHINMAYA VRINDAVAN EVENTS
==========================

```
The module is under construction
```

Users should be able to
- Register themselves (Admin)
- Create Events (Admin)
- Update Events (Admin)
- Subscribe to Events (Admin + Users)


#### How to run the project in local

The below instruction assumes you have MongoDB running in your local in port 27107.

Before setting up the project you will need to have the below installed
- Git
- Node.js


Run the below commands in command line to setup the project in your local machine.

##### Clone the project

```
git clone https://github.com/shabeermothi/chinmaya-vrindavan-events.git
```

##### Install Node Dependencies

```
cd ./chinmaya-vrindavan-events
npm install
```

##### Install Bower Dependencies

```
bower install
```

##### Run the project

```
node . true
```

The parameter ```true``` ensures to use the local instance of MongoDB and not the instance of MongoDB from environment in Heroku