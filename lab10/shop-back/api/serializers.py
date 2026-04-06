from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    discount_price = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = '__all__'

    def get_discount_price(self, obj):
        return round(obj.price * 0.9, 2)
