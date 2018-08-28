import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UiModuleModule } from './modules/ui-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
