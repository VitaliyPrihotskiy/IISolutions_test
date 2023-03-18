
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, expand, reduce } from 'rxjs/operators';
import { Observable } from "rxjs";
import { GET_PLANETS_URL } from "../constants/planets.constants";
import { Planet } from "../models/planets.model";

@Injectable({ providedIn: 'root' })
export class PlanetsService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get(GET_PLANETS_URL).pipe(
      expand((res: any) => {
        return res.next
          ? this.http.get(res.next).pipe(map((resp: any) => resp))
          : [];
      }),
      reduce((acc, data) => acc.concat(data.results), [])
    );
  }
}