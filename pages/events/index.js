import EventList from '../../components/events/events-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../dummy-data';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

export default function EventsPage(){
    const events = getAllEvents();
    const router = useRouter();

    function findEventsHandler(year,month){
        const fullPath = `/events/${year}/${month}`;
        console.log(fullPath);
        router.push(fullPath);

    }
    return(
        <Fragment>
            <EventsSearch onSearch={findEventsHandler}/>
           <EventList items={events}></EventList>
        </Fragment>
    );
}