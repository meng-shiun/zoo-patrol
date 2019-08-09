import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CardComponent
  ]
})
export class ComponentsModule {
  static components = [
    CardComponent
  ];
}
