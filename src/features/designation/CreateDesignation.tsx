import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import IValues from '../../models/types';
import designationServices from '../../services/designation.services';


const defaultValues: IValues = {
  id:"",
  title: "",
  code: ""
}
function CreateDesignation() {
    const [values, setValues] = useState(defaultValues as IValues);

    const history = useHistory();
    
    const handleChange = (event: any) => {
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }

  
    const handleSubmit = (event:any) => {
      event.persist();
      designationServices.createDesignation(values).then(data=>{
        history.goBack();
      });
    }


    return ( 
        <div>
        <TextField
          name="title"
          label="Title"
          type="text"
          defaultValue={values.title}
          variant="outlined"
          onChange={handleChange}
        />
         <TextField
          name="code"
          label="code"
          type="text"
          defaultValue={values.code}
          variant="outlined"
          onChange={handleChange}
        />
     
        <Button
        variant="contained"
        color="primary"
        size="large"
        startIcon={<SaveIcon />}
        onClick={handleSubmit}
      >
        Save
      </Button>
        </div>
    )
}

export default CreateDesignation;