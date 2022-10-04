import { AfterContentInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit, AfterContentInit {

  empName: string = 'John';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {

  }

}
