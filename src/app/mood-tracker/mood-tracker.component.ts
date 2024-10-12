import { Component } from '@angular/core';

@Component({
  selector: 'ns-mood-tracker',
  templateUrl: './mood-tracker.component.html',
  styleUrls: ['./mood-tracker.component.css']
})
export class MoodTrackerComponent {
  currentMood: string = 'Not set';
  partnerMood: string = 'Not shared yet';

  setMood(mood: string) {
    this.currentMood = mood;
    // Here you would typically update this to a backend service
  }

  shareMood() {
    // Here you would typically send this to your partner via a backend service
    console.log(`Shared mood: ${this.currentMood}`);
  }
}