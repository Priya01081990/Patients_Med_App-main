import { FC, Fragment } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const OrthopedicsComponent: FC<unknown> = () => {
    return (
        <div>
            {<FormGroup>
               <FormControlLabel control={<Checkbox />} label="Osteoarthritis, Rheumatoid Arthritis" />
               <FormControlLabel control={<Checkbox />} label="Cubital Tunnel Syndrome" />
               <FormControlLabel control={<Checkbox />} label="Ligament Injuries to the Knee,Torn Meniscus" />
               <FormControlLabel control={<Checkbox />} label="Problems in spine and joints" />
               <FormControlLabel control={<Checkbox />} label="Pain due to surgery" />
               <FormControlLabel control={<Checkbox />} label="Others" />
               
            </FormGroup>}

            <h2><Button variant="contained" href="#contained-buttons">Submit</Button></h2>
            <Button  component={Link} to="/symptoms"variant="contained" href="#contained-buttons">Back</Button>
        </div>
    )
};

export default OrthopedicsComponent;