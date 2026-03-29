import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="detail-container" *ngIf="product(); else loading">
      <div class="back-nav">
        <a routerLink="/" class="back-link">← Back to Catalog</a>
      </div>
      
      <div class="product-layout">
        <div class="product-gallery">
          <div class="main-image">
            <img [src]="currentImage()" [alt]="product()?.name">
          </div>
          <div class="thumbnails">
            @for (img of product()?.images; track $index) {
              <img 
                [src]="img" 
                [class.active]="img === currentImage()" 
                (click)="currentImage.set(img)"
                class="thumb"
              >
            }
          </div>
        </div>

        <div class="product-info">
          <h1>{{ product()?.name }}</h1>
          <div class="meta">
            <span class="rating">★ {{ product()?.rating }}</span>
            <span class="reviews">({{ product()?.reviewCount }} reviews)</span>
          </div>
          
          <div class="price">{{ product()?.price | number:'1.0-0' }} ₸</div>
          
          <div class="description">
            <h3>Description</h3>
            <p>{{ product()?.description }}</p>
          </div>

          <div class="actions">
            <a [href]="product()?.link" target="_blank" class="btn btn-kaspi">View on Kaspi.kz</a>
            <div class="share">
              <button (click)="share('whatsapp')" class="btn-share wa">WhatsApp</button>
              <button (click)="share('telegram')" class="btn-share tg">Telegram</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <ng-template #loading>
      <div class="loading">Loading product details...</div>
    </ng-template>
  `,
  styles: [`
    .detail-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    .back-nav {
      margin-bottom: 2rem;
    }
    .back-link {
      text-decoration: none;
      color: #007bff;
      font-weight: 500;
    }
    .product-layout {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 3rem;
    }
    .main-image img {
      width: 100%;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.1);
    }
    .thumbnails {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    .thumb {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 8px;
      cursor: pointer;
      border: 2px solid transparent;
    }
    .thumb.active {
      border-color: #007bff;
    }
    .price {
      font-size: 2.5rem;
      font-weight: bold;
      color: #333;
      margin: 1.5rem 0;
    }
    .meta {
      display: flex;
      gap: 1rem;
      color: #666;
      margin-top: 0.5rem;
    }
    .rating {
      color: #ffc107;
      font-weight: bold;
    }
    .description {
      margin: 2rem 0;
      line-height: 1.6;
      color: #444;
    }
    .actions {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .btn-kaspi {
      background: #f50057;
      color: white;
      text-align: center;
      padding: 1rem;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      transition: opacity 0.2s;
    }
    .btn-kaspi:hover {
      opacity: 0.9;
    }
    .share {
      display: flex;
      gap: 1rem;
    }
    .btn-share {
      flex: 1;
      padding: 0.8rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 500;
      color: white;
    }
    .wa { background: #25D366; }
    .tg { background: #0088cc; }
    .loading {
      text-align: center;
      padding: 5rem;
      font-size: 1.2rem;
      color: #666;
    }
    @media (max-width: 768px) {
      .product-layout {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  
  product = signal<Product | null>(null);
  currentImage = signal<string>('');

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getProductById(id).subscribe({
        next: (product) => {
          this.product.set(product);
          this.currentImage.set(product.image);
        },
        error: (err) => console.error('Error fetching product', err)
      });
    }
  }

  share(platform: 'whatsapp' | 'telegram'): void {
    const p = this.product();
    if (!p) return;
    
    if (platform === 'whatsapp') {
      const url = `https://wa.me/?text=${encodeURIComponent('Check this out: ' + p.link)}`;
      window.open(url, '_blank');
    } else {
      const url = `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
      window.open(url, '_blank');
    }
  }
}
