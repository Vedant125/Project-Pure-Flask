from flask import Flask, render_template, request, redirect, url_for, flash
from pymongo import MongoClient
import bcrypt
from datetime import datetime

app = Flask(__name__)
app.secret_key = 'mysecret'  # Required for flashing messages

# MongoDB connection
client = MongoClient("mongodb://localhost:27017/")  # Update with your MongoDB connection string
db = client["skillforge"]  # Use the 'skillforge' database
users_collection = db["be_project"]  # Use the 'be_project' collection

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/register', methods=['POST'])
def register():
    # Get form data
    name = request.form.get('name')
    phone = request.form.get('phone')
    password = request.form.get('password')

    # Check if user already exists in the database
    if users_collection.find_one({"name": name}):
        flash('User already exists! Please log in.')
        return redirect(url_for('home'))

    # Hash the password before storing it
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())

    # Get current UTC timestamp
    timestamp = datetime.utcnow()

    # Insert the user into MongoDB with the timestamp
    users_collection.insert_one({
        "name": name,
        "phone": phone,
        "password": hashed_password,
        "timestamp": timestamp  # Add the timestamp field
    })
    
    flash('Registration successful! Please log in.')
    return redirect(url_for('home'))

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('name')
    password = request.form.get('password')

    # Find the user in the database
    user = users_collection.find_one({"name": username})
    if user and bcrypt.checkpw(password.encode('utf-8'), user['password']):
        return redirect(url_for('dashboard'))  # Redirect to dashboard after successful login
    else:
        flash('Invalid login credentials')
        return redirect(url_for('home'))

@app.route('/dashboard')
def dashboard():
    return render_template('logged_home.html')  # Placeholder for the dashboard page

@app.route('/logout')
def logout():
    return render_template('home.html')  # Placeholder for the dashboard page

if __name__ == '_main_':  # Fixing the typo here
    app.run(debug=True)