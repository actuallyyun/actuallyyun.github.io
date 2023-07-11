---
title: "How to generate fake test data using faker?"
last_update: 
    date: 01/05/2021
    author: Yun Ji
---

---
layout: post
title: 'How to generate test data for your Django projects'
author: 'Yun Ji'
date: 2021-06-31
categories: python
---

Before I looked into how to generate test data, I did it manually. That was laboring, repeatative and boring, like most manual work that can be anutomated.
For my last project, after some youtubing and goolging, I used random and faker to create test data, along with Django's BaseCommand class to create commands
that you can run to create data.

Let's get started!

### 01

In your project app file(for example, my project file is project4, my app is commerce, do this in your app file), create `management/commands`,
within the folder, create a file named `createdata.py`.
This is what your directory should look like:

```
polls/
    __init__.py
    models.py
    management/
        __init__.py
        commands/
            __init__.py
            _private.py
            crearedata.py
    tests.py
    views.py
```

Let's import all the useful stuff:

```
from django.core.management.base import BaseCommand
from faker import Faker
import faker.providers
from auctions.models import User, Listing, Bid, Comment, Watchlist
import random
```

And install faker `pip install Faker`

We could use faker's provider library, on top of that, we could also create customed providers.

Let's test faker first.

This is the syntax to create Django Commands:

```
class Command(BaseCommand):
    help = "Command information"

    def handle(self, *args, **kwargs):

        fake = Faker()
        print(fake.name())
```

In your terminal, run the Django command `python manage.py createdata`
It should print out a random name. Mine is `Laura Kim`

Please refer to [Faker's documentation](https://faker.readthedocs.io/en/master/index.html)