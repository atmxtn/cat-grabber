import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSavedCatsComponent } from './user-saved-cats/user-saved-cats.component';
import { CatPostComponent } from './cat-post/cat-post.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IconsModule } from 'src/app/lib/icon/icon.module';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CatPostComponent,
    UserDashboardComponent,
    UserSavedCatsComponent,
    UserSettingsComponent,
    LoadingSpinnerComponent,
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
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],
  bootstrap: [AppComponent],
})
export class AppModule {}
