import {EventRepository} from "../../domain/Event/interface/EventRepository.interface";
import {Event} from "../../domain/Event/Event";

export class AllEventsFinder{


    constructor(private eventRepository: EventRepository) {
    }


    public async find(): Promise<Event[]>{
        return this.eventRepository.findAll()
    }
}