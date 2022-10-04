import { HeaderComponent } from './../header/header.component';
import { AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  title = "Rooms List";

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  selectedRoom!: RoomList;

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
      price: 500,
      photos: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.5
    },
    {
      roomNumber: 2,
      roomType: 'Delux Room',
      amenities: 'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
      price: 1000,
      photos: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 3.45654
    },
    {
      roomNumber: 3,
      roomType: 'Private Suite',
      amenities: 'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
      price: 15000,
      photos: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 2.6
    }
  ];

  @ViewChild(HeaderComponent, { static: true }) headerComponent!: HeaderComponent;

  constructor() { }

  ngOnInit(): void {
    console.log(this.headerComponent.title);
    this.roomList = [
      {
        roomNumber: 1,
        roomType: 'Deluxe Room',
        amenities: 'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
        price: 500,
        photos: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('12-Nov-2021'),
        rating: 4.5
      },
      {
        roomNumber: 2,
        roomType: 'Delux Room',
        amenities: 'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
        price: 1000,
        photos: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('12-Nov-2021'),
        rating: 3.45654
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'Air Conditioner, Free WiFi, TV, Bathroom, Kitchen',
        price: 15000,
        photos: 'https://www.valleyviewcasino.com/wp-content/uploads/Hero-Deluxe-Room-final.jpg',
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('12-Nov-2021'),
        rating: 2.6
      }
    ];
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterViewInit(): void {
    console.log('headerComponent', this.headerComponent);
  }

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