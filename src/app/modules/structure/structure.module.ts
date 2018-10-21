import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from '../../components/structure/menu/menu.component';
import { ActionButtonComponent } from '../../components/structure/action-button/action-button.component';

@NgModule({
  declarations: [
    MenuComponent,
    ActionButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MenuComponent,
    ActionButtonComponent
  ]
})
export class StructureModule { }
