# Switch between implementations: lvl5 generic, lvl4 mixin, 
# lvl3 class based, lvl2 Function based 

# from .fbv import product_list, product_detail
# from .cbv import ProductListAPIView, ProductDetailAPIView
# from .mixins import ProductListAPIView, ProductDetailAPIView
from .generics import (
    ProductListAPIView, ProductDetailAPIView,
    CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView
)
