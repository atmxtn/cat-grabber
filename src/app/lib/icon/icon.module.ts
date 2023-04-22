import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Gitlab } from 'angular-feather/icons';
import { Sunset } from 'angular-feather/icons';



@NgModule({
  imports: [
    FeatherModule.pick({
      Gitlab,
      Sunset
    }),
  ],
  exports: [FeatherModule],
})
export class IconsModule {}
