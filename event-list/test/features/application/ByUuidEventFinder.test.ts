/**
 * CHECKING DRIVEN DEVELOPMENT
 *
 *
 * Should be instaced whith repository
 *
 * Should be able to find an event by uuid
 *
 * Should be equal to the event found
 *
 *
 */
import "reflect-metadata";
import { instance, mock, when } from "ts-mockito";
import { EventRepository } from "../../../src/features/domain/Event/interface/EventRepository.interface";
import { ByUuidEventFinder } from "../../../src/features/application/Event/ByUuidEventFinder";
import { EventMother } from "../../helpers/EventMother";

const validUuid = "uuid";

describe("Find an event by uuid", () => {
  it("should be able to find an event by uuid", async () => {
    const byUuidEventFinder = setup();

    const event = await byUuidEventFinder.find(validUuid);

    expect(event.uuid.value).toEqual(validUuid);
  });
});

const setup = () => {
  const eventRepository = mock<EventRepository>();

  when(eventRepository.findByUuid(validUuid)).thenResolve(
    EventMother.withUuid(validUuid)
  );

  return new ByUuidEventFinder(instance(eventRepository));
};
