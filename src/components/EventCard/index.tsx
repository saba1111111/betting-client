import React from "react";
import { IEvent } from "../../types";
import "./index.scss";

interface EventCardProps {
  event: IEvent;
  onPlaceBet: (event: IEvent) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onPlaceBet }) => {
  return (
    <div className="event-card">
      <h2>{event.event_name}</h2>
      <p>Odds: {event.odds}</p>
      <button onClick={() => onPlaceBet(event)} className="btn-secondary">
        Place Bet
      </button>
    </div>
  );
};

export default EventCard;
