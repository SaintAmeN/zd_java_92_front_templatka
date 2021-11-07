import CardComponent from "../../CardComponent";
import {Button, Grid, TextField} from "@material-ui/core";
import classes from './AttendeesForm.module.css'
import DeleteIcon from "@material-ui/icons/Delete";
import {useState} from "react";
import axios from "axios";


// Model / encja pustej oferty/nowego obiektu
const EMPTY_NEW_ATTENDEE = {
    'id': null,
    'name': null,
    'surname': null,
    'pesel': null,
    'email': null,
    'address': null
}

const AttendeesForm = () => {
    const [editedAttendee, setEditedAttendee] = useState({...EMPTY_NEW_ATTENDEE});

    const handleChangeForm = name => event => {
        setEditedAttendee({...editedAttendee, [name]: event.target.value});
    };

    const handleClearForm = () => {
        setEditedAttendee({...EMPTY_NEW_ATTENDEE});
    }

    const handleSubmit = () => {
        // wysłanie obiektu na serwer
        console.log("Wysyłamy:" + JSON.stringify(editedAttendee))

        axios.post("http://localhost:8080/attendees", editedAttendee)
            .then((data) => {
                console.log("Odpowiedz sukces " + JSON.stringify(data))
            })
            .catch((err) => {
                    console.log("Odpowiedz blad " + JSON.stringify(err))
                }
            )
    }

    return (
        <div>
            <CardComponent title={'Attendee Form'}>
                <Grid container className={classes.FormContainer}>
                    <Grid item xs={12}>
                        <TextField value={editedAttendee.name}
                                   onChange={handleChangeForm("name")}
                                   className={classes.FormStretchField}
                                   label={'Attendee name'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={editedAttendee.surname}
                                   onChange={handleChangeForm("surname")}
                                   className={classes.FormStretchField}
                                   label={'Attendee surname'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={editedAttendee.pesel}
                                   onChange={handleChangeForm("pesel")}
                                   className={classes.FormStretchField}
                                   label={'Attendee pesel'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={editedAttendee.email}
                                   onChange={handleChangeForm("email")}
                                   className={classes.FormStretchField}
                                   label={'Attendee email'} size={'small'} variant="filled"/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={editedAttendee.address}
                                   onChange={handleChangeForm("address")}
                                   className={classes.FormStretchField}
                                   label={'Attendee address'} size={'small'} variant="filled"/>
                    </Grid>


                    <Grid item xs={1}/>
                    <Grid container item xs={10}>
                        <Grid item xs={6}>
                            <Button className={classes.FormStretchField}
                                    size={'small'} variant="contained"
                                    startIcon={<DeleteIcon/>}
                                    onClick={handleClearForm}>
                                Reset
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button className={classes.FormStretchField}
                                    size={'small'} variant="contained"
                                    onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </CardComponent>
        </div>
    )
}
export default AttendeesForm;