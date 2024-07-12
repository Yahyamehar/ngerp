import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-viewtransfered',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './viewtransfered.component.html',
  styleUrl: './viewtransfered.component.scss'
})
export class ViewtransferedComponent {

  formData: any;

}
