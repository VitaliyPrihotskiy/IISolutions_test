import { ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Planet } from 'src/app/models/planets.model';
import { loadPeople } from 'src/app/store/planets.action';
import { getPeople } from 'src/app/store/planets.selectors';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent {
  readonly viewModel$ = this.store.select(getPeople);

  constructor(@Inject(MAT_DIALOG_DATA) public data: Planet, private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadPeople());
  }
}
