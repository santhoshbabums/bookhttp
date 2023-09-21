import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  userForm?: any;
  
  showDetails?:any=[];
  books:any = [];
  constructor(private __httpServive : ApiService) {}

  ngOnInit(): void {
    // Initialize the form with default values and validation rules
    this.userForm = new FormGroup({
      id: new FormControl ('',Validators.required),
      bookname:new FormControl ('',Validators.required),
      author:new FormControl ('',Validators.required)
    });
  }

  onSubmit() {
    // Handle form submission here
    if (this.userForm?.valid) {
      console.log('Form submitted with data:', this.userForm.value);

      this.books.push({
        id:this.userForm.value.id,
        bookName:this.userForm.value.bookname,
        author:this.userForm.value.author
      })

     this.__httpServive.bookStore(this.books)
     .subscribe( sub =>{
      console.log(sub)
     },
     error =>{
      console.log(error)
     })
     this.userForm.reset()
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }


  getBookDetails(){
    this.__httpServive.getBookDetails()
    .subscribe( (sub:any) =>{
      console.log('Book Details from Data base',sub)
      this.showDetails = sub;
      console.log('node key',this.showDetails)
    })
  }
}
