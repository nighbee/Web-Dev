Lab 10

Web Development

Lab 10: Building API Views

Submission: Upload your work to GitHub repo till the next practice lesson

Online Shop (Continued)

FBV → CBV → Mixins → Generics

In this lab you will refactor your shop-back API using different DRF view patterns. You will implement the same CRUD functionality at multiple levels to understand the progression.

API View Levels

Level

Approach

Key Features

Level 2

FBV

@api_view, request.data, Response

Level 3

CBV

APIView class with get(), post(), etc.

Level 4

Mixins

ListModelMixin, CreateModelMixin, ...

Level 5

Generics

ListCreateAPIView, RetrieveUpdateDestroyAPIView

Tasks (4)

    Level 2: Function-Based Views (FBV)

Create api/views/fbv.py with two functions:

    products_list(request) — handles GET (list all) and POST (create)
    product_detail(request, product_id) — handles GET, PUT, DELETE

Key changes from raw Django:

    @csrf_exempt → @api_view(['GET', 'POST'])
    json.loads(request.body) → request.data
    JsonResponse(...) → Response(...)
    Use status.HTTP_201_CREATED, status.HTTP_404_NOT_FOUND, etc.

    Level 3: Class-Based Views (CBV)

Create api/views/cbv.py with two classes:

    ProductListAPIView(APIView) — with get() and post() methods
    ProductDetailAPIView(APIView) — with get(), put(), delete() methods
    Add helper method get_object(product_id) to handle 404 errors

URL configuration:

    Use .as_view() when registering class-based views in urls.py

    Level 4: Mixins

Create api/views/mixins.py using DRF mixins:

    ProductListAPIView — inherit from ListModelMixin, CreateModelMixin, GenericAPIView
    ProductDetailAPIView — inherit from RetrieveModelMixin, UpdateModelMixin, DestroyModelMixin, GenericAPIView

Required attributes:

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id' (maps URL param to lookup)

Delegate to mixin methods:

    get() → self.list() or self.retrieve()
    post() → self.create()
    put() → self.update()
    delete() → self.destroy()

    Level 5: Generic Views

Create api/views/generics.py — minimal code:

    ProductListAPIView(generics.ListCreateAPIView)
    ProductDetailAPIView(generics.RetrieveUpdateDestroyAPIView)
    Only need queryset, serializer_class, and lookup_url_kwarg

Add Category endpoints:

    CategoryListAPIView(generics.ListCreateAPIView)
    CategoryDetailAPIView(generics.RetrieveUpdateDestroyAPIView)
    CategoryProductsAPIView(APIView) — custom view for /categories/<id>/products/

Tip: Use api/views/**init**.py to switch between implementations by changing imports. All levels provide the same API!

Requirements

    All 4 view files created: fbv.py, cbv.py, mixins.py, generics.py
    Each level implements same CRUD operations
    generics.py includes Category views + /categories/<id>/products/
    __init__.py imports from generics.py (Level 5 active)
    Test all endpoints with Postman collection (from Lab 9)

Useful Links

    DRF Views: api-guide/views
    DRF Generic Views: api-guide/generic-views
    DRF Mixins: generic-views/#mixins

GOOD LUCK! :)
