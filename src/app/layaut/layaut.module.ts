import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayautRoutingModule } from './layaut-routing.module';
import { LayautComponent } from './layaut.component';
import { HeaderComponent } from './components/header/header.component';
import { FotterComponent } from './components/fotter/fotter.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
  declarations: [
    LayautComponent,
    HeaderComponent,
    FotterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    LayautRoutingModule
  ]
})
export class LayautModule { }
