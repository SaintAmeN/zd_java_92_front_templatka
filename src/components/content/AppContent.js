import classes from './AppContent.module.css'
import {Route, Switch} from "react-router-dom";
import ContentHome from "./home/ContentHome";
import TrainingsList from "./trainings/TrainingsList";
import TrainingsForm from "./trainings/TrainingsForm";
import AttendeesList from "./attendees/AttendeesList";
import TrainingDetails from "./trainings/details/TrainingDetails";
import TrainingAddAttendee from "./trainings/details/TrainingAddAttendee";
import AttendeesForm from "./attendees/AttendeesForm";
import ContentZakladka from "./zakladka/ContentZakladka";

const AppContent = () => {
    return (
        <div className={classes.AppContent}>
            <Switch>
                <Route path={'/zakladka'}>
                    <ContentZakladka/>
                </Route>
                <Route path={'/'}>
                    <ContentHome/>
                </Route>
            </Switch>
        </div>
    )
}

export default AppContent;