import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  
  product = signal<Product | null>(null);
  loading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (product) => {
          this.product.set(product);
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set('Failed to load product details');
          this.loading.set(false);
          console.error(err);
        }
      });
    }
  }

  shareOnWhatsApp(): void {
    const p = this.product();
    if (!p) return;
    const message = `Check out this product: ${p.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const p = this.product();
    if (!p) return;
    const url = `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
    window.open(url, '_blank');
  }

  getStarArray(rating: number): boolean[] {
    const fullStars = Math.floor(rating);
    return Array(5).fill(false).map((_, i) => i < fullStars);
  }
}
