FROM python:3.9.0

MAINTAINER stephenthomas794@gmail.com

WORKDIR /server

COPY . /server

RUN pip3 install --upgrade pip  

RUN pip3 --no-cache-dir install -r requirements.txt

COPY ./mainApp/run.py /mainApp/run.py
COPY ./mainApp/extensions.py /mainApp/extensions.py 
COPY ./mainApp/models.py /mainApp/models.py
COPY ./mainApp/settings.py /mainApp/settings.py
