import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-branch-order-report',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './branch-order-report.component.html',
  styleUrl: './branch-order-report.component.scss'
})
export class BranchOrderReportComponent {

  fromDate: any;
  toDate: any;

}
