import { getFeaturedEvents } from '../helpers/api-utils';
import EventList from '../components/events/events-list';
// import {getFeaturedEvents} from '../dummy-data';

export default function HomePage(props){

    
    return(
        <div>
            <EventList items={props.events} />
        </div>
    );
}

export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents();
    return {
        props:{
            events: featuredEvents
        },
        revalidate: 1800
    }
}