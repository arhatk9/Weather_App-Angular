import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})

export class InputDataComponent {

  city: string;

  @Output() cityEvent: EventEmitter<string> = new EventEmitter<string>();


  constructor(private http: HttpClient) {
    this.city = '';

  }

  getData() {
    this.cityEvent.emit(this.city);
  }
}
