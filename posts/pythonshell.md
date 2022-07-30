I use ipython:
```ipython```
Set environment variables
```
import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'project4.settings.base'
```
Now import the models

``` 
from yourapp.models import *
```
