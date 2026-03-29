import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterOutlet, Router, RouterLink } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private productService = inject(ProductService);
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  
  categories = this.productService.categories;
  selectedCategoryId = this.productService.selectedCategoryId;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.productService.loadData().subscribe({
        error: (err) => {
          console.error('Failed to load data from backend API', err);
        }
      });
    }
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId.set(categoryId);
    this.router.navigate(['/']);
  }
}
