import {Event} from "../domain/Event/Event";
import { EventRepository } from "../domain/Event/interface/EventRepository.interface";


export class ByUuidEventFinder {
    constructor(private eventRepository: EventRepository) {
    }

    public async find(uuid: string): Promise<Event> {
        return this.eventRepository.findByUuid(uuid)
    }
}
