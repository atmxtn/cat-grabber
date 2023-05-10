import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Gitlab, LogOut, Settings, Sunset, X, Check} from 'angular-feather/icons';




@NgModule({
  imports: [
    FeatherModule.pick({
      Gitlab,
      Sunset,
      LogOut,
      Settings,
      X,
      Check
    }),
  ],
  exports: [FeatherModule],
})
export class IconsModule {}
