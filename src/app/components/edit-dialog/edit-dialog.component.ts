import { Component, OnInit, Inject  } from '@angular/core';
import { BooksService} from '../../services/books.service';
import { Books } from '../../models/Books';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

	// books: Book;

  	constructor(private BooksService: BooksService, public dialogRef: MatDialogRef<EditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
  		// BooksService.getAllBooks().subscribe(books => {console.log(books); this.books = books});
  	}

	ngOnInit() {
		console.log(this.data.title);
	}

	close() {
	  	this.dialogRef.close();
	}


}
