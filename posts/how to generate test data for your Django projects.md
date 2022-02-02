Before I looked into how to generate test data, I did it manually. That was laboring, repeatative and boring, like most manual work that can be anutomated. 
For my last project, after some youtubing and goolging, I used random and faker to create test data, along with Django's BaseCommand class to create commands
that you can run to create data.

Let's get started!

### 01

In your project app file(for example, my project file is project4, my app is commerce, do this in your app file), create a folder named ```management```, 
within the folder, create a file named ```createdata.py```.

Let's import all the useful stuff:

```
from django.core.management.base import BaseCommand
from faker import Faker
import faker.providers
from auctions.models import User, Listing, Bid, Comment, Watchlist
import random
```
And install faker ```pip install faker```

We could use faker's provider library, on top of that, we could create customed providers.

Let's test faker first.

This is the syntax to create Django Commands:
```
class Command(BaseCommand):
    help = "Command information"

    def handle(self, *args, **kwargs):

        fake = Faker(["nl_NL"])
        print(fake.address())
```
