import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PortalInterceptor } from './Core/Interceptors/portal.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './Shared/shared/shared.module';
import { HandlerInterceptor } from './Core/Interceptors/handler.interceptor';
import { SideBarComponent } from './Shared/Layouts/side-bar/side-bar.component';
import { NavBarComponent } from './Shared/Layouts/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SideBarComponent,
    NavBarComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PortalInterceptor,
      multi: true
    },
    {
    provide: HTTP_INTERCEPTORS,
    useClass: HandlerInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
