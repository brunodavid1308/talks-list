import { Uuid } from "../Shared/valueObjects/Uuid.valueObject";
import { EventTitle } from "./valueObjects/EventTitle";

export class Event {
  public readonly uuid: Uuid;
  public readonly title: EventTitle;

  constructor(dto: EventDto) {
    const { uuid, title } = dto;
    this.uuid = new Uuid(uuid);
    this.title = new EventTitle(title);
  }
}

export interface EventDto {
  uuid: string;
  title: string;
}
