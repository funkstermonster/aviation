import { Component, OnInit } from '@angular/core';
import { Flight, ResponseObject } from 'src/app/model/flight';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss'],
})
export class FlightListComponent implements OnInit {
  flights?: Flight[];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.displayFlights();
  }

  displayFlights() {
    this.httpService.getflights().subscribe((data: ResponseObject) => {
      this.flights = data.response;
      console.log(this.flights)
    });
  }
}
