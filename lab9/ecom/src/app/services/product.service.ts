import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';
import { forkJoin, map, Observable, tap } from 'rxjs';

interface ApiProduct {
  id: number;
  name: string;
  price: number;
  description: string;
  count: number;
  is_active: boolean;
  category: number;
}

interface ApiCategory {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly apiBaseUrl = 'http://localhost:8000/api';

  private categoriesSignal = signal<Category[]>([{ id: 0, name: 'All' }]);
  private productsSignal = signal<Product[]>([]);

  categories = this.categoriesSignal.asReadonly();
  products = this.productsSignal.asReadonly();

  constructor(private http: HttpClient) {}

  loadData(): Observable<void> {
    return forkJoin({
      categories: this.http.get<ApiCategory[]>(`${this.apiBaseUrl}/categories/`),
      products: this.http.get<ApiProduct[]>(`${this.apiBaseUrl}/products/`)
    }).pipe(
      tap(({ categories, products }) => {
        this.categoriesSignal.set([{ id: 0, name: 'All' }, ...categories]);
        this.productsSignal.set(products.map(product => this.toUiProduct(product)));
      }),
      map(() => void 0)
    );
  }

  private toUiProduct(product: ApiProduct): Product {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      rating: 5,
      reviewCount: 0,
      image: 'https://placehold.co/600x400?text=Product',
      images: [
        'https://placehold.co/600x400?text=Product',
        'https://placehold.co/600x400?text=Product'
      ],
      link: '#',
      categoryId: product.category,
      likes: 0,
    };
  }

  getCategories(): Category[] {
    return this.categoriesSignal();
  }

  getProductsByCategory(categoryId: number): Product[] {
    if (categoryId === 0) {
      return this.productsSignal();
    }
    return this.productsSignal().filter(p => p.categoryId === categoryId);
  }

  getCategoryById(id: number): Category | undefined {
    return this.categoriesSignal().find(c => c.id === id);
  }

  likeProduct(productId: number): void {
    this.productsSignal.update(products => 
      products.map(p => 
        p.id === productId ? { ...p, likes: p.likes + 1 } : p
      )
    );
  }

  deleteProduct(productId: number): void {
    this.productsSignal.update(products => 
      products.filter(p => p.id !== productId)
    );
  }
}
