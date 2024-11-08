from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'mysecret'  # Required for flashing messages

# Dummy user data for demonstration (replace with database in production)
users = {}

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/register', methods=['POST'])
def register():
    # Get form data
    name = request.form.get('name')
    phone = request.form.get('phone')
    password = request.form.get('password')

    # Basic validation and registration logic (replace with database logic)
    if name in users:
        flash('User already exists! Please log in.')
        return redirect(url_for('home'))

    users[name] = {'phone': phone, 'password': password}
    flash('Registration successful! Please log in.')
    return redirect(url_for('home'))

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')

    # Authentication logic
    user = users.get(username)
    if user and user['password'] == password:
        return redirect(url_for('dashboard'))  # Redirect to dashboard after successful login
    else:
        flash('Invalid login credentials')
        return redirect(url_for('home'))

@app.route('/dashboard')
def dashboard():
    return "Welcome to the dashboard!"  # Placeholder for the dashboard page

if __name__ == '__main__':
    app.run(debug=True)
