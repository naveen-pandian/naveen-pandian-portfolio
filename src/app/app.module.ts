import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { welcomeComponent } from './Resources/otherComponents/welcome.component';
import { educationComponent } from './Resources/otherComponents/education.component';
import { skillsComponent } from './Resources/otherComponents/skills.component';
import { projectsComponent } from './Resources/otherComponents/projects.component';
import { contactComponent } from './Resources/otherComponents/contact.component';
import { dialogComponent } from './Resources/otherComponents/dialog.component';


@NgModule({
  declarations: [
    AppComponent,welcomeComponent,educationComponent,skillsComponent,projectsComponent,contactComponent,dialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
