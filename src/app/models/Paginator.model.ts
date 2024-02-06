export class PaginatorModel{
	perPage: number;
	page: number;

	constructor(){
		this.perPage = 16;
		this.page = 1;
	}
}