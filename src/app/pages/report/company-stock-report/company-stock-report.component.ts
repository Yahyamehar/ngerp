import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-stock-report',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './company-stock-report.component.html',
  styleUrl: './company-stock-report.component.scss',
})
export class CompanyStockReportComponent {
  selectedBrand: any;
  selectedCategory: any;
  selectedSubCategory: any;

  generatePDF(): void {
    if (
      this.selectedBrand &&
      this.selectedCategory &&
      this.selectedSubCategory
    ) {
      const pdf = new jsPDF();

      // Add header with logo
      const logo = new Image();
      logo.src = 'assets/media/logos/logoo.jpg'; // Replace with your logo file path
      pdf.addImage(logo, 'PNG', 20, 10, 30, 30); // x, y, width, height

      // Add title with styling
      pdf.setFontSize(24);
      pdf.setTextColor(33, 33, 33); // Dark gray
      pdf.text(
        'Company Stock Report',
        pdf.internal.pageSize.getWidth() / 2,
        30,
        { align: 'center' }
      );

      // Add decorative element
      pdf.setLineWidth(1);
      pdf.setDrawColor(33, 33, 33); // Dark gray
      pdf.line(20, 50, pdf.internal.pageSize.getWidth() - 20, 50); // x1, y1, x2, y2

      // Add content
      pdf.setFontSize(12);
      pdf.setTextColor(33, 33, 33); // Dark gray
      pdf.text(
        `Brand: ${this.selectedBrand}`,
        pdf.internal.pageSize.getWidth() / 2,
        70,
        { align: 'center' }
      );
      pdf.setTextColor(255, 0, 0); // Red color
      pdf.text(
        `Category: ${this.selectedCategory}`,
        pdf.internal.pageSize.getWidth() / 2,
        80,
        { align: 'center' }
      );
      pdf.setTextColor(0, 0, 255); // Blue color
      pdf.text(
        `Sub Category: ${this.selectedSubCategory}`,
        pdf.internal.pageSize.getWidth() / 2,
        90,
        { align: 'center' }
      );

      // Add decorative footer
      pdf.setLineWidth(1);
      pdf.setDrawColor(33, 33, 33); // Dark gray
      pdf.line(
        20,
        pdf.internal.pageSize.getHeight() - 10,
        pdf.internal.pageSize.getWidth() - 20,
        pdf.internal.pageSize.getHeight() - 10
      ); // x1, y1, x2, y2

      // Add more design elements
      // Example: Add a rectangle
      pdf.setFillColor(255, 255, 255); // White color
      pdf.rect(20, 110, pdf.internal.pageSize.getWidth() - 40, 80, 'F'); // x, y, width, height

      // Example: Add some text inside the rectangle
      pdf.setTextColor(33, 33, 33); // Dark gray
      pdf.text('Additional Information:', 30, 120);
      pdf.text(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        30,
        140
      );
      pdf.text(
        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        30,
        150
      );

      // Save the PDF
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
