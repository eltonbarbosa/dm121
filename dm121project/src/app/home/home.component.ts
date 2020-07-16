import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs';

import { AngularFireDatabase } from '@angular/fire/database'
>>>>>>> fbab89d027d67d419cd520d603325aa91f2a7207

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsLetterForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
   this.newsLetterForm = this.fb.group({
    email: ['', Validators.email]
   });
  }

  onSubmit() {}

}
