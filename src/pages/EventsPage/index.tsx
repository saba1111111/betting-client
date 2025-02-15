import React, { useEffect, useState } from "react";
import { IEvent } from "../../types";
import api from "../../services/api";
import EventList from "../../components/EventList";
import "./index.scss";
import Header from "../../components/Header";

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [page] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await api.get<IEvent[]>(
          `/events?page=${page}&pageSize=${pageSize}`
        );
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [page]);

  if (loading) {
    return <div className="loading">Loading events...</div>;
  }

  return (
    <>
      <Header />
      <div className="events-container">
        <h1>Sports Events</h1>
        <EventList events={events} />
      </div>
    </>
  );
};

export default EventsPage;
