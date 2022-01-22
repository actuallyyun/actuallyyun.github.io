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

Don't forget to add this line:
```
db_from_env = dj_database_url.config(conn_max_age=600, ssl_require=True)
DATABASES['default'].update(db_from_env)
```
Now we can make migrations:
```
python manage.py makemigrations
python manage.py migrate
```
### Now we have set up Postgres as the database for the project, let's also set up AWS S3 to serve static files.
In my experience of deploying Django apps to Heroku the first couple of times, static files had caused me huge headache. I found this to be a good solution.
I assume you already have a AWS account. Once you are logged in, search for S3 and navigate to the page. 
Click on Create Bucket and create one. 
Now let's configure Django and connect them.

Before that, we need to install boto3, this is the AWS SDK for Python. [Here is the documentation](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)

```
pip install boto3
```
Then let's add this to the settings.py file

```
STATICFILES_STORAGE = 'storages.backends.s3boto3.S3ManifestStaticStorage'

AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY')
AWS_STORAGE_BUCKET_NAME = os.environ.get('AWS_STORAGE_BUCKET_NAME')

AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
AWS_S3_SIGNATURE_VERSION = 's3v4'
AWS_S3_REGION_NAME = 'eu-central-1'

DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
```
Here you might wonder, what is os.environ.get doing here?

Enters environment variables. As far as I understand, these are variables that are saved in your environment as key/value pairs. These can be read by calling the os.environ.get function and provide the key. 

Make sure you have os imported already for this to work.

```
import os
```
How to set environment variables? Apparently there are many ways. The one I like, which works on Mac is by using the following command:
```
export MYVAR='thisismyenvironmentvariable'
```
If you want to check if it is set, can use this line:
```
echo $MYVAR
```
So let's set the three environment variables used here:
```
export AWS_ACCESS_KEY_ID ='xxxxxx'
export AWS_SECRET_ACCESS_KEY='xxxxxxx'
export AWS_STORAGE_BUCKET_NAME='xxxxxxxxx'

```
All the values should match your AWS account and the S3 bucket name you have just created.

### Good job! Now we are ready to configurate our Django app for Heroku deployment.
