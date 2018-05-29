import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { RoadtripStop } from './models/roadtrip-stop';


@Injectable({
  providedIn: 'root'
})
export class RoadtripStopService {

  private stops = [];
  private url = 'http://localhost:8085/api/stops';



constructor(private http: HttpClient) { }

  index() {
    return this.http.get<RoadtripStop[]>(this.url)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM on index');
      })
  );
}

  create = function(stop: RoadtripStop) {

    return this.http.post(this.url, stop)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM on create');
      })
  );
};

  update = function(stop: RoadtripStop) {

    return this.http.put(this.url + '/' + stop.id, stop)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM on update');
      })
  );
};

  delete = function(id) {
    console.log(id);

    return this.http.delete(this.url + '/' +  id)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('KABOOM on delete');
      })
  );
};
}
