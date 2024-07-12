import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCalendar, NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-attendence',
  standalone: true,
  imports: [CommonModule, NgbModule, FormsModule],
  templateUrl: './attendence.component.html',
  styleUrl: './attendence.component.scss',
})
export class AttendenceComponent implements OnInit {
  model: NgbDateStruct; // Variable to store the selected date
  today: NgbDateStruct; // Variable to store today's date
  date: { year: number, month: number }; // Variable for date navigation
  employees: any[] = [
    { id: 1, name: 'John Doe', attendance: 'Present' },
    { id: 2, name: 'Jane Smith', attendance: 'Absent' },
    { id: 3, name: 'Bob Johnson', attendance: 'Present' },
    // Add more employees as needed
  ];

  constructor(private calendar: NgbCalendar) {}

  ngOnInit(): void {
    this.today = this.calendar.getToday(); // Initialize today's date
    this.model = this.today; // Initialize selected date to today's date
  }
}

