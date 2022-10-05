import { LoggerService } from './logger.service';
import { HeaderComponent } from './header/header.component';
import { AfterViewInit, Component, ElementRef, OnInit, Optional, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'hotelinventoryapp';
  role = 'Admin';

  @ViewChild('name', { static: true }) name!: ElementRef;

  constructor(@Optional() private loggerService: LoggerService) { }

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.onInit()');
    this.name.nativeElement.innerText = "Hilton Hotel";
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
