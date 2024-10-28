import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { SidenavComponent } from '../sidenav/sidenav.component';
import { Footer1Component } from "../footer1/footer1.component";
import { FeedbackComponent } from "../feedback/feedback.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [SidenavComponent, Footer1Component, FeedbackComponent,HttpClientModule],
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {

  campusDrives = {
    tcs: false,
    wipro: false,
    accenture: false
  };

  registration = {
    name: '',
    regNumber: '',
    stream: 'CSE',
    mobile: '',
    campuses: {
      vizianagaram: false,
      bhubaneswar: false
    }
  };

  constructor(private router: Router) {} 

  submitTraining() {
    // Simulate submission of training session data
    console.log('Training session submitted:', this.campusDrives);
    alert('Training session submitted successfully!');

    // Navigate to the "Upcoming" page
    this.router.navigate(['/upcoming']);
  }

  register() {
    // Simulate registration data logging
    console.log('Registration Data:', this.registration);
    alert('Registration completed successfully!');

    // Navigate to the "Upcoming" page
    this.router.navigate(['/upcoming']);
  }
}
