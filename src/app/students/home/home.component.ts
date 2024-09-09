import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Students } from '../models/students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allstudents: Students[] = [];

  constructor(
    private studentservice: StudentsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadStudents();  // Load students on component initialization
  }

  // Load students from the service
  loadStudents(): void {
    this.studentservice.getstudents().subscribe((data: Students[]) => {
      this.allstudents = data;
    });
  }

  // Navigate to the edit page with the student's ID
  onedit(id: string | number): void {
    this.router.navigate(['/student/edit', id]);
  }

  // Delete the student and update the UI
  ondelete(id: string | number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentservice.deletestudent(id).subscribe({
        next: () => {
          console.log('Student deleted successfully');
          // Remove the student from the displayed list
          this.allstudents = this.allstudents.filter(student => student.id !== id);
        },
        error: (err) => {
          console.error('Error deleting student:', err);
        }
      });
    }
  }
}
