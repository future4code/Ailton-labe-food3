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
import { InputLabel } from "@mui/material";

export default function QuantityDialog({
  openButton,
  setOpenButton,
  setQntProduct,
  qntProduct,
  setConfirmAdd
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(openButton);
  }, [openButton]);

  const handleClose = () => {
    setOpen(false);
    setOpenButton(false);
  };

  const submitAdd = () => {
    setOpen(false);
    setOpenButton(false);
    setConfirmAdd(true);
  };

  return (
    <>
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
              <InputLabel id="demo-controlled-open-select-label">
                Quantidade
              </InputLabel>
              <Select
                value={qntProduct}
                autoFocus
                id="demo-controlled-open-select-label"
                label={"Quantidade"}
                required
                onChange={(e) => setQntProduct(e.target.value)}
              >
                <MenuItem selected value={1}>
                  1
                </MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={9}>9</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={submitAdd}>ADICIONAR AO CARRINHO</Button>
        </DialogActions>
      </DialogContainer>
    </>
  );
}
