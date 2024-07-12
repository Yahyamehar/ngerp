import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-branch-return-report',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './branch-return-report.component.html',
  styleUrl: './branch-return-report.component.scss'
})
export class BranchReturnReportComponent {
  fromDate: any;
  toDate: any;

}
