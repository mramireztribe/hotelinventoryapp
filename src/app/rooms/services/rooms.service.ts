import { APP_CONFIG, APP_SERVICE_CONFIG } from './../../AppConfig/appconfig.service';
import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import { AppConfig } from './../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

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

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log("this.config.apiEndpoint", this.config.apiEndpoint);
    console.log('Rooms Service Initinalized');
  }

  getRooms() {
    return this.roomList;
  }
}
