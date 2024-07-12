import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-transferstock',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transferstock.component.html',
  styleUrl: './transferstock.component.scss'
})
export class TransferstockComponent {

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
