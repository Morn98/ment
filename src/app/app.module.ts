import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { SkillsInterestsComponent } from './skills-interests/skills-interests.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    LandingPageComponent,
    CurriculumVitaeComponent,
    SkillsInterestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
