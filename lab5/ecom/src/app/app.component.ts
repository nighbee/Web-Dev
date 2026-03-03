import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';
import { Category } from './models/category.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private productService = inject(ProductService);
  
  categories = signal<Category[]>(this.productService.getCategories());
  // Default to "All" category (id: 0)
  selectedCategoryId = signal<number>(0);
  
  products = computed(() => {
    const categoryId = this.selectedCategoryId();
    return this.productService.getProductsByCategory(categoryId);
  });

  selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId);
  }

  getSelectedCategoryName(): string {
    const categoryId = this.selectedCategoryId();
    const category = this.categories().find(c => c.id === categoryId);
    return category ? category.name : '';
  }

  onDeleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
  }
}
