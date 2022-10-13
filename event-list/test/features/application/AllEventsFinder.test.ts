import {mock} from "ts-mockito"
import {AllEventsFinder} from "../../../src/features/application/Event/AllEventsFinder";
import {EventRepository} from "../../../src/features/domain/Event/interface/EventRepository.interface";
import {Event} from "../../../src/features/domain/Event/Event";

/**
 *  checking driven development
 *
 *
 *
 *
 *  const allEventsFinder = AllEventsFinder(eventsRepository); [V]
 *  Debería devolver un array
 *  Debería devolver un array de eventos
 *
 *
 */


describe('Find all events', ()=>{

    it("should return all events", async ()=> {
        const allEventFinder = buildAllEventFinder()

        const events = await allEventFinder.find()

        expect(events).toBeInstanceOf(Array<Event>)
    })


})

function buildAllEventFinder() {
    const eventRepository = mock<EventRepository>();

    return new AllEventsFinder(eventRepository)
}