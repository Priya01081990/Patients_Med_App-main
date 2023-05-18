import { FC, Fragment } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const GynecologyComponent: FC<unknown> = () => {
    return (
        <div>
            {<FormGroup>
               <FormControlLabel control={<Checkbox />} label="Polycystic Ovarian Syndrome" />
               <FormControlLabel control={<Checkbox />} label="Pelvic Pain" />
               <FormControlLabel control={<Checkbox />} label="Menstrual Disorders" />
               <FormControlLabel control={<Checkbox />} label="Pregnency" />
               <FormControlLabel control={<Checkbox />} label="Hormonal Disbalance" />
               <FormControlLabel control={<Checkbox />} label="Others" />
               
            </FormGroup>}

            <h2><Button variant="contained" href="#contained-buttons">Submit</Button></h2>
            <Button  component={Link} to="/symptoms"variant="contained" href="#contained-buttons">Back</Button>
        </div>
    )
};

export default GynecologyComponent;