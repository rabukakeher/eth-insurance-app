import React from "react";
import {FormGroup, FormControl, Input, InputLabel, TextField, Box, Button} from "@material-ui/core";
import {Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {useState} from "react";
import {Grid} from '@material-ui/core';
import {payPremium,getUserPolicy,getClaimStatus} from './service';

function Payment() {

    const [userAddress, setUserAddress] = useState();
    const [amount, setAmount] = useState(0);
    const [policyDetails, setPolicyDetails] = useState("");

    const handleSubmit = (e) => {
/*        payPremium(userAddress, amount).then((result) => {
            console.log("User Policy - ", result);
            alert("Premium Paid!"+"\n\n"+"User Address: "+result[0]+"\n"+ "Amount Claimed: "+result[1]+"\n"+"Claim status: " +result[3]+"\n"+"Amount Approved: "+result[2]+"\n"+"Comments: "+result[4]);
        });*/
        getUserPolicy(userAddress).then((userPolicy) => {
            //console.log("User Policy - ", userPolicy);
            alert("Premium Paid! \n\nUser policy: "+userPolicy[0]+"\n"+ "user Address: "+userAddress+"\n"+"amount Insured: "+userPolicy[1]+"\n"+"amount Due Every month: "+userPolicy[2]+"\n"+"amount Paid: "+amount);
        });
    }
    const PolicyDetails = (e) => {
        getUserPolicy(userAddress).then( (result) => {
            //TODO: passed reason as declined
            console.log("User Policy - ", result);
            result = "Policy Name:"+result.name+"\nUser address = " + userAddress + "\n" +"amount insured:"+ result.amountInsured+"\n"+"amount due every month:"+ result.amountDueEveryMonth;
            setPolicyDetails(result);
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
                        <Grid xs={6}>
                            <h2 align="center"> UserAddress:</h2>
                        </Grid>
                            <Grid xs={6}>
                                <TextField value={userAddress} id="userAddress"
                                           label="User Address" variant="outlined"
                                           onChange={(e) => setUserAddress(e.target.value)}/>
                            </Grid>
                        <Grid xs={10}>
                            <div align="center">
                                <Button variant="contained" onClick={PolicyDetails}>Get Policy details</Button>
                            </div>
                        </Grid>
                        </Grid>
                        <Grid container>
                            <Grid xs={6}>
                                <h2 align="center"> Policy Details:</h2>
                            </Grid>
                            <Grid xs={6}>
                                <TextField
                                    id="policydetails"
                                    multiline
                                    maxRows={6}
                                    fullWidth
                                    variant="filled"
                                    value ={policyDetails}
                                    rows ={5}
                                    cols ={20}
                                />
                            </Grid>
                        </Grid>

                    <Grid container>
                            <Grid xs={6}>
                                <h2 align="center"> Amount:</h2>
                            </Grid>
                            <Grid xs={6}>
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