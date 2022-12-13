import React from "react";
import {FormGroup, FormControl, Input, InputLabel, TextField, Box, Button} from "@material-ui/core";
import {Grid, Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {useState} from "react";

function Payment() {

    const [userAddress, setUserAddress] = useState();
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        console.log("address - ", userAddress);
        console.log("amount - ", amount);
    }

    return (

        <div>
            <h1 align="center">Payment Portal</h1>
            <Box component="from" sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
                 noValidate
                 autoComplete="off">
                <Container>
                    <Row className="show-grid">
                        <Col>
                            <h2 align="center"> UserAddress:<TextField id="userAddress" label="User Address"
                                                                       variant="outlined"/></h2>
                        </Col>
                        <h2 align="center"> Policy Details:</h2>
                        <h2 align="center"> Amount Due:<TextField id="amount" label="User amount due"
                                                                  variant="outlined"/></h2>

                        <Col align="center">
                            <Button variant="contained">Submit</Button>
                            <Button variant="outlined">Reset</Button>
                        </Col>

                    </Row>
                </Container>
            </Box>
        </div>
    );
}

export default Payment;