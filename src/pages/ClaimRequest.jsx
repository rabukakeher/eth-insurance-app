import React from "react";
import {FormGroup, FormControl, Input, InputLabel, TextField, Box, Button} from "@material-ui/core";
import {Grid, Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {useState} from "react";

function ClaimRequest() {

    const [userAddress, setUserAddress] = useState();
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        console.log("address:", userAddress);
        console.log("amount :", amount);
    }
    return (

        <div>
            <h1 align="center">Onboard User</h1>
            <Box component="form" sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
                 noValidate
                 autoComplete="off">
                <Container>
                    <Row className="show-grid">

                        <Col>
                            <h2 align="center"> UserAddress:<TextField value={userAddress} id="userAddress"
                                                                       label="User Address" variant="outlined"
                                                                       onChange={(e) => setUserAddress(e.target.value)}/>
                            </h2>
                        </Col>
                        <Col>
                            <h2 align="center"> Amount:<TextField value={amount} id="amount" label="amount"
                                                                  variant="outlined"
                                                                  onChange={(e) => setAmount(e.target.value)}/></h2>
                        </Col>

                        <Col align="center"><Button variant="contained" onClick={handleSubmit}>Claim
                            Request</Button></Col>


                    </Row>
                </Container>
            </Box>
        </div>
    );
}

export default ClaimRequest;