import { Action, createReducer, on } from "@ngrx/store";
import { Person } from "../models/people.model";
import { Planet } from "../models/planets.model";
import {
    loadPeopleFailure,
    loadPeopleSuccess,
    loadPlanets,
    loadPlanetsFailure,
    loadPlanetsSuccess,
    resetSelectedPlanet,
    setSelectedPlanet
} from "./planets.action";

export const PLANET_FEATURE_KEY = 'planets';

export interface PlanetsState {
    planets: Planet[];
    isLoading: boolean;
    error: unknown;
    selectedPlanet: Planet | null;
    people: Person[] | [];
}

const initialState: PlanetsState = {
    planets: [],
    isLoading: false,
    error: null,
    selectedPlanet: null,
    people: []
};

const planetsReducer = createReducer(
    initialState,
    on(loadPlanets, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(loadPlanetsSuccess, (state, { planets }) => ({
        ...state,
        planets,
        isLoading: false,
        error: null
    })),
    on(loadPlanetsFailure, loadPeopleFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false
    })),
    on(loadPeopleSuccess, (state, { people }) => ({
        ...state,
        people: [...people],
        isLoading: false,
        error: null
    })),
    on(setSelectedPlanet, (state, { selectedPlanet }) => ({
        ...state,
        selectedPlanet
    })),
    on(resetSelectedPlanet, (state) => ({
        ...state,
        selectedPlanet: initialState.selectedPlanet
    })),
)

export function reducer(state: PlanetsState, action: Action) {
    return planetsReducer(state, action);
}
