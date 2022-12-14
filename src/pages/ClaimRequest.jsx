import React from "react";
import {FormGroup, FormControl, Input, InputLabel, TextField, Box, Button} from "@material-ui/core";
import {Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {useState} from "react";
import {Grid} from '@material-ui/core';
import {requestClaim, getClaimStatus} from './service';


function ClaimRequest() {

    const [userAddress, setUserAddress] = useState();
    const [amount, setAmount] = useState(0);
    const [policyDetails, setPolicyDetails] = useState("");

    const handleSubmit = (e) => {
        requestClaim(userAddress, amount).then((result) => {
            console.log("User Address:", result);
            getClaimStatus(userAddress).then((claimResult) =>{
                console.log("claim result:", claimResult);
                alert("Claim Requested!"+"\n\n"+"User Address: "+claimResult[0]+"\n"+ "Amount Claimed: "+claimResult[1]+"\n"+"Claim status: " +claimResult[3]+"\n"+"Amount Approved: "+claimResult[2]+"\n"+"Comments: "+claimResult[4]);
            });

            //console.log("Amount for claim:", claimAmount);
        });
    }
    const PolicyDetails = (e) => {
        getClaimStatus(userAddress).then( (result) => {
            //TODO: passed reason as declined
            console.log("User Policy - ", result);
            result = "User address = " + result.userAddress + "\n" +"amount claimed:"+ result.amountClaimed+"\n"+"amount Approved:"+result.amountApproved+"\n"+"comment:"+result.comment;
            setPolicyDetails(result);
        });
    }


    return (

        <div>
            <h1 align="center">Claim Request</h1>
            <Box component="form"
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
                                <Button variant="contained" onClick={PolicyDetails} >Claim Details</Button>
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