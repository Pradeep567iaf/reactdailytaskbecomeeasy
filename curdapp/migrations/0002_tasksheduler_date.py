# Generated by Django 4.1.1 on 2022-10-03 11:31

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('curdapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tasksheduler',
            name='date',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
    ]
