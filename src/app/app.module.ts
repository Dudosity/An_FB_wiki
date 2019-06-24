import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ObjectListComponent } from './object-list/object-list.component';
import { ObjectEditorComponent } from './object-editor/object-editor.component';
import { RecomendationListComponent } from './recomendation-list/recomendation-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonModule, MatDivider, MatIconModule} from '@angular/material';
import {MatDividerModule} from '@angular/material/divider';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AngularEditorConfig, AngularEditorModule} from '@kolkov/angular-editor';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    FooterComponent,
    ObjectListComponent,
    ObjectEditorComponent,
    RecomendationListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatTreeModule, MatIconModule,
    MatButtonModule, MatIconModule,
    MatDividerModule, MatDividerModule,
    MDBBootstrapModule, AngularEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
