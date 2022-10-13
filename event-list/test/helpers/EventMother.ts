import { Event, EventDto } from "../../src/features/domain/Event/Event";
import { DomainDate } from "../../src/features/domain/Shared/valueObjects/DomainDate";

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
