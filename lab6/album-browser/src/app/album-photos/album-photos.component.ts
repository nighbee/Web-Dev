import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId: number | null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.albumId = parseInt(idParam, 10);
      this.loadPhotos(this.albumId);
    } else {
      this.error = 'Invalid album ID';
      this.loading = false;
    }
  }

  loadPhotos(id: number): void {
    this.albumsService.getAlbumPhotos(id).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load photos.';
        this.loading = false;
        console.error(err);
      }
    });
  }
}
