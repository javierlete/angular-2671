import { Injectable, inject } from '@angular/core';
import { Video } from '../tipos/video';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  url = 'http://127.0.0.1:3000/videos/';
  http = inject(HttpClient);

  obtenerTodos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.url);
  }

  obtenerPorId(id: number): Observable<Video> {
    return this.http.get<Video>(this.url + id);
  }

  alta(video: Video): Observable<Video> {
    return this.http.post<Video>(this.url, video);
  }
}
