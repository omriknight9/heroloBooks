import { Component, Inject } from '@angular/core';
import { BooksService} from '../../services/books.service';
import { Books } from '../../models/Books';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { MatDialog, MatDialogConfig } from "@angular/material";


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent {

	book: Books;

  	constructor(private booksService: BooksService, private dialog: MatDialog) {
  		booksService.getAllBooks().subscribe(book => {console.log(book); this.book = book});
  	}

  	openDialog(e) {

  	    const dialogConfig = new MatDialogConfig();
      	for (var i = 0; i < this.book.items.length; ++i) {
	  		dialogConfig.data = {
	  			title: this.book.items[i].volumeInfo.title,
	  			authors: this.book.items[i].volumeInfo.authors,
	  			publishedDate: this.book.items[i].volumeInfo.publishedDate
	  		};
  	    		console.log(dialogConfig.data)
      	}
  	    dialogConfig.autoFocus = true;

  	    this.dialog.open(EditDialogComponent, dialogConfig);
  	}

}
// export class BookListComponent {

//   booksArr: Books;

//   newArr = [];

//     constructor(private booksService: BooksService, private dialog: MatDialog) {
//       this.booksService.getAllBooks().subscribe(books => {console.log(books); this.booksArr.items = books});
//       // BooksService.getAllBooks().subscribe(book => {console.log(book.items[0].volumeInfo.title); this.books = book});
//     }

//     openDialog(e) {

//         const dialogConfig = new MatDialogConfig();

//         for (var i = 0; i < this.book.items.length; ++i) {
//         dialogConfig.data = {
//           title: this.book.items[i].volumeInfo.title,
//           authors: this.book.items[i].volumeInfo.authors,
//           publishedDate: this.book.items[i].volumeInfo.publishedDate
//         };
//             console.log(dialogConfig.data)
//             this.newArr.push(dialogConfig.data);
//             console.log(this.newArr);
//         }
//         dialogConfig.autoFocus = true;

//         this.dialog.open(EditDialogComponent, dialogConfig);
//     }

// }

