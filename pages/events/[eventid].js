import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from '../../components/ui/error-alert';

export default function EvenDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventid;
  const event = getEventById(eventId);

  if (!event) {
    return (
    <ErrorAlert>
    <p>No Event Found!</p>
    </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}
