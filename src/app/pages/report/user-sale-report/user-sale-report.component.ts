import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-sale-report',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-sale-report.component.html',
  styleUrl: './user-sale-report.component.scss'
})
export class UserSaleReportComponent {

  fromDate: any;
  toDate: any;

}
