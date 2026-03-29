Lab 9

Web Development
	

Lab 9: Django REST Framework

Submission: Upload your work to GitHub repo till the next practice lesson

Online Shop (Continued)

Building REST APIs with DRF

Upgrade your shop-back project from Lab 8 by integrating Django REST Framework.

Tasks (5)

    Install Django REST Framework

    Install djangorestframework using pip
    Add 'rest_framework' to INSTALLED_APPS
    Update requirements.txt

    Create Serializers

Create api/serializers.py with:

    CategorySerializer — using ModelSerializer
    ProductSerializer — using ModelSerializer

    Create ViewSets and Configure Router

a. ViewSets (api/views.py)

    CategoryViewSet extending viewsets.ModelViewSet
    ProductViewSet extending viewsets.ModelViewSet
    Add custom action for /api/categories/<id>/products/

b. Router (api/urls.py)

    Use DefaultRouter to register ViewSets
    Register 'categories' and 'products' endpoints

    Register Models in Django Admin

    Register Category and Product in api/admin.py
    Create superuser and add 4 categories + 20 products

    Create Postman Collection

Create a collection named "Online Shop API" with two folders:

a. Categories folder

Request Name
	

Method
	

URL

Get All Categories
	

GET
	

/api/categories/

Get Category by ID
	

GET
	

/api/categories/1/

Get Products by Category
	

GET
	

/api/categories/1/products/

Create Category
	

POST
	

/api/categories/

Update Category
	

PUT
	

/api/categories/1/

Delete Category
	

DELETE
	

/api/categories/1/

b. Products folder

Request Name
	

Method
	

URL

Get All Products
	

GET
	

/api/products/

Get Product by ID
	

GET
	

/api/products/1/

Create Product
	

POST
	

/api/products/

Update Product
	

PUT
	

/api/products/1/

Delete Product
	

DELETE
	

/api/products/1/

c. Export Collection

    Export as OnlineShopAPI.postman_collection.json
    Include in your GitHub submission

Note: For POST/PUT requests, use Body → raw → JSON format.

Requirements

    djangorestframework installed and configured
    ModelSerializer for Category and Product
    ModelViewSet with DefaultRouter
    All models registered in admin
    4 categories, 20 products
    Postman collection with 11 requests (6 Categories + 5 Products)
    Exported JSON file included in submission

Useful Links

    DRF Official: django-rest-framework.org
    DRF ViewSet Actions: Extra Actions
    Postman Download: postman.com/downloads
    Postman Collections: Collections Overview

GOOD LUCK! :)