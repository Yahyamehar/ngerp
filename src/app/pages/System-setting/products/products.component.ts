import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  brands: any[] = [];
  newBrand: any = {};
  editedBrand: any = {};
  closeResult = '';

  constructor(private modalService: NgbModal) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // You can now handle the selected file here, such as uploading it or processing it
      console.log('Selected file:', file);
    }
  }

  openAddBrandModal(content: any) {
    this.newBrand = {};
    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
        // Add brand logic here
        this.brands.push({ ...this.newBrand, id: this.brands.length + 1 });
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  openEditBrandModal(content: any, brand: any) {
    this.editedBrand = { ...brand };
    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
        // Edit brand logic here
        const index = this.brands.findIndex(
          (b) => b.id === this.editedBrand.id
        );
        if (index !== -1) {
          this.brands[index] = { ...this.editedBrand };
        }
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  deleteBrand(brand: any) {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Employee!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        // If confirmed, delete the brand
        this.brands = this.brands.filter((b) => b.id !== brand.id);
        Swal.fire('Deleted!', 'Your Employee has been deleted.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your Employee is safe :)', 'error');
      }
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
