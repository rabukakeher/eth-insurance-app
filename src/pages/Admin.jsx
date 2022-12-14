import React from "react";
import {TextField, Box, Button} from "@material-ui/core";
import {Grid} from '@material-ui/core';
import Container from 'react-bootstrap/Container';
import { useState } from "react";
import {getClaimStatus, approveClaimRequest,declineClaimRequest} from './service';


function Admin() {
    const [userAddress, setUserAddress] = useState();
    const [amount, setAmount] = useState(0);
    const [policyDetails, setPolicyDetails] = useState("");

    const ApproveSubmit = (e) => {
        getClaimStatus(userAddress).then( (result) => {
            approveClaimRequest(userAddress).then((userPolicy) => {
                console.log("User Policy - ", userPolicy);
                alert("Claim Approved!"+"\n\n"+"User address = " + result.userAddress + "\n" +"amount claimed:"+ result.amountClaimed+"\n"+"amount Approved:"+result.amountApproved+"\n"+"comment:"+result.comment);
            });
        });
    }
    const RejectSubmit = (e) => {
        getClaimStatus(userAddress).then( (result) => {
            //TODO: passed reason as declined
            declineClaimRequest(userAddress,"Not Enough Information").then((userPolicy) => {
                console.log("User Policy - ", userPolicy);
                alert("Claim Rejected!"+"\n\n"+"User address = " + result.userAddress + "\n" +"amount claimed:"+ result.amountClaimed+"\n"+"amount Approved:"+result.amountApproved+"\n"+"comment:"+result.comment);
            });
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
            <h1 align="center">Claim Approval</h1>
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
                        <Grid xs={10}>
                            <div align="center">
                            <Button variant="contained" onClick={PolicyDetails} >Policy Details</Button>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs={6}>
                            <h2 align="center"> Claim Details:</h2>
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
                        <Grid xs ={3}>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid xs ={3}>
                        </Grid>
                        <Grid xs={1}>
                            <div align='center'>
                                <Button variant="contained" onClick={ApproveSubmit} >Approve</Button>

                            </div>
                        </Grid>
                        <Grid xs={2}>
                            <div align='center'>

                                <Button variant="contained" onClick={RejectSubmit} >Reject</Button>
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

export default Admin;