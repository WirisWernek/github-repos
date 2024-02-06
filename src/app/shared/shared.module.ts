import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginationComponent } from './components/pagination/pagination.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
   declarations: [SpinnerComponent, PaginationComponent],
   imports: [CommonModule],
   exports: [SpinnerComponent, PaginationComponent],
})
export class SharedModule {}
