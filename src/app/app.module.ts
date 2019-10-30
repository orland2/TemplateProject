import { BrowserModule, HAMMER_GESTURE_CONFIG  } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DeviceDetectorModule } from 'ngx-device-detector';

import { CurrencyMaskModule } from "ng2-currency-mask";
import { Ng2Rut } from 'ng2-rut';
import { Globals } from './models/globals';
import { ThousandsPipe } from './pipe/thousandsPipe';
import { CurrencyPipe } from './pipe/currencyPipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from './interceptors/request.interceptor';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent} from './components/header/header.component';
import { FooterComponent} from './components/footer/footer.component';
import { MenuHorizontalComponent } from './components/menu-horizontal/menu-horizontal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CurrencyPipe,
    ThousandsPipe,
    MenuHorizontalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    Ng2Rut,
    HttpClientModule,
    FormsModule,
    CurrencyMaskModule,
    ReactiveFormsModule,
    DeviceDetectorModule.forRoot()
  ],
  providers:  [   //tiene que ver con los servicios
    Globals,
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }
  ],
  bootstrap: [AppComponent]//Donde Inicia el proyecto
})
export class AppModule { }
