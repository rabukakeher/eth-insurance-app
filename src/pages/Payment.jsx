import React from "react";
import {FormGroup, FormControl, Input, InputLabel, TextField, Box, Button} from "@material-ui/core";
import {Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {useState} from "react";
import {Grid} from '@material-ui/core';
import {payPremium,getUserPolicy} from './service';

function Payment() {

    const [userAddress, setUserAddress] = useState();
    const [amount, setAmount] = useState(0);
    const [policyDetails] = useState();

    const handleSubmit = (e) => {
        payPremium(userAddress, amount).then((result) => {
            console.log("User Policy - ", result);
        });
    }
    const GetPolicySubmit = (e) => {
        getUserPolicy(userAddress).then((policyDate) => {

        });
    }

    return (

        <div>
            <h1 align="center">Payment Portal</h1>
            <Box component="from"
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
                        <Grid xs={10}>
                            <div align="center">
                                <Button variant="contained" onClick={GetPolicySubmit}>Get Policy details</Button>
                            </div>
                        </Grid>
                        </Grid>
                        <Grid container>
                            <Grid xs={5}>
                                <h2 align="center"> Policy Details:</h2> <h3>{policyDetails}</h3>
                            </Grid>
                        </Grid>
                    <Grid container>
                            <Grid xs={5}>
                                <h2 align="center"> Amount:</h2>
                            </Grid>
                            <Grid xs={5}>
                                <TextField value={amount} id="amount" label="amount"
                                           variant="outlined"
                                           onChange={(e) => setAmount(e.target.value)}/></Grid>

                        </Grid>
                        <Grid container>
                            <Grid xs={10}>
                                <div align="center">
                                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>


                                    <Button variant="outlined" onClick={() => {
                                        setUserAddress("");
                                        setAmount("");
                                    }}>Reset</Button>

                                </div>
                            </Grid>
                        </Grid>
                </Container>
            </Box>
        </div>
);
}

export default Payment;