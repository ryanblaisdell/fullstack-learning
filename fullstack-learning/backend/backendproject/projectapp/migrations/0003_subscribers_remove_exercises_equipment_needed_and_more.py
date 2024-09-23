# Generated by Django 5.1 on 2024-09-23 03:55

import django.contrib.auth.models
import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('projectapp', '0002_exercises'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subscribers',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            bases=('auth.user',),
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.RemoveField(
            model_name='exercises',
            name='equipment_needed',
        ),
        migrations.CreateModel(
            name='WorkoutPlans',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('exercises', models.ManyToManyField(to='projectapp.exercises')),
            ],
        ),
        migrations.CreateModel(
            name='UserWorkoutPlans',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_registered', models.DateField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projectapp.subscribers')),
                ('workout_plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='projectapp.workoutplans')),
            ],
        ),
    ]
