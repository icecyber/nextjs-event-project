import styles from '../styles/Home.module.css'
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../components/event-list';

export default function Home() {
  const featureEvents = getFeaturedEvents();
  
  return (
    <div className={styles.container}>
        <EventList items={featureEvents}/>
    </div>
  )
}
