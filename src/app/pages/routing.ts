import { Routes } from '@angular/router';
import { EmployeeComponent } from './Employee/employee.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { PayrollComponent } from './payroll/payroll.component';
import { CreateOrderComponent } from './companystock/create-order/create-order.component';
import { OrderingLevelComponent } from './companystock/ordering-level/ordering-level.component';
import { CreateinventoryorderComponent } from './inventory/createinventoryorder/createinventoryorder.component';
import { CreateinventoryorderingLevelComponent } from './inventory/createinventoryordering-level/createinventoryordering-level.component';
import { InventoryreturnComponent } from './inventory/inventoryreturn/inventoryreturn.component';
import { ApprovedreturnComponent } from './saledetail/approvedreturn/approvedreturn.component';
import { DispatachedorderComponent } from './saledetail/dispatachedorder/dispatachedorder.component';
import { PendingorderComponent } from './saledetail/pendingorder/pendingorder.component';
import { PointofsaleComponent } from './saledetail/pointofsale/pointofsale.component';
import { SaleentryComponent } from './saledetail/saleentry/saleentry.component';
import { SalereturnComponent } from './saledetail/salereturn/salereturn.component';
import { TransferstockComponent } from './saledetail/transferstock/transferstock.component';
import { ViewtransferedComponent } from './saledetail/viewtransfered/viewtransfered.component';
import { BranchesComponent } from './System-setting/branches/branches.component';
import { BrandsComponent } from './System-setting/brands/brands.component';
import { CategoriesComponent } from './System-setting/categories/categories.component';
import { DevicesComponent } from './System-setting/devices/devices.component';
import { GodamComponent } from './System-setting/godam/godam.component';
import { ProductsComponent } from './System-setting/products/products.component';
import { SupplierComponent } from './System-setting/supplier/supplier.component';
import { UserRightsComponent } from './System-setting/user-rights/user-rights.component';
import { UsersComponent } from './System-setting/users/users.component';
import { SubCategoriesComponent } from './System-setting/sub-categories/sub-categories.component';
import { UserLoginComponent } from './report/user-login/user-login.component';
import { UserSaleReportComponent } from './report/user-sale-report/user-sale-report.component';
import { BranchSaleReportComponent } from './report/branch-sale-report/branch-sale-report.component';
import { CompanyOrderReportComponent } from './report/company-order-report/company-order-report.component';
import { BranchOrderReportComponent } from './report/branch-order-report/branch-order-report.component';
import { CompanyStockReportComponent } from './report/company-stock-report/company-stock-report.component';
import { BranchStockReportComponent } from './report/branch-stock-report/branch-stock-report.component';
import { BranchReturnReportComponent } from './report/branch-return-report/branch-return-report.component';
import { SaleReturnReportComponent } from './report/sale-return-report/sale-return-report.component';
import { ProfileComponent } from './profile/profile.component';

const Routing: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    title: 'Employee'
  },
  {
    path: 'attendence',
    component: AttendenceComponent,
    title: 'Attendence'
  },
  {
    path: 'payroll',
    component: PayrollComponent,
    title: 'Payroll'
  },
  {
    path: 'companystock/create-order',
    component: CreateOrderComponent,
    title: 'Create Order'
  },
  {
    path: 'companystock/ordering-level',
    component: OrderingLevelComponent,
    title: 'Ordering Level'
  },
  {
    path: 'inventory/createinventory-order',
    component: CreateinventoryorderComponent,
    title: 'Create Inventory Order'
  },
  {
    path: 'inventory/createinventory-ordering-level',
    component: CreateinventoryorderingLevelComponent,
    title: 'Create Inventory Level'
  },
  {
    path: 'inventory/inventory-Return',
    component: InventoryreturnComponent,
    title: 'Inventory Return'
  },
  {
    path: 'saledetail/approved-return',
    component: ApprovedreturnComponent,
    title: 'Approved Return'
  },
  {
   path: 'saledetail/dispatched-return',
   component: DispatachedorderComponent,
   title: 'Dispatched Order'
  },
  {
    path: 'saledetail/pending-order',
    component: PendingorderComponent,
    title: 'Pending Order'
  },
  {
   path: 'saledetail/pointof-sale',
   component: PointofsaleComponent,
   title: 'Point of Sale'
  },
  {
   path: 'saledetail/sale-entry',
   component: SaleentryComponent,
   title: 'Sale Entry'
  },
  {
   path: 'saledetail/sale-return',
   component: SalereturnComponent,
   title: 'Sale Return'
  },
  {
    path: 'saledetail/transfer-stock',
    component: TransferstockComponent,
    title: 'Transfer Stock'
  },
  {
    path: 'saledetail/view-transfered',
    component: ViewtransferedComponent,
    title: 'View-transfered'
  },
  {
   path: 'system-setting/branches',
   component: BranchesComponent,
   title: 'Branches'
  },
  {
    path: 'system-setting/brands',
    component: BrandsComponent,
    title: 'Brands'
  },
  {
    path: 'system-setting/categories',
    component: CategoriesComponent,
    title: 'Categories'
  },
  {
    path: 'system-setting/devices',
    component: DevicesComponent,
    title: 'Devices'
  },
  {
    path: 'system-setting/godam',
    component: GodamComponent,
    title: 'Godam'
  },
  {
    path: 'system-setting/products',
    component: ProductsComponent,
    title: 'Products'
  },
  {
    path: 'system-setting/supplier',
    component: SupplierComponent,
    title: 'Suppler'
  },
  {
   path: 'system-setting/user-rights',
   component: UserRightsComponent,
   title: 'User Rights'
  },
  {
    path: 'system-setting/users',
    component: UsersComponent,
    title: 'Users'
  },
  {
    path: 'system-setting/sub-categories',
    component: SubCategoriesComponent,
    title: 'SubCategories'
  },
  {
    path: 'report/user-login',
    component: UserLoginComponent,
    title: 'User Login'
  },
  {
    path: 'report/user-sale-report',
    component: UserSaleReportComponent,
    title: 'User-sale-report'
  },
  {
    path: 'report/branch-sale-report',
    component: BranchSaleReportComponent,
    title: 'branch-sale-report'
  },
  {
    path: 'report/company-order-report',
    component: CompanyOrderReportComponent,
    title: 'company-order-report'
  },
  {
    path: 'report/branch-order-report',
    component: BranchOrderReportComponent,
    title: 'branch-order-report'
  },
  {
    path: 'report/company-stock-report',
    component: CompanyStockReportComponent,
    title: 'Company-Stock-report'
  },
  {
    path: 'report/Branch-stock-report',
    component: BranchStockReportComponent,
    title: 'Branch-Stock-report'
  },
  {
    path: 'report/Branch-return-report',
    component: BranchReturnReportComponent,
    title: 'Branch-return-report'
  },
  {
    path: 'report/Sale-return-report',
    component: SaleReturnReportComponent,
    title: 'Sale-return-report'
  },
  {
    path: 'pages/profile',
   component: ProfileComponent,
    title: 'Profile'
  },
  {
    path: 'crafted/pages/profile',
    loadChildren: () => import('../modules/profile/profile.module').then((m) => m.ProfileModule),
    // data: { layout: 'light-sidebar' },
  },
  {
    path: 'crafted/account',
    loadChildren: () => import('../modules/account/account.module').then((m) => m.AccountModule),
    // data: { layout: 'dark-header' },
  },
  {
    path: 'crafted/pages/wizards',
    loadChildren: () => import('../modules/wizards/wizards.module').then((m) => m.WizardsModule),
    // data: { layout: 'light-header' },
  },
  {
    path: 'crafted/widgets',
    loadChildren: () => import('../modules/widgets-examples/widgets-examples.module').then((m) => m.WidgetsExamplesModule),
    // data: { layout: 'light-header' },
  },
  {
    path: 'apps/chat',
    loadChildren: () => import('../modules/apps/chat/chat.module').then((m) => m.ChatModule),
    // data: { layout: 'light-sidebar' },
  },
  {
    path: 'apps/users',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'apps/roles',
    loadChildren: () => import('./role/role.module').then((m) => m.RoleModule),
  },
  {
    path: 'apps/permissions',
    loadChildren: () => import('./permission/permission.module').then((m) => m.PermissionModule),
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
