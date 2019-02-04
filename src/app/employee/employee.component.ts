import { Component, OnInit } from '@angular/core';
//import { Employee } from './employee.model';

import { } from './employee-list.component';
import { Employee } from '../model/employee.model';
//import { EmpName } from '../emp';
@Component({
  //selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit 
{
  title = "Employee Form";
  qualifications: string[];
  experience: string[];
  check: string[];
  model = new Employee("","","",null,"","","","","","",[]);

  
  constructor() {}
  ngOnInit(): void 
  {
    
    this.qualifications = ['Graphic Designer', 'Web Designer', 'Android Developer'];
    this.experience = ['2-3years', 'Fresher', 'More than 5 years.'];
    this.check = ['C#','Java','C/C++','PHP','Python'];
  }
  onSubmit() {
    //this.EmpService(this.model);
    console.log(this.model);
    //this.router.navigate(['./employee-list']);
  }
  //add(firstName:string):void {
    //firstName = firstName.trim();
    //if(!firstName)
    //{
//      return;
    //}
    //this.EmpService.addEmployee({ firstName} as EmpName).subscribe(Employee=>{
    //  this.shared.push(Employee);
 //   }
    
}

