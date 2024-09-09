import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Students } from '../models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private apiurl = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  // Fetch all students
  getstudents(): Observable<Students[]> {
    return this.http.get<Students[]>(this.apiurl);
  }

  // Fetch a single student by id (id can be string or number)
  getstudent(id: string | number): Observable<Students> {
    return this.http.get<Students>(`${this.apiurl}/${id}`);
  }

  // Add a new student (id is omitted in the input object)
  addstudent(student: Omit<Students, 'id'>): Observable<Students> {
    return this.http.post<Students>(this.apiurl, student);
  }

  // Update a student (id can be string or number)
  updatestudent(id: string | number, student: Partial<Students>): Observable<any> {
    return this.http.put<any>(`${this.apiurl}/${id}`, student);
  }

  // Delete a student (id can be string or number)
  deletestudent(id: string | number): Observable<any> {
    return this.http.delete<any>(`${this.apiurl}/${id}`);
  }
}
