import type { NextPage } from "next";
import { EventListView } from "../features/events/delivery/EventListView/EventListView";

const Home: NextPage = () => {
  return <EventListView />;
};

export default Home;
