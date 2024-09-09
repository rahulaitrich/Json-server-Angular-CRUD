import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../services/students.service';
import { Students } from '../models/students';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formdata: Students = { id: '', name: '', age: 0, grade: '' };  // ID can be string or number
  studentId!: string;  // ID to store from the URL

  constructor(
    private route: ActivatedRoute, 
    private studentservice: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the ID from the URL
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.studentId = id;  // Store the id for update
      this.getStudentById(id);
    }
  }

  // Fetch student data by ID
  getStudentById(id: string) {
    this.studentservice.getstudent(id).subscribe((data: Students) => {
      this.formdata = data;  // Fill the form with the fetched data
    });
  }

  // Update student details
  updateStudent() {
    this.studentservice.updatestudent(this.studentId, this.formdata).subscribe({
      next: (response) => {
        console.log('Student updated:', response);
        this.router.navigate(['/student/home']);  // Navigate back to home after update
      },
      error: (error) => {
        console.error('Error updating student:', error);
      }
    });
  }
}
