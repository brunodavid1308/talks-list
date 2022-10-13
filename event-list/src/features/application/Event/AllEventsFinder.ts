import {EventRepository} from "../../domain/Event/interface/EventRepository.interface";


export class AllEventsFinder{


    constructor(private eventRepository: EventRepository) {
    }


    public async find(): Promise<any[]>{
        return []
    }
}