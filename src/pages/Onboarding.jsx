import React from "react";
import {TextField, Box, Button} from "@material-ui/core";
import {Grid} from '@material-ui/core';
import Container from 'react-bootstrap/Container';
import { useState } from "react";
import {onBoardUser, getUserPolicy} from './service';

function Onboarding() {
    const [userAddress, setUserAddress] = useState();
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        onBoardUser(userAddress, amount).then( (result) => {
            getUserPolicy(userAddress).then((userPolicy) => {
                console.log("User Policy - ", userPolicy);
                alert("User policy: "+userPolicy[0]+"\n"+ "user Address: "+userAddress+"\n"+"amount Insured: "+userPolicy[1]+"\n"+"amount Due Every month: "+userPolicy[2]);
            });
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
                        <Grid xs={6}>
                            <h2 align='center'> UserAddress:</h2>
                            </Grid>
                            <Grid xs={6}>
                            <TextField value={userAddress} id="userAddress"
                                                                       label="User Address" variant="outlined"
                                                                       onChange={(e) => setUserAddress(e.target.value)}/>
                            
                        </Grid>
                        </Grid>
                        <Grid container>
                        <Grid xs={6}>
                            <h2 align="center"> Amount:</h2>
                            </Grid>
                            <Grid xs={6}>
                            <TextField value={amount} id="amount" label="amount"
                                                                  variant="outlined"
                                                                  onChange={(e) => setAmount(e.target.value)}/>
                        </Grid>
                        </Grid>
                        <Grid container>
                            <Grid xs ={3}>

                            </Grid>
                        <Grid xs={2}>
                            <div align='center'>
                                <Button variant="contained" onClick={handleSubmit} >Submit</Button>
                            </div>
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
    );
}

export default Onboarding;