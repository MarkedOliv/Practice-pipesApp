import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

import localeEsVE from '@angular/common/locales/es-VE';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsVE);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-VE',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
