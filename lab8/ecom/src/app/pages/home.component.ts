import { Component, inject, signal, computed, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  template: `
    <div class="category-header">
      <h2>{{ getSelectedCategoryName() }}</h2>
      <span class="product-count">{{ products().length }} products</span>
    </div>
    <app-product-list 
      [products]="products()"
      (deleteProduct)="onDeleteProduct($event)"
    ></app-product-list>
  `,
  styles: [`
    .category-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid #eee;
    }
    .product-count {
      color: #666;
      font-size: 0.9rem;
    }
  `]
})
export class HomeComponent {
  private productService = inject(ProductService);
  
  // We'll use the selectedCategoryId from the service or just a local one if we don't share it
  // For now, let's use the one from the AppComponent if possible, but easier to keep it here or in service.
  // Since AppComponent has the buttons, let's keep it in service for sharing.
  
  products = computed(() => {
    // This will react to any changes in the service's products signal
    // But we need to know the category. Let's get it from a shared signal in service.
    return this.productService.getProductsByCategory(this.productService.selectedCategoryId());
  });

  getSelectedCategoryName(): string {
    const categoryId = this.productService.selectedCategoryId();
    const category = this.productService.getCategoryById(categoryId);
    return category ? category.name : '';
  }

  onDeleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
  }
}
