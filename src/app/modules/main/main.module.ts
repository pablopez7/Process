import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { DashboardComponent } from '../../components/main/dashboard/dashboard.component';
import { AccessComponent } from '../../components/main/access/access.component';

import { StructureModule } from '../structure/structure.module';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    AccessComponent
  ],
  imports: [
    MainRoutingModule,
    StructureModule
  ],
  exports: [
    MainComponent
  ]
})

export class MainModule { }
