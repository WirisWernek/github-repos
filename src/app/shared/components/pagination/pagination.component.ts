import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { PaginatorModel } from 'src/app/models/Paginator.model';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements AfterViewInit {
    @Output() emmiter = new EventEmitter<PaginatorModel>();
    @Input() reposLength!: number;

    paginator: PaginatorModel;
    totalPage: number = 1;

    de: number;
    ate: number;

    constructor() {
        this.paginator = new PaginatorModel();
        this.de = this.paginator.page;
        this.ate = this.paginator.perPage;
    }

    ngAfterViewInit(): void {
        this.calculatePages();
    }

    calculatePages() {
        this.totalPage = Math.ceil(this.reposLength / this.paginator.perPage);
        this.calcularItens();
    }

    next() {
        this.paginator.page = this.paginator.page + 1;
        this.emmiter.emit(this.paginator);
        this.calculatePages();
    }

    prev() {
        this.paginator.page = this.paginator.page - 1;
        this.emmiter.emit(this.paginator);
        this.calculatePages();
    }

    calcularItens() {
        let count = this.paginator.page * this.paginator.perPage - this.paginator.perPage;
        let delimiter = count + this.paginator.perPage;

        if (delimiter <= this.reposLength) {
            this.de = count + 1;
            this.ate = delimiter;
        } else if (this.reposLength == 0) {
            setTimeout(() => this.calcularItens(), 5000);
        } else {
            this.de = count + 1;
            this.ate = this.reposLength;
        }
    }
}
