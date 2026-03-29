import { Component, Input, OnInit, OnChanges, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit, OnChanges {
  @Input() product!: Product;
  currentImageIndex = 0;
  isFavorited = false;
  hasLiked = signal(false);
  likeCount = signal(0);

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.initializeProduct();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && !changes['product'].firstChange) {
      this.currentImageIndex = 0;
      this.initializeProduct();
    }
  }

  private initializeProduct(): void {
    this.isFavorited = this.favoritesService.isFavorite(this.product.id);
    this.likeCount.set(this.product.likes);
    this.checkIfLiked();
  }

  get currentImage(): string {
    return this.product.images[this.currentImageIndex];
  }

  selectImage(index: number): void {
    this.currentImageIndex = index;
  }

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  previousImage(): void {
    this.currentImageIndex = this.currentImageIndex === 0 
      ? this.product.images.length - 1 
      : this.currentImageIndex - 1;
  }

  toggleFavorite(): void {
    if (this.hasLiked()) {
      this.removeLike();
    } else {
      this.addLike();
    }
  }

  private addLike(): void {
    this.favoritesService.toggleFavorite(this.product);
    this.isFavorited = this.favoritesService.isFavorite(this.product.id);
    this.likeCount.update(count => count + 1);
    this.markAsLiked();
  }

  private removeLike(): void {
    this.favoritesService.toggleFavorite(this.product);
    this.isFavorited = this.favoritesService.isFavorite(this.product.id);
    this.likeCount.update(count => Math.max(0, count - 1));
    this.unmarkAsLiked();
  }

  private checkIfLiked(): void {
    if (typeof localStorage !== 'undefined') {
      const likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
      this.hasLiked.set(likedProducts.includes(this.product.id));
    }
  }

  private markAsLiked(): void {
    if (typeof localStorage !== 'undefined') {
      const likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
      if (!likedProducts.includes(this.product.id)) {
        likedProducts.push(this.product.id);
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
        this.hasLiked.set(true);
      }
    }
  }

  private unmarkAsLiked(): void {
    if (typeof localStorage !== 'undefined') {
      const likedProducts = JSON.parse(localStorage.getItem('likedProducts') || '[]');
      const index = likedProducts.indexOf(this.product.id);
      if (index > -1) {
        likedProducts.splice(index, 1);
        localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
        this.hasLiked.set(false);
      }
    }
  }

  shareOnWhatsApp(): void {
    const message = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  getStarArray(): boolean[] {
    const fullStars = Math.floor(this.product.rating);
    return Array(5).fill(false).map((_, i) => i < fullStars);
  }
}
