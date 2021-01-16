FROM python:3.9.0

MAINTAINER stephenthomas794@gmail.com

WORKDIR /server

COPY . /server

RUN pip3 install --upgrade pip  

RUN pip3 --no-cache-dir install -r requirements.txt

ENV SQLALCHEMY_DATABASE_URI=sqlite:///HabitTracker.db
ENV APP_NAME=StephenTracker
ENV MONGO_URI=mongodb+srv://Admin:2QK8k4NSi21ZGZK2@usersinfo.tvi7l.mongodb.net/UsersInfo?retryWrites=true&w=majority

COPY ./mainApp/run.py /mainApp/run.py
COPY ./mainApp/extensions.py /mainApp/extensions.py 
COPY ./mainApp/models.py /mainApp/models.py
COPY ./mainApp/settings.py /mainApp/settings.py
