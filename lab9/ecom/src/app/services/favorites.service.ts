import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesSubject = new BehaviorSubject<Product[]>([]);
  favorites$: Observable<Product[]> = this.favoritesSubject.asObservable();

  constructor() {
    this.loadFavorites();
  }

  // Add product to favorites
  addFavorite(product: Product): void {
    const currentFavorites = this.favoritesSubject.value;
    if (!currentFavorites.find(fav => fav.id === product.id)) {
      this.favoritesSubject.next([...currentFavorites, product]);
      this.saveFavorites();
    }
  }

  // Remove product from favorites
  removeFavorite(productId: number): void {
    const currentFavorites = this.favoritesSubject.value;
    const updated = currentFavorites.filter(fav => fav.id !== productId);
    this.favoritesSubject.next(updated);
    this.saveFavorites();
  }

  // Check if product is in favorites
  isFavorite(productId: number): boolean {
    return this.favoritesSubject.value.some(fav => fav.id === productId);
  }

  // Toggle favorite status
  toggleFavorite(product: Product): void {
    if (this.isFavorite(product.id)) {
      this.removeFavorite(product.id);
    } else {
      this.addFavorite(product);
    }
  }

  // Get all favorites
  getFavorites(): Product[] {
    return this.favoritesSubject.value;
  }

  // Save favorites to localStorage
  private saveFavorites(): void {
    if (this.isBrowser()) {
      localStorage.setItem('favorites', JSON.stringify(this.favoritesSubject.value));
    }
  }

  // Load favorite
  private loadFavorites(): void {
    if (this.isBrowser()) {
      const stored = localStorage.getItem('favorites');
      if (stored) {
        try {
          this.favoritesSubject.next(JSON.parse(stored));
        } catch (error) {
          console.error('Error loading favorites from localStorage:', error);
        }
      }
    }
  }

  // Check if running in browser
  private isBrowser(): boolean {
    return typeof localStorage !== 'undefined';
  }

  // Clear all favorites
  clearFavorites(): void {
    this.favoritesSubject.next([]);
    this.saveFavorites();
  }
}
