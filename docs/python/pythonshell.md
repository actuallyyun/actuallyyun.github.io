---
id: python-shell
title: How to use python shell in terminal
tags:
  - Python
  - Django
  - Shell
last_update: 
    date: 01/07/2021
    author: Yun Ji
---

I use ipython:
`ipython`
Set environment variables

```
import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'project4.settings.base'
```

Now import the models

```
from yourapp.models import *
```