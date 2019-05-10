import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { MessageService } from "../messages/message.service";

import { Flight } from "./flight.model";
import { FLIGHTS } from "./flights.mock";

@Injectable({
  providedIn: "root",
})
export class FlightService {
  constructor(private messageService: MessageService) {}

  getFlights(): Observable<Flight[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(FLIGHTS);
  }
}
