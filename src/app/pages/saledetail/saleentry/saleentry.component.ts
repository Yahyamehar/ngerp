import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-saleentry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './saleentry.component.html',
  styleUrl: './saleentry.component.scss'
})
export class SaleentryComponent {
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
