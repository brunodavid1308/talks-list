import React, { useEffect } from "react";
import { container } from "tsyringe";
import { AllEventsFinder } from "../../application/Event/AllEventsFinder";
import { Event } from "../../domain/Event/Event";

export const EventListView = () => {
  const [events, setEvents] = React.useState<Event[]>([]);

  useEffect(() => {
    async function onLoad() {
      const allEventFinder = container.resolve(AllEventsFinder);
      const events = await allEventFinder.find();
      setEvents(events);
    }

    onLoad();
  }, []);

  return (
    <div>
      {events.map((event) => {
        return (
          <div key={event.uuid.value}>
            <span>{event.title.value}</span>
            <span>{event.shortDescription.value}</span>
            <span>{event.date.getInit().toYYMMDD()}</span>
            <span>{event.location.getCity()}</span>
          </div>
        );
      })}
    </div>
  );
};
