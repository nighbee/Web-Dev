import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = '';

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load albums.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  deleteAlbum(id: number, event: Event): void {
    event.stopPropagation(); // prevent navigation to detail view
    this.albumsService.deleteAlbum(id).subscribe({
      next: () => {
        // filter out the deleted album
        this.albums = this.albums.filter(album => album.id !== id);
      },
      error: (err) => {
        console.error('Failed to delete album', err);
        // still remove from UI as requested
        this.albums = this.albums.filter(album => album.id !== id);
      }
    });
  }
}
