import { Component } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';
import { Students } from '../models/students';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']  // Corrected typo
})
export class CreateComponent {

  constructor(private studentservice: StudentsService, private router: Router) {}

  formdata: Omit<Students, 'id'> = {  // Removed `id` from formdata
    name: '',
    age: 0,
    grade: ''
  };

  create() {
    this.studentservice.addstudent(this.formdata).subscribe({
      next: (data) => {
        this.router.navigate(['student/home']);  // Navigate after successful creation
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
