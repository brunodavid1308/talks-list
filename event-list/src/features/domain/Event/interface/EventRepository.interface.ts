import { Event } from "../Event"

export abstract class EventRepository {
    public abstract findAll(): Promise<Event[]>;
    public abstract findByUuid(uuid: string): Promise<Event>;
}