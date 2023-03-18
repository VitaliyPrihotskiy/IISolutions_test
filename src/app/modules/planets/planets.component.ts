import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Planet } from 'src/app/models/planets.model';
import { loadPlanets, setSelectedPlanet } from 'src/app/store/planets.action';
import { getPlanets } from 'src/app/store/planets.selectors';
import { MatDialog } from '@angular/material/dialog';
import { PeopleListComponent } from '../people-list/people-list.component';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetsComponent {
  readonly viewModel$ = this.store.select(getPlanets);
  readonly displayedColumns: string[] = ['name', 'diameter', 'climate', 'population'];
  selected: Planet | null = null;

  constructor(private readonly store: Store, private readonly dialog: MatDialog) { }

  ngOnInit(): void {
    this.store.dispatch(loadPlanets());
  }

  openDialog(): void {
    // @ts-ignore
    this.store.dispatch(setSelectedPlanet({ selectedPlanet: this.selected }))
    this.dialog.open(PeopleListComponent, {
      data: this.selected,
    });
  }
}
