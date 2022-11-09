import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  userForm!: FormGroup;
  firstName!: string;
  email!: string;
  message!: string;
  isVisible = true;
  loading = false;
  hideForm = false;

  constructor(private formBuilder: FormBuilder, private contact: MailService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      'firstName': ['', [Validators.required, Validators.minLength(5)]],
      'email': ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      'message': ['', Validators.required]
    });

  }

  send(userForm: any): void {
    // const { firstName, email, message } = this.userForm.value;
    // alert(`Name: ${firstName}, Email: ${email}, Message: ${message} `);
    this.loading = true;
    this.hideForm = true;
    this.contact.PostMessage(userForm)
      .subscribe((response: any) => {
        this.isVisible = false;
        this.loading = false;
        
        // location.href = '/contacts'
        // console.log(response)
      }, (error: any) => {
        console.warn(error.responseText)
        console.log({ error })
      })
  }


}
