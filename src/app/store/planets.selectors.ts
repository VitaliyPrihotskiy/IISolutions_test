import { createFeatureSelector, createSelector } from "@ngrx/store"
import { PlanetsState, PLANET_FEATURE_KEY } from "./planets.reducer"

const getPlanetsFeatureState = createFeatureSelector<PlanetsState>(PLANET_FEATURE_KEY)

export const getPlanets = createSelector(
    getPlanetsFeatureState,
    state => state.planets
);

export const getSelectedPlanet = createSelector(
    getPlanetsFeatureState,
    state => state.selectedPlanet
);

export const getPeople = createSelector(
    getPlanetsFeatureState,
    state => state.people
)