# Generated by Django 2.2.1 on 2019-07-14 02:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contacts', '0005_auto_20190714_0211'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='email',
            field=models.EmailField(blank=True, default=' ', max_length=254, null=True),
        ),
        migrations.AlterField(
            model_name='contact',
            name='phone_number',
            field=models.CharField(blank=True, default=' ', max_length=20, null=True),
        ),
    ]