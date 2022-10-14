import { EventRepository } from "../domain/Event/interface/EventRepository.interface";
import { Event } from "../domain/Event/Event";
import { inject, injectable } from "tsyringe";

@injectable()
export class AllEventsFinder {
  constructor(
    @inject("EventRepository") private eventRepository: EventRepository
  ) {}

  public async find(): Promise<Event[]> {
    return this.eventRepository.findAll();
  }
}
