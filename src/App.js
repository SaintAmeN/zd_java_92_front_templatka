import classes from './App.module.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AppHeader from "./components/header/AppHeader";
import AppContent from "./components/content/AppContent";
import TrainingsList from "./components/content/trainings/TrainingsList";
import ContentHome from "./components/content/home/ContentHome";

function App() {
    return (
        <div className={classes.App}>
            <Router>
                <AppHeader/>
                <AppContent/>
            </Router>
        </div>
    );
}

export default App;
