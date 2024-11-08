from flask import Flask, render_template, request, redirect, url_for, flash, session
from pymongo import MongoClient
import bcrypt
from datetime import datetime

app = Flask(_name_)
app.secret_key = 'mysecret'  # Required for flashing messages and sessions

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")  # Update with your MongoDB connection string
db = client["skillforge"]  # Use the 'skillforge' database
users_collection = db["be_project"]  # Use the 'be_project' collection

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/register', methods=['POST'])
def register():
    name = request.form.get('name')
    phone = request.form.get('phone')
    password = request.form.get('password')

    if users_collection.find_one({"name": name}):
        flash('User already exists! Please log in.')
        return redirect(url_for('home'))

    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())
    timestamp = datetime.utcnow()

    users_collection.insert_one({
        "name": name,
        "phone": phone,
        "password": hashed_password,
        "timestamp": timestamp
    })
    
    flash('Registration successful! Please log in.')
    return redirect(url_for('home'))

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('name')
    password = request.form.get('password')

    user = users_collection.find_one({"name": username})
    if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
        session['username'] = username  # Store the username in the session
        return redirect(url_for('dashboard'))
    else:
        flash('Invalid login credentials')
        return redirect(url_for('home'))

@app.route('/dashboard')
def dashboard():
    username = session.get('username', None)  # Retrieve username from session
    if username:
        return render_template('logged_home.html', username=username)  # Pass the username to the template
    else:
        return redirect(url_for('home'))

@app.route('/logout')
def logout():
    session.pop('username', None)  # Remove username from session
    return redirect(url_for('home'))

if _name_ == '_main_':
    app.run(debug=True)