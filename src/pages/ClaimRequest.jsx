import React from "react";
import {FormGroup, FormControl, Input, InputLabel, TextField, Box, Button} from "@material-ui/core";


function ClaimRequest() {
    return (

        <div>
            <h1 align= "center">Onboard User</h1>
            <Box component= "from" sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
                 noValidate
                 autoComplete="off">
                <div class = "row">
                    <div className="col">
                        <h2> UserAddress:</h2><TextField id="userAddress" label="User Address" variant="outlined" />
                    </div>
                    <h2> Amount:</h2><TextField id="amount" label="Amount" variant="outlined" />

                    <Button variant="contained">Claim Request</Button>


                </div>
            </Box>
        </div>
    );
}

export default ClaimRequest;