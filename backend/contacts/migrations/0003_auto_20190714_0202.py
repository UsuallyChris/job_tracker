# Generated by Django 2.2.1 on 2019-07-14 02:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0002_auto_20190602_0423'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='company',
            field=models.CharField(default='', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='contact',
            name='email',
            field=models.EmailField(default='', max_length=254, null=True),
        ),
    ]
