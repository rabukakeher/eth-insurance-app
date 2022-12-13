import React from "react";
import {TextField, Box, Button} from "@material-ui/core";
import {Row, Col} from 'react-bootstrap';
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
            });
        });
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
                        <Col align="center">
                            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                            <Button variant="outlined" onClick={() => {
                                setUserAddress("");
                                setAmount("");
                            }}>Reset</Button>
                        </Col>
                    </Row>
                </Container>
            </Box>
        </div>
    );
}

export default Onboarding;