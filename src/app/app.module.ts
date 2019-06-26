import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import {FormsModule} from '@angular/forms';
import {formatDate} from '@angular/common';
import {ConnectionService} from './connection.service';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',      component: MainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    FooterComponent,
    ObjectListComponent,
    ObjectEditorComponent,
    RecomendationListComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatTreeModule, MatIconModule,
    MatButtonModule, MatIconModule,
    MatDividerModule, MatDividerModule,
    MDBBootstrapModule, AngularEditorModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, FormsModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
