# Always Coming Home

Always Coming Home: The American Female Veteran Experience Archive is designed to provide ongoing documentation of the diverse combat and service situations women in the military face as well as recording the experiences of the increasing numbers of female veterans whose return to civilian life has been affected by their years of service. Women veterans are interviewed, on video, and invited to share their reasons for joining the military, their experiences while in service, and the opportunities and setbacks they have faced upon return to civilian life. This project includes the short documentary “Soldier Girl.” There are currently over 50 interviews in the archive, some of which you can view here.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

A system running docker, the rest of the dependancies will be loaded into the containers on initialization from the docker files

### Installing

A step by step series of examples that tell you have to get a development env running

* PULL Project from github.
  This contains the Application, the Database, and a media webserver  all wrapped up in a docker-compose system.

* Instantiate the database by piping the the backup to the scalar_db file using
Tyler Moons [backup/restore](https://github.com/CDH-SC/ddbb) tool

```
ddbb -r <container_name> <database> <root password> <outputfile.sql>
```
### Deployment

Once the scheme has been insterted into the database, the Scalar front end (installed in the docker container with the docker file) should be able to read all media/pathways. If the page is blank, this mean the containers are either not properly conected or you database was not restored properly

Now that the database has been restored, boot up the containers using the command:

```
docker-compose up
```

## Built With

* [Scalar](https://scalar.me/anvc/scalar/) - Application, The web framework used
* [MySQL](https://www.mysql.com/) - Database, holding the schema for Scalar
* [HTML](www.html.com) - The media server hosting our media, which is contained in the public directory
* media is accessable at http://achimages.dev-cdh.org/imagenamehere
* [Docker](https://www.docker.com/) - Docker, the container system used to manage all of our projects here at The Center for Digital Humanities

## Contributing

Please read [CONTRIBUTING.md](https://github.com/CDH-SC/ach) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

The github version should be the current state of this project. Scalar is used as a Content managment system and should not require any more development besides adding images/test. this is all STORED IN THE DATABASE BACKUP. Therefore the current state of the project will be based on restoring the most current database backup called ach_backup.sql

## Authors

* **Robert Carff** - *Initial work* - [robbycarff](https://github.com/robbycarff)

## License

Remade at/for the Univeristy of South Carolina, originally made by Cathy Brookshire
https://mirc.sc.edu/islandora/object/usc-test:174

## Acknowledgments

* Tyler Moons ddbb tool - [tmoon](https://github.com/tmoon8730)
