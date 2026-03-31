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
  image_url: string;
  link: string;
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
  
  selectedCategoryId = signal<number>(0);

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

  fetchProductsByCategory(categoryId: number): void {
    const url = categoryId === 0 
      ? `${this.apiBaseUrl}/products/` 
      : `${this.apiBaseUrl}/categories/${categoryId}/products/`;
    
    this.http.get<ApiProduct[]>(url).pipe(
      map(products => products.map(product => this.toUiProduct(product)))
    ).subscribe({
      next: (products) => {
        this.productsSignal.set(products);
      },
      error: (err) => {
        console.error('Failed to fetch products by category', err);
      }
    });
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId);
    this.fetchProductsByCategory(categoryId);
  }

  private toUiProduct(product: ApiProduct): Product {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      rating: 5,
      reviewCount: 0,
      image: product.image_url || 'https://placehold.co/600x400?text=Product',
      images: [
        product.image_url || 'https://placehold.co/600x400?text=Product',
        product.image_url || 'https://placehold.co/600x400?text=Product'
      ],
      link: product.link || '#',
      categoryId: product.category,
      likes: 0,
    };
  }

  getCategories(): Category[] {
    return this.categoriesSignal();
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.productsSignal();
  }

  getCategoryById(id: number): Category | undefined {
    return this.categoriesSignal().find(c => c.id === id);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<ApiProduct>(`${this.apiBaseUrl}/products/${id}/`).pipe(
      map(product => this.toUiProduct(product))
    );
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
