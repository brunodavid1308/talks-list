import {Event} from "../Event"

export abstract class EventRepository{
    public abstract findAll(): Promise<Event[]>
}