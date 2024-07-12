import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss',
})
export class UserLoginComponent {
  fromDate: any;
  toDate: any;
  selectedUser: any;
  status: any;

  generatePDF(): void {
    if (this.fromDate && this.toDate && this.selectedUser && this.status) {
      const pdf = new jsPDF();

      // Add header with logo
      const logo = new Image();
      logo.src = 'assets/media/logos/logoo.jpg'; // Replace with your logo file path
      pdf.addImage(logo, 'PNG', 20, 10, 30, 30); // x, y, width, height

      // Add title with styling
      pdf.setFontSize(24);
      pdf.setTextColor(33, 33, 33); // Dark gray
      pdf.text('User Login Report', pdf.internal.pageSize.getWidth() / 2, 30, { align: 'center' });

      // Add decorative element
      pdf.setLineWidth(1);
      pdf.setDrawColor(33, 33, 33); // Dark gray
      pdf.line(20, 50, pdf.internal.pageSize.getWidth() - 20, 50); // x1, y1, x2, y2

      // Add content
      pdf.setFontSize(12);
      pdf.setTextColor(33, 33, 33); // Dark gray
      pdf.text(`From: ${this.fromDate}`, pdf.internal.pageSize.getWidth() / 2, 70, { align: 'center' });
      pdf.setTextColor(255, 0, 0); // Red color
      pdf.text(`To: ${this.toDate}`, pdf.internal.pageSize.getWidth() / 2, 80, { align: 'center' });
      pdf.setTextColor(0, 0, 255); // Blue color
      pdf.text(`Selected User: ${this.selectedUser}`, pdf.internal.pageSize.getWidth() / 2, 90, { align: 'center' });
      pdf.text(`Selected User Status: ${this.status}`, pdf.internal.pageSize.getWidth() / 2, 100, { align: 'center' });

      // Add decorative footer
      pdf.setLineWidth(1);
      pdf.setDrawColor(33, 33, 33); // Dark gray
      pdf.line(20, pdf.internal.pageSize.getHeight() - 10, pdf.internal.pageSize.getWidth() - 20, pdf.internal.pageSize.getHeight() - 10); // x1, y1, x2, y2

      pdf.save('report.pdf');

      // Show success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'PDF generated successfully!',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // Show error message using SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please select both dates and a user before generating PDF.',
      });
    }
  }
}
