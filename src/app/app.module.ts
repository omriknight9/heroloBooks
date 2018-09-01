import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './components/app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatInputModule, 
  MatCardModule, 
  MatButtonModule, 
  MatDialogModule,
  // MatDialogRef
  // MatToolbarModule,
  // MatExpansionModule
} from '@angular/material';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    EditDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    // MatDialogRef
    // MatToolbarModule,
    // MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent]
})
export class AppModule { }
