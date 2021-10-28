import EventList from '../../components/events/events-list';
import EventsSearch from '../../components/events/events-search';
import { getAllEvents } from '../../helpers/api-utils';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

export default function EventsPage(props){
    const events = props.events;
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

export async function getStaticProps(){
    const events = await getAllEvents();

    return {
        props: {
            events: events
        },
        revalidate: 60
    }
}