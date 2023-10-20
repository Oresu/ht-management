import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './services/employee.service';
import { empVM } from 'src/Models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ht-management';
  employeeForm: FormGroup = new FormGroup({});
  employees: empVM[] = [];

  constructor(private _fb: FormBuilder, private _empService: EmployeeService) { }

  ngOnInit() {
    this.setEmpForm();
    this.allEmployees();
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

  formSubmit() {
    console.log(this.employeeForm.value);
  }

  get f() {
    return this.employeeForm.controls;
  }

  resetBtn() {
    this.employeeForm.reset();
  }

  cancelBtn() {
    this.employeeForm.reset();
  }

  allEmployees() {
    this._empService.getAllEmployees().subscribe((response: empVM[]) => {
      this.employees = response;
    });
  }
}
