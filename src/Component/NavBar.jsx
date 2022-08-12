import { DarkMode, LightMode } from "@mui/icons-material";
import { Box, Switch, ButtonGroup, Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { useState } from "react";

const StyleToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Icon = styled(Box)({
  display: "flex",
  gap: "3px",
  alignItems: "center",
});

export default function NavBar({ setMode, mode, display }) {
    const [change, setChange] = useState('One');


  return (
    <AppBar position="fixed" color="primary">
      <StyleToolbar>
        <Typography variant="h6">Weather</Typography>
        <ButtonGroup
          size="small"
          variant="text"
          color="inherit"  
          aria-label="outlined primary button group"
        >
          <Button onClick={() => {setChange('One'); return display(change)}}>One day forecast</Button>
          <Button onClick={() => {setChange('Five'); return display(change)}}>Five day forecast</Button>
        </ButtonGroup>
        <Icon>
          <LightMode></LightMode>
          <Switch
            onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
          />
          <DarkMode></DarkMode>
        </Icon>
      </StyleToolbar>
    </AppBar>
  );
}
