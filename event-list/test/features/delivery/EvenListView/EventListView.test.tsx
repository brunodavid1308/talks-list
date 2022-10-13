import "reflect-metadata";
import { render, screen } from "@testing-library/react";
import { EventListView } from "../../../../src/features/delivery/EventListView/EventListView";
import { EventMother } from "../../../helpers/EventMother";
import { instance, mock, when } from "ts-mockito";
import { EventRepository } from "../../../../src/features/domain/Event/interface/EventRepository.interface";
import { container } from "tsyringe";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

const events = EventMother.collection(1);

describe("EventListView", () => {
  beforeAll(() => {
    setup();
  });

  const assertTextInDocument = (text: string) => {
    expect(screen.getByText(text)).toBeInTheDocument();
  };

  it("should render the event information", async () => {
    await act(async () => {
      render(<EventListView />);
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    events.forEach((event) => {
      assertTextInDocument(event.title.value);
      assertTextInDocument(event.shortDescription.value);
      assertTextInDocument(event.date.getInit().toYYMMDD());
      assertTextInDocument(event.location.getCity());
    });
  });
});

const setup = () => {
  const mockedEventRepository = mock<EventRepository>();
  when(mockedEventRepository.findAll()).thenResolve(events);

  container.register("EventRepository", {
    useValue: instance(mockedEventRepository),
  });
};
