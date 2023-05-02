import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Gitlab, LogOut, Settings } from 'angular-feather/icons';
import { Sunset } from 'angular-feather/icons';



@NgModule({
  imports: [
    FeatherModule.pick({
      Gitlab,
      Sunset,
      LogOut,
      Settings
    }),
  ],
  exports: [FeatherModule],
})
export class IconsModule {}
