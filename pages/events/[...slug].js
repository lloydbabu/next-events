import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/events-list";
import { getFilteredEvents } from "../../helpers/api-utils";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

export default function FilteredEventsPage(props) {
  // const router = useRouter();
  // const filterData = router.query.slug;

  // if (!filterData) {
  //   return <p className="center">Loading...</p>;
  // }

  // const filteredYear = filterData[0];
  // const filteredDate = filterData[1];
  // const numYear = +filteredYear;
  // const numMonth = +filteredDate;

  if (
    props.hasError
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter data! Please adjust your filters!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const filteredEvents = props.events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(props.date.year, props.date.month - 1);
  console.log(date);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
const { params } = context;

const filterData = params.slug;

const filteredYear = filterData[0];
  const filteredDate = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredDate;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return {
      props: { hasError: true}
      
      }
      // notFound: true
    };
  

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  console.log(numYear, numMonth);

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth
      }
    }
  };

 
}
