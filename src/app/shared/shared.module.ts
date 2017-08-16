import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import {LocalStorageModule} from 'angular-2-local-storage';

@NgModule({
  imports: [
    CommonModule,
    LocalStorageModule.withConfig({
      prefix: 'Demo',
      storageType: 'localStorage'
    })
  ],
  providers: [AuthGuard, AuthService],
  declarations: []
})
export class SharedModule { }
