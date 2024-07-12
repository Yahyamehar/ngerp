import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payroll.component.html',
  styleUrl: './payroll.component.scss'
})
export class PayrollComponent {
  formData = {
    employeeName: "",
    joiningDate: "",
    cnic: "",
    total: 0,
    balance: 0,
    contact: "",
    address: "",
    designation: "",
    prevBalance: 0,
    basicSalary: 0,
    overTime: 0,
    deductions: 0,
    daysOn: 0,
    advance: 0,
    autoRent: 0,
    otherAllowances: 0,
    incentive: 0,
    paid: 0
  };

  total: number = 0;
  balance: number = 0;

  updateBalance() {
    this.total = this.calculateTotal();
    this.balance = this.total - this.formData.paid;
  }

  calculateTotal(): number {
    return this.formData.basicSalary + this.formData.overTime - this.formData.deductions +
           this.formData.advance - this.formData.autoRent + this.formData.otherAllowances +
           this.formData.incentive - this.formData.prevBalance;
  }
}
