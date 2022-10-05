import { RoomsService } from './../rooms/services/rooms.service';
import { AfterContentInit, Component, OnInit, Self } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  // providers: [RoomsService]
})
export class EmployeeComponent implements OnInit, AfterContentInit {

  empName: string = 'John';

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {

  }

}
