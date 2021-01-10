from flask import Blueprint, Flask, request, render_template, redirect, jsonify, json
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import select, desc, text
import requests
from flask_cors import CORS
from .extensions import mongo
from .models import db

run = Blueprint('run', __name__)

from .models import users

#habit_collection = mongo.db.users

@run.route('/')
def hello():
    return 'Hello, World!'

@run.route('/api/create', methods=['GET','POST'])
def create():
    request_data = json.loads(request.data)
    status  = existingUser(request_data['email'])
    if status == False:
        newUser = users(emails = request_data['email'], names = request_data['name'], passwords = request_data['password'])
        try: 
            db.session.add(newUser)
            db.session.commit()
            AllUsers = users.query.all()
            print (AllUsers)
            habit_collection = mongo.db.users
            habit_collection.insert({'email' : request_data['email'], "nameOfHabit": [], "timesPerDay": [], "Total": []})
            return jsonify(message="Success Posting to Database")
        except:
            return jsonify(message="Failed Posting to Database")
    else:
        return jsonify(message=True)

def existingUser(checkEmail):  
    status = users.query.filter_by(emails=checkEmail).first()
    if status == None:
        return False #If the user does not exist 
    else: 
        return True  #If the user does exist 
        
@run.route('/api/signIn', methods=['GET','POST'])
def signIn():
    request_data = json.loads(request.data)
    print(request_data)
    # Query Database to see if email exists 
    statusEmail = existingUser(request_data['email'])
    if statusEmail == True:
    # Query Database to see if password matches that email that was queried
        statusPassword = checkPassword(request_data['email'], request_data['password'])
        if statusPassword == True: 
            return jsonify(message="you have an account and password match")
        else: 
            return jsonify(message=False)
    else: 
        return jsonify(message=True)
    return

def checkPassword(checkEmail,password):
    user  = users.query.filter_by(emails=checkEmail).first()
    userPassword = user.passwords
    if userPassword == password:
        return True
    else: 
        return False
    return
def existingUser(checkEmail):  
    status = users.query.filter_by(emails=checkEmail).first()
    if status == None:
        return False #If the user does not exist 
    else: 
        return True #If the user does exist 
    return

@run.route('/api/google', methods=['GET','POST'])
def google():
    request_data = json.loads(request.data)
    status = existingUser(request_data['email'])
    if status == False:
        newUser = users(emails = request_data['email'], names = 'GoogleUser', passwords = 'google')
        try:
            db.session.add(newUser)
            db.session.commit()
            AllUsers = users.query.all()
            print (AllUsers)
            habit_collection = mongo.db.users
            habit_collection.insert({'email' : request_data['email'], "nameOfHabit": [], "timesPerDay": [], "Total": []})
            return jsonify(message="Success Posting to Database")
        except:
            return jsonify(message="Failed Posting to Database")
    else:
        return jsonify(message=True)

def existingUser(checkEmail):
    status = users.query.filter_by(emails=checkEmail).first()
    if status == None:
        return False
    else: 
        return True

@run.route('/api/addEntry', methods=['GET','POST'])
def addEntry():
    request_data = json.loads(request.data)
    print(request_data)
    habit_collection = mongo.db.users
    habit_collection.update_one(

        {"email": request_data['email']}, {
            "$push": { 
                    "nameOfHabit": request_data['nameOfHabit'],
                    "timesPerDay": request_data['timesPerDay'], 
                    "Total": 0
                     }})
    return jsonify(message="The Entry has been added to DB")

@run.route('/api/pullHabits', methods=['GET','POST'])
def pullHabits():
    request_data = json.loads(request.data)
    habit_collection = mongo.db.users
    check = habit_collection.find_one({"email": request_data['email']}) 
    val = len(check)
    print(type(val))
    if val > 2:
        result = habit_collection.find({"email": request_data['email']})
        print(result)
        for r in result:
            nameOfHabit = r['nameOfHabit']
            timesPerDay = r['timesPerDay']
            Total = r['Total']
        print(nameOfHabit)
        print(Total)
        return jsonify(nameOfHabit=nameOfHabit, timesPerDay=timesPerDay, Total=Total)
    else:
        return  jsonify(message=False)

@run.route('/api/getEntry', methods=['GET','POST'])
def getEntry():
    request_data = json.loads(request.data)
    habit_collection = mongo.db.users
    result = habit_collection.find_one({"email": request_data['email']})
   # print(result)
    num = int(request_data['index'])
    nameOfHabit = result['nameOfHabit'][num]
    timesPerDay = result['timesPerDay'][num]
    Total = result['Total'][num]
    temp = int(Total) + 1
    Total = str(temp)
    update = { "$set": {} }
    update["$set"]["Total.{}".format(num)] = Total;
    habit_collection.update(
        {"email": request_data['email']}, update)
 
  #      {"email": request_data['email']}, {
  #          "$set": {
  #              "Total": [Total],
  #                  "$position": num
  #                  }
  #                  })
    return jsonify(nameOfHabit=nameOfHabit, timesPerDay=timesPerDay, Total=Total)








