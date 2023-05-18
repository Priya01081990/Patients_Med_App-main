import { FC, Fragment } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const OthersComponent: FC<unknown> = () => {
    return (
        <div>
            {<FormGroup>
               <FormControlLabel control={<Checkbox />} label="Eyes" />
               <FormControlLabel control={<Checkbox />} label="Skin, Hair, Nails" />
               <FormControlLabel control={<Checkbox />} label="Obesity" />
               
               <FormControlLabel control={<Checkbox />} label="Others any problem" />
               
            </FormGroup>}

            <h2><Button variant="contained" href="#contained-buttons">Submit</Button></h2>
            <Button  component={Link} to="/symptoms"variant="contained" href="#contained-buttons">Back</Button>
        </div>
    )
};

export default OthersComponent;