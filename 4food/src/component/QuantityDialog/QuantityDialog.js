import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { DialogContainer } from "./styled";
import { goToPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

export default function QuantityDialog({ openButton, setOpenButton }) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState()

  useEffect(() => {
    setOpen(openButton);
  }, [openButton]);

  const handleClose = () => {
    setOpen(false);
    setOpenButton(false);
    goToPage(navigate, "/cart")
  };

  return (
    <div>
      <DialogContainer open={open} onClose={handleClose} m="0">
        <DialogTitle>Selecione a quantidade desejada</DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: 0,
            }}
          >
            <FormControl sx={{ mt: 2, minWidth: 220 }}>
              <Select autoFocus>
                <MenuItem value={false}>Quantidade</MenuItem>
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
                <MenuItem value="4">4</MenuItem>
                <MenuItem value="5">5</MenuItem>
                <MenuItem value="6">6</MenuItem>
                <MenuItem value="7">7</MenuItem>
                <MenuItem value="8">8</MenuItem>
                <MenuItem value="9">9</MenuItem>
                <MenuItem value="10">10</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>ADICIONAR AO CARRINHO</Button>
        </DialogActions>
      </DialogContainer>
    </div>
  );
}
