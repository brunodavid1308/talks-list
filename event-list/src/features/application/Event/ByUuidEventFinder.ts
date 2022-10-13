import {EventRepository} from "../../domain/Event/interface/EventRepository.interface";
import {Event} from "../../domain/Event/Event";


export class ByUuidEventFinder {
    constructor(private eventRepository: EventRepository) {
    }

    public async find(uuid: string): Promise<Event> {
        return this.eventRepository.findByUuid(uuid)
    }
}
