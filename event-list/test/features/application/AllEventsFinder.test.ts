import {instance, mock, when} from "ts-mockito"
import {AllEventsFinder} from "../../../src/features/application/Event/AllEventsFinder";
import {EventRepository} from "../../../src/features/domain/Event/interface/EventRepository.interface";
import {Event} from "../../../src/features/domain/Event/Event";

describe('Find all events', ()=>{

    it("should return all events", async ()=> {
        const allEventFinder = buildAllEventFinder()

        const events = await allEventFinder.find()

        expect(events).toBeInstanceOf(Array<Event>)
    })


})

function buildAllEventFinder() {
    const eventRepository = mock<EventRepository>();
    when(eventRepository.findAll()).thenResolve([])

    return new AllEventsFinder(instance(eventRepository))
}