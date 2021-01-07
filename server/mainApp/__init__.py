from flask import Flask

from .extensions import mongo

from flask_sqlalchemy import SQLAlchemy

from flask_cors import CORS

from .models import db

def create_app(config_object='mainApp.settings'):
    app = Flask(__name__)
    
    CORS(app)

    app.config.from_object(config_object)
    
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['SECRET_KEY'] = 'mysecret'

    mongo.init_app(app)
    
    db.init_app(app)
    
    with app.app_context():
        db.create_all()
    
    app.register_blueprint(run)

    return app

from .run import run
