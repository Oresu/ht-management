import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { empVM } from 'src/Models/employee';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    let employees: empVM[] = [
      { id: 1, department: 'Cuentas', empName: 'Nadia', mobile: '123456', gender: 'Mujer', joinDate: '24/05/2013', email: 'nadia@gmail.com', salary: 1200, password: 'nadiuchi', empStatus: true },
      { id: 2, department: 'Encargado', empName: 'Javier', mobile: '123456', gender: 'Hombre', joinDate: '24/05/2013', email: 'nadia@gmail.com', salary: 1200, password: 'nadiuchi', empStatus: true },
      { id: 3, department: 'Cuentas', empName: 'Mireia', mobile: '123456', gender: 'Mujer', joinDate: '24/05/2013', email: 'nadia@gmail.com', salary: 1200, password: 'nadiuchi', empStatus: true },
    ];
    return { employees }
  }
}
