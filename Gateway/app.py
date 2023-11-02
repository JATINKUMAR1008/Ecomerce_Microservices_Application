from flask import Flask,response
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
app.app_context().push()
ma = Marshmallow(app)
bcypt = Bcrypt()

@app.route('/user/<path:subpath>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def route_to_service1(subpath):
    service1_url = 'http://auth:5001/' + subpath
    response = requests.request(request.method, service1_url, headers=request.headers, data=request.data)
    return (response.content, response.status_code, response.headers.items())
@app.route('/product/<path:subpath>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def route_to_service1(subpath):
    service1_url = 'http://products:5001/' + subpath
    response = requests.request(request.method, service1_url, headers=request.headers, data=request.data)
    return (response.content, response.status_code, response.headers.items())
@app.route('/cart/<path:subpath>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def route_to_service1(subpath):
    service1_url = 'http://cart:5001/' + subpath
    response = requests.request(request.method, service1_url, headers=request.headers, data=request.data)
    return (response.content, response.status_code, response.headers.items())
@app.route('/images/<path:subpath>', methods=['GET', 'POST', 'PUT', 'DELETE'])
def route_to_service1(subpath):
    service1_url = 'http://images:5001/' + subpath
    response = requests.request(request.method, service1_url, headers=request.headers, data=request.data)
    return (response.content, response.status_code, response.headers.items())



if __name__ == '__main__':
    app.run(debug=True)