import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-sale-return-report',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './sale-return-report.component.html',
  styleUrl: './sale-return-report.component.scss'
})
export class SaleReturnReportComponent {
  fromDate: any;
  toDate: any;

}
