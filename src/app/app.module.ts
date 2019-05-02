import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import {
  ApiService,
  UserService,
  SharedModule,
  FooterComponent,
  HeaderComponent
} from './shared';
import { AuthModule } from './auth/auth.module';

const rootRouting: ModuleWithProviders = RouterModule.forRoot([], { useHash: true })

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    ReactiveFormsModule,
    HomeModule,
    rootRouting,
    SharedModule
  ],
  providers: [
    ApiService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
