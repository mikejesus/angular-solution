import { Component, OnInit } from '@angular/core';
import { IAddress } from '../core/IAddress.interface';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  addressList!: IAddress[];
  constructor() { }

  ngOnInit(): void {
    this.addressList= [
      {
        street: "Third Avenue",
        city: "New York",
        zipCode: "10001"
      },
      {
        street: "Constitution Avenue",
        city: "Washington",
        zipCode: "20001"
      }
    ]
  }

}
