import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsRoutingModule } from './planets-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { PlanetsComponent } from './planets.component';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { PeopleListComponent } from '../people-list/people-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    PlanetsComponent,
    PeopleListComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatDialogModule,
    MatListModule
  ]
})
export class PlanetsModule { }
