import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Album } from './models/album.model';
import { Photo } from './models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';
  private albumsCache: Album[] | null = null;

  constructor(private http: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    if (this.albumsCache) {
      return of(this.albumsCache);
    }
    return this.http.get<Album[]>(this.apiUrl).pipe(
      tap(albums => this.albumsCache = albums)
    );
  }

  getAlbum(id: number): Observable<Album> {
    if (this.albumsCache) {
      const album = this.albumsCache.find(a => a.id === id);
      if (album) return of(album);
    }
    return this.http.get<Album>(`${this.apiUrl}/${id}`);
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.apiUrl}/${id}/photos`);
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.apiUrl}/${album.id}`, album).pipe(
      tap(updatedAlbum => {
        if (this.albumsCache) {
          const index = this.albumsCache.findIndex(a => a.id === album.id);
          if (index !== -1) {
            this.albumsCache[index] = updatedAlbum;
          }
        }
      }),
      catchError((err: any) => {
        // Fallback update for dummy API
        if (this.albumsCache) {
          const index = this.albumsCache.findIndex(a => a.id === album.id);
          if (index !== -1) {
            this.albumsCache[index] = album;
          }
        }
        return throwError(() => err);
      })
    );
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        if (this.albumsCache) {
          this.albumsCache = this.albumsCache.filter(a => a.id !== id);
        }
      }),
      catchError(err => {
        if (this.albumsCache) {
          this.albumsCache = this.albumsCache.filter(a => a.id !== id);
        }
        return throwError(() => err);
      })
    );
  }
}
