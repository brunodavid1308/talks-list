import {Uuid} from "../Shared/valueObjects/Uuid.valueObject";


export class Event {
    public  readonly uuid: Uuid;

    constructor(dto: EventDto) {
        const {uuid} = dto;
        this.uuid = new Uuid(uuid);
    }



}

export interface EventDto{
    uuid: string;
}