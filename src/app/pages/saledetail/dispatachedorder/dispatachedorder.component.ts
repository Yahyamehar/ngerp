import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-dispatachedorder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dispatachedorder.component.html',
  styleUrl: './dispatachedorder.component.scss'
})
export class DispatachedorderComponent {
  formData: any;
}
