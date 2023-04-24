import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { IconsModule } from 'src/app/lib/icon/icon.module';
import { CatPostComponent } from './cat-post/cat-post.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { ImageService } from './image.service';
import { UserSavedCatsComponent } from './user-saved-cats/user-saved-cats.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatPostComponent,
    UserDashboardComponent,
    UserSavedCatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IconsModule,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
