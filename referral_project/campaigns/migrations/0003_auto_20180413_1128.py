# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-04-13 11:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campaigns', '0002_auto_20180413_1011'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='campaign',
            name='duration',
        ),
        migrations.AddField(
            model_name='campaign',
            name='finished_at',
            field=models.DateTimeField(blank=True, null=True, verbose_name='Finished at'),
        ),
        migrations.AddField(
            model_name='campaign',
            name='started_at',
            field=models.DateTimeField(blank=True, null=True, verbose_name='Started at'),
        ),
    ]
