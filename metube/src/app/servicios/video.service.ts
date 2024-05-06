import { Injectable } from '@angular/core';
import { Video } from '../tipos/video';
import { VIDEOS } from '../mocks/mock-videos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  obtenerTodos(): Observable<Video[]> {
    return of(VIDEOS);
  }

  obtenerPorId(id: number): Observable<Video> {
    return of(VIDEOS.find(v => v.id === id)!);
  }

  alta(video: Video): Observable<Video> {
    VIDEOS.push(video);
    return of(video);
  }
}
