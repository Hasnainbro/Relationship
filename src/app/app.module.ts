import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoodTrackerComponent } from './mood-tracker/mood-tracker.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    MoodTrackerComponent
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}