import {mock} from "ts-mockito"
import {AllEventsFinder} from "../../../src/features/application/Event/AllEventsFinder";
import {EventRepository} from "../../../src/features/domain/Event/interface/EventRepository.interface";

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

    it('should return an array',  async ()=>  {
        const allEventFinder = buildAllEventFinder()

        const result = await allEventFinder.find()

        expect(result).toBeInstanceOf(Array)
    });


})

function buildAllEventFinder() {
    const eventRepository = mock<EventRepository>();

    return new AllEventsFinder(eventRepository)
}