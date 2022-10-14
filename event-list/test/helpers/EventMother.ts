import { DomainDate } from "../../src/features/events/domain/Shared/valueObjects/DomainDate";
import { Event, EventDto } from "../../src/features/events/domain/Event/Event";

export class EventMother {
  public static random(params?: Partial<EventDto>): Event {
    const defaultParams: EventDto = {
      uuid: "uuid",
      title: "title",
      shortDescription: "shortDescription",
      date: {
        init: new DomainDate(new Date()),
        end: new DomainDate(new Date()),
      },
      location: "location",
    };

    return new Event({
      ...defaultParams,
      ...params,
    });
  }

  public static withUuid(uuid: string): Event {
    return EventMother.random({ uuid });
  }

  public static collection(
    length: number = 3,
    params?: Partial<EventDto>
  ): Event[] {
    return [...Array(length)].map(() => EventMother.random(params));
  }
}
