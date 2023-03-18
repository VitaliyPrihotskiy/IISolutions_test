
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { forkJoin, Observable } from "rxjs";
import { Planet } from "../models/planets.model";
import { Person } from "../models/people.model";

@Injectable({ providedIn: 'root' })
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople(selectedPlanet: Planet): Observable<Person[]> {
    let residents = selectedPlanet.residents.map(resident => this.http.get<Person>(resident))

    return forkJoin(residents);
  }
}