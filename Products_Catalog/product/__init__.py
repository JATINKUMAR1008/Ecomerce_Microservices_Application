from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'
db = SQLAlchemy(app)
app.app_context().push()
ma = Marshmallow(app)
class ProductSchema(ma.Schema):
    class Meta:
        fileds = ("id","name","desc","price","brand","image","stock","category")

prod_schema = ProductSchema()
prods_schema = ProductSchema(many=True)
from product import routes