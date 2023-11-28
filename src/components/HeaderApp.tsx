import { AppBar, Box, Button, Drawer, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { FC, ReactNode, useState } from "react";
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Router, useNavigate } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PaginaTeste from "../PaginaTeste";

interface HeaderAppProperties {
    children: ReactNode;
}

const HeaderApp: FC<HeaderAppProperties> = ({ children }) => {
    const [open, setOpen] = useState<boolean>(false);

    const navigate = useNavigate();
    return <>
        <div style={{ maxWidth: "100%" }}>
            <div>
                <Box sx={{ display: 'flex' }}>
                    <AppBar component="nav">
                        <div style={{ display: "flex" }}>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={() => {
                                        setOpen(true);
                                    }}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </div>
                    </AppBar>
                </Box>
            </div>
            <header style={{ display: "flex" }}>
                <div style={{ display: "flex", width: "100%", padding: "27px" }}>
                    <h1>
                        <img style={{ display: "block", width: "100px", height: "59px" }} src="./senac_logo.png" />
                    </h1>
                    <div style={{ display: "flex", width: "100%", justifyContent: "center", alignContent: "center" }}>
                        <p style={{ fontSize: "35px", color: "#004587" }}>Teste</p>
                    </div>
                </div>
            </header>
            <div>
                {children}
                
            </div>
        </div>
        <Drawer
            anchor={"left"}
            open={open}
            onClose={() => setOpen(false)} >
            <Box
                sx={{ width: 250 }}
                role="presentation">
                <ListItem disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("/teste");
                    }}>
                        <ListItemIcon>
                            <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Teste"} />
                    </ListItemButton>
                </ListItem>
            </Box>
        </Drawer>
    </>
}

export default HeaderApp;