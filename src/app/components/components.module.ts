import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@NgModule({
  declarations: [
    SubMenuComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SubMenuComponent
  ]
})
export class ComponentsModule {
  static components = [
    SubMenuComponent
  ];
}
