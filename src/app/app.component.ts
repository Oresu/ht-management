import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ht-management';
  employeeForm: FormGroup = new FormGroup({});

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.setEmpForm();
  }

  setEmpForm() {
    this.employeeForm = this._fb.group({
      id: [0],
      department: ['', Validators.required],
      empName: ['', Validators.required],
      mobile: ['', Validators.required],
      gender: ['', Validators.required],
      joinDate: ['', Validators.required],
      email: ['', Validators.required],
      salary: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required],
      empStatus: [false, Validators.requiredTrue],
    })
  }

  formSubmit(){
    console.log(this.employeeForm.value);
  }

  get f(){
    return this.employeeForm.controls;
  }

  resetBtn(){
    this.employeeForm.reset();
  }

  cancelBtn(){
    this.employeeForm.reset();
  }
}
