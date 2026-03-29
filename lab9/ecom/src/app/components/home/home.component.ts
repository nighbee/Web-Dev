import { Component, inject, signal, computed, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);
  private platformId = inject(PLATFORM_ID);
  
  categories = this.productService.categories;
  selectedCategoryId = signal<number>(0);

  ngOnInit(): void {
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
