import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpParams, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  getMaps() {
    return this.http.get(`${environment.apiUrl}/maps/maps.json`);
  }

  getMap(id: number) {

    switch (id) {
      case 1: // kafe
        return this.http.get(`${environment.apiUrl}/maps/kafe/kafe.json`);
      default:

    }
  }

}
