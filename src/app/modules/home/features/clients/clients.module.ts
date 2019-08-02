import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';

@NgModule({
  declarations: [
    ClientsRoutingModule.components
  ],
  imports: [
    SharedModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
