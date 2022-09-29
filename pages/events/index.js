import React from 'react'
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/event-list';
import EventSearch from '../../components/event-search';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

const EventPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  function findEventsHandler(year,month){
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventSearch onSearch={findEventsHandler}/>
      <EventList items={events}/>
    </Fragment>
  )
}

export default EventPage