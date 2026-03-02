import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlbumsService } from '../albums.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | undefined;
  loading = true;
  error = '';
  saving = false;
  successMessage = '';

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = parseInt(idParam, 10);
      this.loadAlbum(id);
    } else {
      this.error = 'Invalid album ID';
      this.loading = false;
    }
  }

  loadAlbum(id: number): void {
    this.albumsService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = { ...data }; // Create a copy
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load album details.';
        this.loading = false;
        console.error(err);
      }
    });
  }

  saveAlbum(): void {
    if (!this.album) return;

    this.saving = true;
    this.successMessage = '';

    this.albumsService.updateAlbum(this.album).subscribe({
      next: (updatedAlbum) => {
        this.album = updatedAlbum;
        this.saving = false;
        this.successMessage = 'Album title updated successfully!';
        setTimeout(() => this.successMessage = '', 3000);
      },
      error: (err) => {
        console.error('Failed to update album', err);
        // JSONPlaceholder sometimes fails PUTs, simulate success for the UI as per instructions
        this.saving = false;
        this.successMessage = 'Album title updated locally!';
        setTimeout(() => this.successMessage = '', 3000);
      }
    });
  }
}
