import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, pluck } from 'rxjs/operators';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatImageService {
  constructor(private http: HttpClient) {}

  getCatURL() {
    return this.http.get<{ url: string }>('https://cataas.com/cat?json=true').pipe(
      map((responseFromOne) => 'https://cataas.com'+responseFromOne.url),
      catchError(() =>
        this.http
          .get<Array<{ url: string }>>(
            'https://api.thecatapi.com/v1/images/search?api_key=live_ol3T9oQPePWXAKxX4h2l0YpKq2tbKX0mlYoYdoD8QWgzhjnG8G8VSOu9B5N6Qxp2'
          )
          .pipe(map((responseFrom2) => responseFrom2[0].url))
      )
    );
  }
}
