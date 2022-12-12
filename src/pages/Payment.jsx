import React from "react";
import {FormGroup, FormControl, Input, InputLabel, TextField, Box, Button} from "@material-ui/core";


function Payment() {
    return (

        <div>
            <h1 align= "center">Payment Portal</h1>
            <Box component= "from" sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
                 noValidate
                 autoComplete="off">
                <div class = "row">
                    <div className="col">
                        <h2> UserAddress:</h2><TextField id="userAddress" label="User Address" variant="outlined" />
                    </div>
                    <h2> Policy Details:</h2>
                    <h2> Amount Due:</h2><TextField id="amount" label="User amount due" variant="outlined" />

                    <Button variant="contained">Submit</Button>
                    <Button variant="outlined">Reset</Button>

                </div>
            </Box>
        </div>
    );
}

export default Payment;