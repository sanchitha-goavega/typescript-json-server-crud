import React, { useEffect, useState } from 'react';
import {useHistory, useParams } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import IValues from '../../models/types';
import designationServices from '../../services/designation.services';


function EditCustomer() {
    const [values, setValues] = useState({} as IValues);
    const { id } = useParams();


    const history = useHistory();

    useEffect(() => {
      getDesignation();
    }, []);

    const getDesignation = async () => {
      const response = await designationServices.getOne(`${id}`);
      setValues(response);
  }
    
    const handleChange = (event: any) => {
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event:any) => {
      event.persist();
      designationServices.updateDesignation(`${id}`,values).then(data=>{
        history.goBack();
      });
    }

    return ( 
        
        <div>
        <TextField
          id="outlined_title"
          name="title"
          value={values.title}
          label="First Name"
         // type="text"
          variant="outlined"
          onChange={handleChange}
        />
        
         <TextField
          id="outlined_code"
          name="code"
          value={values.code}
          label="Last Name"
        //  type="text"
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
        Update
      </Button>
      </div>
    )
}

export default EditCustomer;