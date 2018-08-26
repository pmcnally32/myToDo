import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './modules/todos/todos.component';
import { ListComponent } from './modules/todos/list/list.component';
import { EditComponent } from './modules/todos/edit/edit.component';
import { DetailsComponent } from './modules/todos/details/details.component';
import { UiModuleModule } from './modules/ui-module.module';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ListComponent,
    EditComponent,
    DetailsComponent,
    UiModuleModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
