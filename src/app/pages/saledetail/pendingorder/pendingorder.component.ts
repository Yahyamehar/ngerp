import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pendingorder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pendingorder.component.html',
  styleUrl: './pendingorder.component.scss'
})
export class PendingorderComponent {
  formData: any;

}
