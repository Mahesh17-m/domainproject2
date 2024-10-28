import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TopnavComponent } from '../topnav/topnav.component';
import { FeedbackComponent } from "../feedback/feedback.component";
import { Footer1Component } from "../footer1/footer1.component";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, TopnavComponent, FeedbackComponent, Footer1Component, CommonModule,HttpClientModule],
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {} 

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      fullName: ['', Validators.required],
      dob: ['', Validators.required],
      gender: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: [''],

      degree: ['', Validators.required],
      department: ['', Validators.required],
      college: ['', Validators.required],
      yearOfPassing: ['', Validators.required],
      percentage: ['', Validators.required],

      completedTrainings: [''],
      skills: [''],
      preferredTraining: [''],

      interestedInPlacement: [false],
      preferredJobRoles: [''],
      preferredLocation: [''],
      resume: [null],
      linkedin: [''],
      portfolio: [''],

      extracurricularActivities: [''],
      languagesKnown: [''],
      achievements: [''],
      additionalInformation: [''],

      declaration: [false, Validators.requiredTrue] 
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Simulate successful registration
      console.log('Registration successful', this.registrationForm.value);
      alert('Registration successful!');

      // Navigate to the CV form page
      this.router.navigate(['/cv-form']);

      // Reset the form after successful registration
      this.registrationForm.reset();
    } else {
      console.error('Form is not valid:');
      console.error('Form Errors:', this.registrationForm.errors);

      // Log validation errors for each control
      Object.keys(this.registrationForm.controls).forEach((key) => {
        const control = this.registrationForm.get(key);
        if (control && control.invalid) {
          console.error(`Control ${key} is invalid:`, control.errors);
        }
      });
    }
  }
}
