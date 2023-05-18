import { FC, Fragment } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createRoot } from "react-dom/client";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';




const FormComponent: FC<unknown> = () => {
    return (
        <div>


        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Surname"
          defaultValue=""
        />
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                 aria-labelledby="demo-radio-buttons-group-label"
                 defaultValue="female"
                 name="radio-buttons-group"
      >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          <TextField id="outlined-basic" label="Weight" type="number" variant="outlined" />
          <TextField id="outlined-basic" label="Blood Pressure" type="number" variant="outlined" />
          <TextField id="outlined-basic" label="Blood Sugar" type="number" variant="outlined" />
        <TextField
          id="outlined-required"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
       

        



            <h2><Button variant="contained" href="#contained-buttons">Submit</Button></h2>
            <Button  component={Link} to="/home"variant="contained" href="#contained-buttons">Back</Button>
        </div>
    )
};

export default FormComponent;