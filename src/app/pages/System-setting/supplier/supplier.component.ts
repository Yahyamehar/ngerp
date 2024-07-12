import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-supplier',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './supplier.component.html',
  styleUrl: './supplier.component.scss'
})
export class SupplierComponent {

  brands: any[] = [{ id: 1, name: 'Brand A', description: 'Description A', category: 'Category A', sub: 'Category 1'}];
  newBrand: any = {};
  editedBrand: any = {};
  closeResult = '';

  constructor(private modalService: NgbModal) {}

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
      text: 'You will not be able to recover this brand!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        // If confirmed, delete the brand
        this.brands = this.brands.filter((b) => b.id !== brand.id);
        Swal.fire('Deleted!', 'Your brand has been deleted.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your brand is safe :)', 'error');
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
