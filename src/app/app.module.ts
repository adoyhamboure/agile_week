import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SuiModule } from 'ng2-semantic-ui';
import { HomeComponent } from './home/home.component';
import { EditorComponent } from './editor/editor.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { TrainingComponent } from './training/training.component';
import { CertificationComponent } from './certification/certification.component';
import { CreationComponent } from './creation/creation.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';
import { GeneratedCvComponent } from './generated-cv/generated-cv.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { EditOneComponentComponent } from './edit-one-component/edit-one-component.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditorComponent,
    PresentationComponent,
    ProfileComponent,
    SkillsComponent,
    ExperiencesComponent,
    TrainingComponent,
    CertificationComponent,
    CreationComponent,
    ReferenceComponent,
    ContactComponent,
    GeneratedCvComponent,
    EditOneComponentComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
