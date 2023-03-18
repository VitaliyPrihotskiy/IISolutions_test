import { createAction, props } from '@ngrx/store';
import { Person } from '../models/people.model';
import { Planet } from '../models/planets.model';

function scoped(templateString: TemplateStringsArray) {
  return `Planets: ${templateString[0]}`;
}

export const loadPlanets = createAction(
  scoped`Load Planets`
);

export const loadPlanetsSuccess = createAction(
  scoped`Load Planets Success`,
  props<{ planets: Planet[] }>()
);

export const loadPlanetsFailure = createAction(
  scoped`Load Planets Failure`,
  props<{ error: unknown }>()
);

export const loadPeople = createAction(
  scoped`Load People`
);

export const loadPeopleSuccess = createAction(
  scoped`Load People Success`,
  props<{ people: Person[] }>()
);

export const loadPeopleFailure = createAction(
  scoped`Load People Failure`,
  props<{ error: unknown }>()
);

export const setSelectedPlanet = createAction(
  scoped`Set Selected Planet`,
  props<{ selectedPlanet: Planet }>()
);

export const resetSelectedPlanet = createAction(
  scoped`Reset Selected Planet Id`
);