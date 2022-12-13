import React from "react";
import {FormGroup, FormControl, Input, InputLabel, TextField, Box, Button} from "@material-ui/core";
import {Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {useState} from "react";
import {Grid} from '@material-ui/core';
import {requestClaim} from './service';


function ClaimRequest() {

    const [userAddress, setUserAddress] = useState();
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        requestClaim(userAddress, amount).then((address, claimAmount) => {
            console.log("User Address:", address);
            console.log("Amount for claim:", claimAmount);
        });
    }
    return (

        <div>
            <h1 align="center">Onboard User</h1>
            <Box component="form"
                noValidate
                autoComplete="off">
                <Container>
                    <Grid container>

                        <Grid xs={5}>
                            <h2 align="center"> UserAddress:</h2>
                        </Grid>
                        <Grid xs={5}>
                            <TextField value={userAddress} id="userAddress"
                                       label="User Address" variant="outlined"
                                       onChange={(e) => setUserAddress(e.target.value)}/>


                        </Grid>
                    </Grid>
                    <Grid container>
                    <Grid xs={5}>
                        <h2 align="center"> Amount:</h2>
                    </Grid>

                    <Grid xs={5}>
                        <TextField value={amount} id="amount" label="amount"
                                   variant="outlined"
                                   onChange={(e) => setAmount(e.target.value)}/>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={3}>

                    </Grid>
                    <Grid xs={2}>
                        <div align="center"><Button variant="contained" onClick={handleSubmit}>Claim
                            Request</Button></div>
                    </Grid>
                    <Grid xs={2}>
                        <Button variant="outlined" onClick={() => {
                            setUserAddress("");
                            setAmount("");
                        }}>Reset</Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
</div>
)
    ;
}

export default ClaimRequest;