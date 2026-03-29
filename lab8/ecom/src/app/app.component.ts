import { Component, inject, signal, computed, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private productService = inject(ProductService);
  private platformId = inject(PLATFORM_ID);
  
  categories = this.productService.categories;
  // Default to "All" category (id: 0)
  selectedCategoryId = signal<number>(0);

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.productService.loadData().subscribe({
        error: (err) => {
          console.error('Failed to load data from backend API', err);
        }
      });
    }
  }
  
  products = computed(() => {
    const categoryId = this.selectedCategoryId();
    return this.productService.getProductsByCategory(categoryId);
  });

  selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId);
  }

  getSelectedCategoryName(): string {
    const categoryId = this.selectedCategoryId();
    const category = this.productService.getCategoryById(categoryId);
    return category ? category.name : '';
  }

  onDeleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
  }
}
