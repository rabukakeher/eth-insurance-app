import React from "react";
import {FormGroup, FormControl, Input, InputLabel, TextField, Box} from "@material-ui/core";


function Onboarding() {
    return (
        <div>
            <h1 align= "center">Onboard User</h1>
            <Box component= "from" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
                <TextField id="outlined-basic" label="User Address" variant="outlined" />
        </Box> 
        </div>
        
    );
}

export default Onboarding;