import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from '../../components/event-list'
import ResultTitle from '../../components/results-title'
import { Fragment } from "react/cjs/react.production.min";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/error-alert";

const EventFilter = () => {
  const router = useRouter();
  const filterData = router.query.eventfilter;

  if (!filterData) {
    return <Fragment>
      <ErrorAlert>
        <p className="center">...Loading</p>
      </ErrorAlert>
    </Fragment>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <Fragment>
      <ErrorAlert>
        <p>Invalid filter. please adjust correct values</p>
      </ErrorAlert>
      <div className='center'>
        <Button link="/events">Show All Events</Button>
      </div>
    </Fragment>
  }

  const filterEvents = getFilteredEvents({
    year: numYear,
    month: numMonth
  })

  if(!filterEvents || filterEvents.length=== 0){
    return <Fragment>
      <ErrorAlert>
        <p>No event found for the chosen filter</p>
      </ErrorAlert>
      <div className='center'>
        <Button link="/events">Show All Events</Button>
      </div>
    </Fragment>
  }

  const date = new Date(numYear , numMonth - 1);

  return <Fragment>
    <ResultTitle date={date}/>
    <EventList items={filterEvents}/>
  </Fragment>;
};

export default EventFilter;
