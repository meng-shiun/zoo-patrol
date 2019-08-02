import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { ComponentsModule } from '@app/components/components.module';
import { ClientsRoutingModule } from './clients-routing.module';

@NgModule({
  declarations: [
    ClientsRoutingModule.components
  ],
  imports: [
    SharedModule,
    ComponentsModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
