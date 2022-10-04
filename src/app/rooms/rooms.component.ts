import { RoomsService } from './services/rooms.service';
import { HeaderComponent } from './../header/header.component';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  title = "Rooms List";

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [];

  selectedRoom!: RoomList;

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    // console.log(this.headerComponent.title);
    this.roomList = this.roomsService.getRooms();
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Rooms View';

    console.log("this.headerChildrenComponent", this.headerChildrenComponent.last.title = "Last Title");
  }

  ngAfterViewChecked(): void { }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Room List";
  }

  addRoom(): void {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2022'),
      rating: 4.5
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room]; // takes original room list: adds new room to array
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log('room', room);
  }
}