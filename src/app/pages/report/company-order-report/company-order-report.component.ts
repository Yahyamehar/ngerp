import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-company-order-report',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './company-order-report.component.html',
  styleUrl: './company-order-report.component.scss'
})
export class CompanyOrderReportComponent {

  fromDate: any;
  toDate: any;


}
