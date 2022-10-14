import { Uuid } from "../Shared/valueObjects/Uuid.valueObject";
import { EventTitle } from "./valueObjects/EventTitle";
import { EventShortDescription } from "./valueObjects/EventShortDescription";
import { EventDate, EventDateProps } from "./valueObjects/EventDate";
import { EventLocation } from "./valueObjects/EventLocation";

export class Event {
  public readonly uuid: Uuid;
  public readonly title: EventTitle;
  public readonly shortDescription: EventShortDescription;
  public readonly date: EventDate;
  public readonly location: EventLocation;

  constructor(dto: EventDto) {
    const { uuid, title, date, location, shortDescription } = dto;
    this.uuid = new Uuid(uuid);
    this.title = new EventTitle(title);
    this.shortDescription = new EventShortDescription(shortDescription);
    this.date = new EventDate(date);
    this.location = new EventLocation(location);
  }
}

export interface EventDto {
  uuid: string;
  title: string;
  shortDescription: string;
  date: EventDateProps;
  location: string;
}
