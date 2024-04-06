import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar'; // Import MatSnackBar

@Component({
    selector: 'app-add-book',
    templateUrl: './add-book.component.html',
    styleUrls: ['./add-book.component.scss']
})
 
export class AddBookComponent implements OnInit {
 
    bookForm: FormGroup;
   
    constructor(
        public formBuilder: FormBuilder,
        private router: Router,
        private ngZone: NgZone,
        private crudService: CrudService,
        private snackBar: MatSnackBar // Inject MatSnackBar
    ) { 
        this.bookForm = this.formBuilder.group({
            title: [''],
            price: [''],
            description: [''],
            book_type: [''],
            durationInSeconds: [5] // Default value for duration
        });
    }
 
    ngOnInit() { }
 
    onSubmit(): any {
        this.crudService.AddBook(this.bookForm.value)
            .subscribe(() => {
                console.log('Data added successfully!');
                this.openSnackBar('Book Added'); // Call openSnackBar with success message
                this.ngZone.run(() => this.router.navigateByUrl('/books-list'));
            }, (err) => {
                console.log(err);
            });
    }

    // Function to open snack bar
    openSnackBar(message: string) {
        this.snackBar.open(message, 'Close', {
            duration: this.bookForm.value.durationInSeconds * 1000 // Duration based on user input
        });
    }
}
