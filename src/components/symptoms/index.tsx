import { FC, Fragment } from "react";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const SymptomsComponent: FC<unknown> = () => {
    return (
        <div>  
            <h2><Button component={Link} to="/general" variant="contained" href="#contained-buttons">General</Button></h2>
            <h2><Button component={Link} to="/gynecology" variant="contained" href="#contained-buttons">Gynecology</Button></h2>
            <h2><Button component={Link} to="/cardiology" variant="contained" href="#contained-buttons">Cardiology</Button></h2>
            <h2><Button component={Link} to="/neurology" variant="contained" href="#contained-buttons">Neurology</Button></h2>
            <h2><Button component={Link} to="/orthopedics" variant="contained" href="#contained-buttons">Orthopedics</Button></h2>
            <h2><Button component={Link} to="/others" variant="contained" href="#contained-buttons">Others</Button></h2>
                
        </div>
    )
};

export default SymptomsComponent;