import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { localStorageToken } from './localstorage.token';
import { LoggerService } from './logger.service';
import { HeaderComponent } from './header/header.component';
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

  constructor(@Optional() private loggerService: LoggerService, @Inject(localStorageToken) private localStorage: Storage) { }

  ngOnInit(): void {
    this.loggerService?.log('AppComponent.onInit()');
    this.name.nativeElement.innerText = "Hilton Hotel";

    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  // @ViewChild('user', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  //   componentRef.instance.numberOfRooms = 50;
  // }
}
