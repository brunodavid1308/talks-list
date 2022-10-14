import "reflect-metadata";
import { instance, mock, when } from "ts-mockito";
import { EventRepository } from "../../../../src/features/events/domain/Event/interface/EventRepository.interface";
import { AllEventsFinder } from "../../../../src/features/events/application/AllEventsFinder";

describe("Find all events", () => {
  it("should return all events", async () => {
    const allEventFinder = buildAllEventFinder();

    const events = await allEventFinder.find();

    expect(events).toBeInstanceOf(Array<Event>);
  });
});

function buildAllEventFinder() {
  const eventRepository = mock<EventRepository>();
  when(eventRepository.findAll()).thenResolve([]);

  return new AllEventsFinder(instance(eventRepository));
}
