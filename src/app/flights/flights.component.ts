import { Component, OnInit } from "@angular/core";
import { Flight } from "./flight.model";
import { FlightService } from "./flight.service";

@Component({
  selector: "app-flights",
  templateUrl: "./flights.component.html",
  styleUrls: ["./flights.component.css"],
})
export class FlightsComponent implements OnInit {
  flights: Flight[];

  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.getFlights();
  }

  selectedFlight: Flight;
  onSelect(flight: Flight) {
    this.selectedFlight = flight;
  }

  getFlights(): void {
    this.flightService
      .getFlights()
      .subscribe(flights => (this.flights = flights));
  }
}
