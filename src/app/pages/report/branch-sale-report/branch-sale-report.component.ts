import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-branch-sale-report',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './branch-sale-report.component.html',
  styleUrl: './branch-sale-report.component.scss'
})
export class BranchSaleReportComponent {

  fromDate: any;
  toDate: any;

}
