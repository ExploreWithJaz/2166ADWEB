import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  Books: any = [];
  pagedBooks: any = [];
  pageSize = 5; // Default number of items per page
  pageSizeOptions: number[] = [5, 10, 25, 100]; // Options for items per page

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetBooks().subscribe(res => {
      console.log(res)
      this.Books = res;
      this.updatePageData(0); // Load first page initially
    });    
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize; // Update pageSize when user changes the option
    const startIndex = event.pageIndex * event.pageSize;
    this.updatePageData(startIndex);
  }

  updatePageData(startIndex: number) {
    this.pagedBooks = this.Books.slice(startIndex, startIndex + this.pageSize);
  }

  delete(id: any, i: any) {
    console.log(id);
    if (window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteBook(id).subscribe((res) => {
        this.Books.splice(i, 1);
        this.updatePageData(0); // Refresh the page data after deletion
      })
    }
  }
}
