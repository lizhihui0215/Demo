import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiginRoutingModule } from './sigin-routing.module';
import {SiginComponent} from './sigin.component';

@NgModule({
  imports: [
    CommonModule,
    SiginRoutingModule
  ],
  declarations: [SiginComponent]
})
export class SiginModule { }
