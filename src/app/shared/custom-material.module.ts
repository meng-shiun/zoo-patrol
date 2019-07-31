import { NgModule } from '@angular/core';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CustomMaterialModule {
  static exportModules = [
    MatGridListModule,
    MatButtonModule,
    MatIconModule
  ];
}
