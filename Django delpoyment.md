### Pre-requisition: A Django project

## What you will learn:
- [ ] Set up Postgresql as the database
- [ ] Serve static file with AWS S3
- [ ] Configurate your Django app for Heroku deployment

##### And other details such as 
###### Enviroment variables

### Set up Postgresql as the database
###### Django projects use sqlite4 as the default database. Heroku platform recommends and provides Postgresql.If you want to sync your local database with the postgres databse on Heroku, you will have to change your local db to Postgres as well.
#### Prerequisits:
- [ ] Python3
- [ ] Postgresql 14-You could either download it or install it through Homebrew if you are using Mac
- [ ] virtualenv-If you haven't started using virtualenv yet, you really should.

Also, I assume you already know how to use Terminal since this will be done through CLI.

### 1.Let's enter your Terminal(make sure you are in your virtualenv), first make sure your Postgres is correctly installed. This part is inspired by [this tutoria](https://www.section.io/engineering-education/django-app-using-postgresql-database/).

###### Type

```
which postgres
```

If you installed it with Homebrew, you will likely see this
```
/usr/local/bin/postgres
```
Let's check the version;
```
postgres --version
```
This is mine:
```
postgres (PostgreSQL) 14.1
```
Use the homebrew command start the database
```
brew services start Postgresql
```
Now your db is running. Use stop command to stop it.
```
brew services stop Postgresql
```
Now let's bring it back again and enter the postgresSQL interactive terminalby using this command:
```
psql postgres
```
You should see something like this:
```
psql (14.1)
Type "help" for help.

postgres=#
```

From here you can enter SQL commands. Let's begin with creating a new database.
```
CREATE DATABASE helloworld;
```
Create a user
```
CREATE USER yourname WITH PASSWORD "yourpassword"
```
Now we can grant the new user with all the previleges
```
GRANT ALL PRIVILEGES ON DATABASE helloworld TO <yourname>;
```
    

### Now we can configurate our Django project.
To begin with, we need to install psycopg2, this is popular Postgres database adapter for Python.
```
pip install django psycopg2
```
Then in your Django app, let's navigate to settings.py file. Here you should see the default Django database
configuration
```
DATABASES = {
'default': {
'ENGINE': 'django.db.backends.sqlite3',
'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
}
}
```
Let's change it to this:

```
DATABASES = {
'default': {
'ENGINE': 'django.db.backends.postgres',
'NAME': 'helloworld',
'USER':'yourname',
'PASSWORD':'yourpassword',
'HOST':'localhost',
'PORT':'',
}
}
```
Now we can make migrations:
```
python manage.py makemigrations
python manage.py migrate
```
### Now we have set up Postgres as the database for the project, let's also set up AWS S3 to serve static files.
In my experience of deploying Django apps to Heroku the first couple of times, static files had caused me huge headache. I found this to be a good solution.


