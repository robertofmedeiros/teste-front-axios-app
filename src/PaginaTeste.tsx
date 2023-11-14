import { Box, Grid, TextField } from "@mui/material";
import './PaginaTeste.css';

const PaginaTeste = () => {
    return <>
        <div className="root">
            <div className="box">
                <div className="box-input">
                    <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
                </div>
                <div className="box-input">
                    <TextField 
                        fullWidth id="outlined-basic" 
                        label="Outlined" 
                        variant="outlined"
                        onChange={(value) => {
                            console.log(">>>", value.target.value);
                        }} />
                </div>
            </div>
        </div>
    </>
}

export default PaginaTeste;