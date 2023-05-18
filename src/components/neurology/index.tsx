import { FC, Fragment } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NeurologyComponent: FC<unknown> = () => {
    return (
        <div>
            {<FormGroup>
               <FormControlLabel control={<Checkbox />} label="headaches, blurry vision, fatigue, numbness" />
               <FormControlLabel control={<Checkbox />} label="nervous system disorders" />
               <FormControlLabel control={<Checkbox />} label="paralysis" />
               <FormControlLabel control={<Checkbox />} label="Sleeping disorder" />
               <FormControlLabel control={<Checkbox />} label="Ammnesia" />
               <FormControlLabel control={<Checkbox />} label="Others" />
               
            </FormGroup>}

            <h2><Button variant="contained" href="#contained-buttons">Submit</Button></h2>
            <Button  component={Link} to="/symptoms"variant="contained" href="#contained-buttons">Back</Button>
        </div>
    )
};

export default NeurologyComponent;