import { Component, OnInit } from '@angular/core';
import { EmpName } from '../emp';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  pageTitle: string = 'Employee List';
  Name: Array<EmpName>;



  constructor(private _share: SharedService) { 
   this.Name = new Array<EmpName>();

  }

  ngOnInit() {
    //this.Name = this._share.getEmployeeList();
    console.log(this.Name);
  }
  remove(id : any, name:any){
    confirm("Are you sure?");
    this.Name.splice(id, name);
  }

}
