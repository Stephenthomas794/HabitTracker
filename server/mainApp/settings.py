import os

from os.path import join, dirname
from dotenv import find_dotenv, load_dotenv
dotenv_path = os.path.join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

MONGO_URI = os.environ.get('MONGO_URI')

SQLALCHEMY_DATABASE_URI = os.environ.get('SQLALCHEMY_DATABASE_URI')
