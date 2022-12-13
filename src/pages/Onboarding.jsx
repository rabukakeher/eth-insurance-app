import React from "react";
import {TextField, Box, Button} from "@material-ui/core";
import { useState } from "react";


function Onboarding() {
    const [userAddress, setUserAddress] = useState();
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) =>  {
        console.log("address - ", userAddress);
        console.log("amount - ", amount)
    }

    return (
        <div>
            <h1 align= "center">Onboard User</h1>
            <Box component= "form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
                <div className = "row">
                    <div className="col">
                <h2> UserAddress:</h2><TextField value={userAddress} id="userAddress" label="User Address" variant="outlined" onChange={(e) =>  setUserAddress(e.target.value) }/>
                    </div>
                <h2> Amount:</h2><TextField value={amount} id="amount" label="User Address" variant="outlined" onChange={(e) =>  setAmount(e.target.value)}/>

                <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                <Button variant="outlined"onClick={() => {setUserAddress(""); setAmount("");}}>Reset</Button>

                </div>
        </Box>
        </div>
    );
}

export default Onboarding;