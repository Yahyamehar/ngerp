import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pointofsale',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pointofsale.component.html',
  styleUrl: './pointofsale.component.scss'
})
export class PointofsaleComponent {
formData: any;

  print() {
    window.print();
  }

  upload() {
    window.print();
    // Implement upload logic
  }

  save() {
    // Implement save logic
  }

  delete() {
    // Implement delete logic
  }

  cancel() {
    // Implement cancel logic
  }

  add() {
    // Implement add logic
  }

  search() {

  }

  lastEntry() {
    // Implement last entry logic
  }

}
