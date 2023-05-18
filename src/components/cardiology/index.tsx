import { FC, Fragment } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const CardiologyComponent: FC<unknown> = () => {
    return (
        <div>
            {<FormGroup>
               <FormControlLabel control={<Checkbox />} label="Chest Pain" />
               <FormControlLabel control={<Checkbox />} label="Breathing Problem" />
               <FormControlLabel control={<Checkbox />} label="Pain in the neck, jaw, throat, upper belly area or back" />
               <FormControlLabel control={<Checkbox />} label="Feeling sweaty" />
               <FormControlLabel control={<Checkbox />} label=" Fatigue and weakness." />
               <FormControlLabel control={<Checkbox />} label="Others" />
               
            </FormGroup>}

            <h2><Button variant="contained" href="#contained-buttons">Submit</Button></h2>
            <Button  component={Link} to="/symptoms"variant="contained" href="#contained-buttons">Back</Button>
        </div>
    )
};

export default CardiologyComponent;