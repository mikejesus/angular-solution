import { Component, OnInit, Input } from '@angular/core';
import { IAddress } from '../core/IAddress.interface';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() address!: IAddress;
  constructor() { }

  ngOnInit(): void {
  }

}
