import { Component, OnInit } from "@angular/core";
import { Flight } from "./flight.model";
import { FLIGHTS } from "./flights.mock";

@Component({
  selector: "app-flights",
  templateUrl: "./flights.component.html",
  styleUrls: ["./flights.component.css"]
})
export class FlightsComponent implements OnInit {
  flight: Flight = {
    id: 1,
    departureAirport: "KMSP",
    arrivalAirport: "KLAX"
  };
  flights: Flight[] = FLIGHTS;

  constructor() {}

  ngOnInit() {}

  selectedFlight: Flight;
  onSelect(flight: Flight) {
    this.selectedFlight = flight;
  }
}
