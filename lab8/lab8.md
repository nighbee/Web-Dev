 
Web Development
Lab 8: Introduction to Django

 
Submission: Upload your work to GitHub repo till the next practice lesson
 
Online Shop
 
You must start preparing a backend API for your Angular Online Store app from Lab 5. This Django backend will eventually serve data to your Angular frontend.
Create a Django project with the name shop-back.
Learning Objectives
By the end of this lab, you will be able to:
•   	Set up a Django project with a virtual environment
•   	Create Django apps and register them in the project
•   	Define models with various field types and ForeignKey relationships
•   	Perform database migrations using makemigrations and migrate
•   	Build RESTful API endpoints that return JSON responses
•   	Use URL parameters to filter and retrieve specific data
•   	Understand how Django processes HTTP requests
 
Tasks
1. 	The project contains an application with the name — api
2. 	You have models with the following fields:
Product
•   	name — CharField
•   	price — FloatField
•   	description — TextField
•   	count — IntegerField
•   	is_active — BooleanField
•   	category — ForeignKey to Category
Category
•   	name — CharField
 
3. 	Write API endpoints in JSON format:
 
Endpoint
Description
/api/products/
List of all Products
/api/products/<int:id>/
Get one Product by ID
/api/categories/
List of all Categories
/api/categories/<int:id>/
Get one Category by ID
/api/categories/<int:id>/products/
List of Products by Category

 
 
Requirements
•   	Project name: shop-back
•   	App name: api
•   	Models: Product and Category with ForeignKey relationship
•   	Endpoints: All 5 API endpoints must return valid JSON
•   	Virtual environment: Must use venv; do NOT push it to GitHub
•   	requirements.txt: Include Django dependency
•   	.gitignore: Exclude venv/, __pycache__/, *.pyc, db.sqlite3
 
Useful Links
1. 	Regular Expressions in URL: Django URL Dispatcher
2. 	How Django Processes a Request: Request Processing
3. 	Configuring the Database: Database Settings
 
 
GOOD LUCK! :)

