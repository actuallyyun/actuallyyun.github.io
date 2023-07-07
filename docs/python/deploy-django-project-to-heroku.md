---
title: 'The most comprehensive guide to deploy Django projects with Heroku '
tags: ['Python','Django']
last_update: 
    date: 01/07/2021
    author: Yun Ji
---

#### What you will learn:

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
If we run `python manage.py collectstatic`command, Django will automately collect static files and upload to the place you specified earlier with 'STATICFILES_STORAGE' variable.

### Good job! Now we are ready to configurate our Django app for Heroku deployment.

Over the course of deploying my apps, I found and used servals heroku documentations. The one I found that helped me the most was [this page](https://blog.heroku.com/from-project-to-productionized-python) In fact, there are quite a lot of details you have to attend in this step.

1. First,.gitignore file. Copy the following code and paste it in your .gitignore file that should be in your root directory.(If not, you should create one)

   ```
   /venv
   __pycache__
   yourprojects/static/
   ```

2. Second, modularize your settings.py file
   I found this to be a great way to organize the project.
   First, in your project directory, add a folder named `settings` and move your `settings.py` file here. I would also change the file name to `base.py` and use it as my base settings. Don't forget to add a `__init__.py` file in the folder to let Django know this is a module.
   To not break the app, go to `wsgi.py` file and find this line:
   `os.environ.setdefault("DJANGO_SETTINGS_MODULE", "gettingstarted.settings")`
   Change it to:
   `os.environ.setdefault("DJANGO_SETTINGS_MODULE", "gettingstarted.settings.base")`
3. The infamous `collectstatics`
   I remember how lost I was when I ran into this error the first time. So basically once you set the DEBUG to False, Django's collect static won't work either because Django doesn't want to deal with it. So what you have to do is to use another tool to manage your static files. Heroku recommends [WhiteNoise](http://whitenoise.evans.io/en/stable/django.html)
   `pip install whitenoise`
   Add this line to your MIDDLEWARE list in your base.py

   `"whitenoise.middleware.WhiteNoiseMiddleware",`

   Add this line at the end of the `base.py` file

   ```STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

   ```

4. Set up heroku.py
   Simply create a heroku.py file in your settings file and copy and paste this into it.

   ```
       """
   Production Settings for Heroku
   """

   import environ

   # If using in your own project, update the project namespace below
   from gettingstarted.settings.base import *

   env = environ.Env(
       # set casting, default value
       DEBUG=(bool, False)
   )

   # False if not in os.environ
   DEBUG = env('DEBUG')

   # Raises django's ImproperlyConfigured exception if SECRET_KEY not in os.environ
   SECRET_KEY = env('SECRET_KEY')

   ALLOWED_HOSTS = env.list('ALLOWED_HOSTS')

   # Parse database connection url strings like psql://user:pass@127.0.0.1:8458/db
   DATABASES = {
       # read os.environ['DATABASE_URL'] and raises ImproperlyConfigured exception if not found
       'default': env.db(),
   }
   ```

5. Requirements.txt file
   Another required file from Heroku. This tells Heroku the dependencies of your project. I found the easiest way to do it is to use pip:

```
pip freeze > requirements.txt
```

6. runtime.txt file
   This file tells Heroku which Python version to use. Create a runtime.txt in your root directory, and specify the Python version you'd like Heroku to use.

```
python-3.8.2
```

7. Procfile file
   This file tells Heroku the processes it should run. Use `touch Procifile` commant create a file in your root directory(or use GUI to create one) and copy paste this into the file:

```
release: python3 manage.py migrate
web: gunicorn gettingstarted.wsgi --preload --log-file -
```

8. Create a heroku app
   The basic command is `heroku create`, but then you will have to specify builpacks to use. So I tend to specify buildpacks while create the app.

```
heroku create myapp --buildpack heroku/python
```

9. Setting environment variables on Heroku
   Just as what we did for local environment, we have to set environment variables on Heroku too, so that Heroku will be able to communicate between different modules. `heroku config:set` commmand can be used for this purpose.
   The first one is ALLOWED_HOST:

```
heroku config:set ALLOWED_HOSTS=<YOUR_UNIQUE_URL>
```

Then which setting module to use:

```
heroku config:set DJANGO_SETTINGS_MODULE=gettingstarted.settings.heroku

```

And the SECRECT_KEY:

```
heroku config:set SECRET_KEY=<gobbledygook>
```

After we have set environment variables for Django, we need to do the same for AWS S3 so that Heroku can access your static file.

```
heroku config:set AWS_ACCESS_KEY_ID=xxx
heroku config:setAWS_SECRET_ACCESS_KEY=yyy
AWS_STORAGE_BUCKET_NAME='yourawsbucketname'
```

Another variable is the DISABLE_COLLECTSTATIC:

```
heroku config:set DISABLE_COLLECTSTATIC=1

```

10. Set up Heroku database
    First check if you have a database already.

```
heroku addons
```

If it says no, then let's go ahead and create one.

```
heroku addons:create heroku-postgresql:hobby-dev
```

For more Heroku Postgres configurations, please refer to [this documentation](https://devcenter.heroku.com/articles/heroku-postgresql)
Attach the database you have just created to this app:

```
heroku addons:attach my-originating-app::DATABASE --app sushi
Attaching postgresql-addon-name to sushi... done
Setting HEROKU_POSTGRESQL_BRONZE vars and restarting sushi... done, v11

```

11. Sync local db data with heroku
    At first I didn't realize that I had to push my local db to Heroku in order to sync the data. I thought making migrations would be enough.

```
heroku pg:push yourlocaldb YOURHEROKUDB_URL --app yourawesomeapp
```

12. The exciting/~~frustrating~~ moment
    I hope you are still with me. That was A LOT. In fact, it took me quite some time(weeks on and off I shall say) to put everything together. This was my main motivation to write down everyhing I have leanred so maybe in future someone else won't have to go through my looooong learning process. Here we are, finally we are ready to deploy our apps.
    Remember to check the remote repos you are in by `git remote -v` command.
    If heroku is not in your remote yet, you can add it:

```
git remote add heroku https://github.com/user/repo.git
```

```
git push heroku master
```

This is push your code to the heroku repo, and heroku will start build the app right away.
Once the build is finished, run this to scale up the web process:

```
heroku ps:scale web=1
```

In case you run into any problem, can always run `heroku logs --tail` to check the logs.

Other userful resources on this topic
[deploying Django app with Heroku and AWS S3](https://habr.com/en/post/535054/)