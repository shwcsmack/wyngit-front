import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MessageService } from "../messages/message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Flight } from "./flight.model";

@Injectable({
  providedIn: "root",
})
export class FlightService {
  private flightsUrl = "http://localhost:3000/flights";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`FlightService: ${message}`);
  }

  getFlights(): Observable<Flight[]> {
    // TODO: send the message _after_ fetching the heroes
    this.log("got flights");
    return this.http.get<Flight[]>(this.flightsUrl);
  }
}
