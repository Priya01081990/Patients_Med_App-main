import { FC, Fragment } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const GeneralComponent: FC<unknown> = () => {
    return (
        <div>
            {<FormGroup>
               <FormControlLabel control={<Checkbox />} label="Fever" />
               <FormControlLabel control={<Checkbox />} label="Asthma" />
               <FormControlLabel control={<Checkbox />} label="Liver Problem" />
               <FormControlLabel control={<Checkbox />} label="Hypertension" />
               <FormControlLabel control={<Checkbox />} label="Viral Infection" />
               <FormControlLabel control={<Checkbox />} label="Others" />
               
            </FormGroup>}

            <h2><Button variant="contained" href="#contained-buttons">Submit</Button></h2>
            <Button  component={Link} to="/symptoms"variant="contained" href="#contained-buttons">Back</Button>
        </div>
    )
};

export default GeneralComponent;