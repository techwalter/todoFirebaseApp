import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// import { AngularFireModule } from "@angular/fire";
// import { AngularFireAuthModule } from "@angular/fire/auth";
// import { AngularFirestoreModule } from "@angular/fire/firestore";
// import { AngularFireStorageModule } from "@angular/fire/storage";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { HeaderComponent } from "./components/header/header.component";
import { CreateTodoComponent } from "./components/create-todo/create-todo.component";
import { TodoState } from "./store/todo.state";
import { MatInputModule } from "@angular/material/input";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  ScrollingModule } from "@angular/cdk/scrolling";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NgxsStoragePluginModule } from "@ngxs/storage-plugin";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { DatePipe } from "./date.pipe";
import { MatIconModule } from "@angular/material/icon";
import { MatTabsModule } from "@angular/material/tabs";
import { NgArrayPipesModule } from "angular-pipes";
import { NgxsLoggerPluginModule } from "@ngxs/logger-plugin";
import { MatChipsModule } from "@angular/material/chips";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { FullCalendarModule } from "@fullcalendar/angular";
import { MatCardModule } from "@angular/material/card";
import { NgxsRouterPluginModule } from "@ngxs/router-plugin";

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    HeaderComponent,
    CreateTodoComponent,
    DatePipe,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    MatAutocompleteModule,
    MatChipsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatPaginatorModule,
    ScrollingModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatIconModule,
    NgArrayPipesModule,
    MatSelectModule,
    MatCardModule,
    // AngularFireModule.initializeApp(environment.firebase, "TodoFirebaseApp"),
    // AngularFireAuthModule,
    // AngularFirestoreModule,
    // AngularFireStorageModule,
    NgxsModule.forRoot([TodoState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot(),
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    }),
    FullCalendarModule,
    NgxsRouterPluginModule.forRoot()
  ],
  bootstrap: [AppComponent],
  entryComponents: [CreateTodoComponent]
})
export class AppModule { }
