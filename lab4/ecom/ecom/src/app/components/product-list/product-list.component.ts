import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';
import { PRODUCTS } from '../../data/products';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = PRODUCTS;
  favorites: Product[] = [];

  constructor(public favoritesService: FavoritesService) {
    // Subscribe to favorites changes
    this.favoritesService.favorites$.subscribe(favs => {
      this.favorites = favs;
    });
  }
}
