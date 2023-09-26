# Generated by Django 4.2.1 on 2023-05-13 10:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Accounts', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmailTracking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254)),
                ('sent_at', models.DateTimeField(auto_now_add=True)),
                ('opened_at', models.DateTimeField(blank=True, null=True)),
            ],
        ),
    ]