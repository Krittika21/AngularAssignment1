import { Injectable } from '@angular/core';
import { Employee } from './model/employee.model';

//import { EmpName } from './emp';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  employee : Employee[]=[];
  emp:Array<Employee>
  constructor() { }
  getEmployeeList()
  {
    return this.employee;
  }
  NewEmp(employee: Employee)
  {
    this.emp.push(employee);
  }
  //getEmployee ():Observable<EmpName[]>{
    //return this.http.get<EmpName[]>(this.employeeUrl)
    //.pipe(
     // tap(_ => this.log('fetched employees')),
    //  catchError(this.handdleError('getEmployess' , []))
    //  );
    
  }

