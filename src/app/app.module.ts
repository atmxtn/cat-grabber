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
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatPostComponent,
    UserDashboardComponent,
    UserSavedCatsComponent,
    UserRegisterComponent,
    UserSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IconsModule,
    provideFirebaseApp(
      () => initializeApp(environment.firebase)), 
      provideAuth(() => getAuth()
  ),
  ],
  providers: [ImageService, { provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
})
export class AppModule {}
