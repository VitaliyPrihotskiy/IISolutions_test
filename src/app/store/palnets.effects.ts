import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, map, of, switchMap, withLatestFrom } from "rxjs";
import { PeopleService } from "../services/people.service";
import { PlanetsService as PlanetsService } from "../services/planets.service";
import { loadPeopleFailure, loadPeopleSuccess, loadPlanets, loadPlanetsFailure, loadPlanetsSuccess, setSelectedPlanet } from "./planets.action";
import { getSelectedPlanet } from "./planets.selectors";

@Injectable()
export class PlanetsEffect {

    constructor(
        private readonly actions$: Actions,
        private readonly planetsService: PlanetsService,
        private readonly peopleService: PeopleService,
        private readonly store: Store) {
    }

    loadPlanets$ = createEffect(() => this.actions$.pipe(
        ofType(loadPlanets),
        switchMap(() => {
            return this.planetsService.getPlanets()
                .pipe(
                    map((planets) => loadPlanetsSuccess({ planets })),
                    catchError((error) => {
                        return of(loadPlanetsFailure(error));
                    })
                );
        })
    ));

    loadPeople$ = createEffect(() => this.actions$.pipe(
        ofType(setSelectedPlanet),
        withLatestFrom(this.store.select(getSelectedPlanet)),
        switchMap(([{ selectedPlanet }]) => {
            return this.peopleService.getPeople(selectedPlanet)
                .pipe(
                    map((people) => loadPeopleSuccess({ people })),
                    catchError((error) => {
                        return of(loadPeopleFailure(error));
                    })
                );
        })
    ));
}

