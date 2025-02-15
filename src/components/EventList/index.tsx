import React, { useState } from "react";
import { IEvent } from "../../types";
import EventCard from "../EventCard";
import BetModal from "../BetModal";
import "./index.scss";

interface EventListProps {
  events: IEvent[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState<IEvent | null>(null);

  const handlePlaceBet = (event: IEvent) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onPlaceBet={handlePlaceBet} />
        ))}
      </div>
      {selectedEvent && <BetModal event={selectedEvent} onClose={closeModal} />}
    </>
  );
};

export default EventList;
