import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { ListComponent } from './todos/list/list.component';
import { EditComponent } from './todos/edit/edit.component';
import { DetailsComponent } from './todos/details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ListComponent,
    EditComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
