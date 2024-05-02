import os
from flask import Flask, request, jsonify, render_template_string
from flask_mail import Mail, Message
from flask_cors import CORS
from dotenv import load_dotenv

app = Flask(__name__)
CORS(app)
# Load environment variables from .env file
load_dotenv()

# Configure Flask-Mail
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587  # Use your SMTP port
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = os.getenv('EMAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('EMAIL_PASSWORD')
app.config['MAIL_DEFAULT_SENDER'] = os.getenv('EMAIL_USERNAME')

mail = Mail(app)

# Load email template from file
def load_email_template(template_file, **kwargs):
    with open(template_file, 'r') as file:
        template_content = file.read()
        rendered_content = render_template_string(template_content, **kwargs)
        return rendered_content

@app.route('/submit_form', methods=['POST'])
def submit_form():
    data = request.get_json()  # Parse JSON data from request body

    # Extract parameters from JSON data
    fullname = data.get('fullname')
    email = data.get('email')
    phone = data.get('phone')
    budget = data.get('budget')
    industry = data.get('industry')
    services = ', '.join(data.get('services', []))
    website = data.get('website')
    message = data.get('message')

    # Perform validation (optional)
    if not all([fullname, email, phone, budget, industry, services]):
        return jsonify({'error': 'Missing required parameters'}), 400

    # Prepare HTML email message
    html_content = load_email_template(
        'email_template.html',
        fullname=fullname,
        email=email,
        phone=phone,
        budget=budget,
        industry=industry,
        services=services,
        website=website,
        message=message
    )

    # Send HTML email
    try:
        msg = Message(subject='New Client Project', recipients=['giwathankgod404@gmail.com'])  # Set recipient email address

        # Plain text fallback
        msg.body = f'''
        Full Name: {fullname}
        Email: {email}
        Phone: {phone}
        Budget: {budget}
        Industry: {industry}
        Services: {services}
        Website: {website}
        Message: {message}
        '''
        msg.html = html_content  # HTML content for the email body

        print("\n Sending Now")
        mail.send(msg)
        return jsonify({'message': 'Form submitted successfully and email sent'}), 200

    except Exception as e:
        return jsonify({'error': str(e)}), 500


if __name__ == '__main__':
    app.run(debug=True)
