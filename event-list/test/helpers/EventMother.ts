


import {Event, EventDto} from '../../src/features/domain/Event/Event';

export class EventMother {
    public static random(params: Partial<EventDto>): Event {

        const defaultParams: EventDto = {
            uuid: 'uuid',
        }

        return new Event({
            ...defaultParams,
            ...params
        });
    }

    public static withUuid(uuid: string): Event {
        return EventMother.random({uuid});
    }
}