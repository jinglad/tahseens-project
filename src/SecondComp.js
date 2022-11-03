import styled from "@emotion/styled";
import { Box, Checkbox, Container, FormControlLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

export default function SecondComp() {
  const [method, setMethod] = useState("Buy");
  const [call, setCall] = useState("Call");
  const [duration, setDuration] = useState("Weekly");
  const [strikeType, setStrikeType] = useState("0");
  const [atm, setAtm] = useState("2");
  const [momentum, setMomentum] = useState("0");
  const [profit, setProfit] = useState("0");
  const [loss, setLoss] = useState("0");
  const [tgt, setTgt] = useState("0");
  const [sl, setSl] = useState("0");

  const handleMethodChange = (event) => {
    setMethod(event.target.value);
  };

  const handleCallChange = (event) => {
    setCall(event.target.value);
  };

  const handleStrikeChange = (event) => {
    setStrikeType(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleAtmChange = (event) => {
    setAtm(event.target.value);
  };

  const handleMomentumChange = (event) => {
    setMomentum(event.target.value);
  };

  const handleProfitChange = (event) => {
    setProfit(event.target.value);
  };
  const handleLossChange = (event) => {
    setLoss(event.target.value);
  };
  const handleTgtChange = (event) => {
    setTgt(event.target.value);
  };
  const handleSlChange = (event) => {
    setSl(event.target.value);
  };

  const [checked, setChecked] = useState({
    momentum: false,
    profit: false,
    trail: false,
    loss: false,
    tgt: false,
    sl: false,
  });

  const handleChange = (event) => {
    setChecked({ ...checked, [event.target.name]: event.target.checked });
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          gap: 2,

          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack sx={{ flexWrap: "wrap" }} direction={{ xs: "column", sm: "row" }} alignItems="center" gap={2}>
          <Typography fontWeight="bold">Lots : </Typography>
          <CustomTextField defaultValue={0} type="number" />
          <CustomSelect value={method} defaultValue="Buy" onChange={handleMethodChange}>
            <MenuItem value={"Buy"}>Buy</MenuItem>
            <MenuItem value={"Sell"}>Sell</MenuItem>
          </CustomSelect>
          <CustomSelect value={call} defaultValue="Call" onChange={handleCallChange}>
            <MenuItem value={"Call"}>Call</MenuItem>
            <MenuItem value={"Put"}>Put</MenuItem>
          </CustomSelect>
          <CustomSelect value={duration} defaultValue="Weekly" onChange={handleDurationChange}>
            <MenuItem value={"Weekly"}>Weekly</MenuItem>
            <MenuItem value={"Monthly"}>Monthly</MenuItem>
          </CustomSelect>
          <Typography fontWeight="bold">Select Strike: </Typography>
          <CustomSelect value={strikeType} defaultValue="0" onChange={handleStrikeChange}>
            <MenuItem value={"0"}>Premium Range</MenuItem>
            <MenuItem value={"1"}>Closest Premium</MenuItem>
            <MenuItem value={"2"}>Straddle Width</MenuItem>
          </CustomSelect>
          <CustomSelect value={atm} defaultValue="2" onChange={handleAtmChange}>
            <MenuItem value={"0"}>ITM 2</MenuItem>
            <MenuItem value={"1"}>ITM 1</MenuItem>
            <MenuItem value={"2"}>ATM </MenuItem>
            <MenuItem value={"3"}>OTM 1</MenuItem>
            <MenuItem value={"4"}>OTM 2</MenuItem>
            <MenuItem value={"5"}>OTM 3</MenuItem>
            <MenuItem value={"6"}>OTM 4</MenuItem>
            <MenuItem value={"7"}>OTM 5</MenuItem>
            <MenuItem value={"8"}>OTM 6</MenuItem>
            <MenuItem value={"9"}>OTM 7</MenuItem>
            <MenuItem value={"10"}>OTM 8</MenuItem>
            <MenuItem value={"11"}>OTM 9</MenuItem>
            <MenuItem value={"12"}>OTM 10</MenuItem>
          </CustomSelect>
        </Stack>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
          }}
        >
          <Box>
            <FormControlLabel
              label="Simple Momentum"
              control={<Checkbox name="momentum" checked={checked.momentum} onChange={handleChange} />}
            />
            <Stack direction={"row"} spacing={1}>
              <CustomSelect disabled={!checked.momentum} value={momentum} onChange={handleMomentumChange}>
                <MenuItem value={"0"}>Points ⬆️</MenuItem>
                <MenuItem value={"1"}>Points ⬇️</MenuItem>
                <MenuItem value={"2"}>Percentage ⬆️</MenuItem>
                <MenuItem value={"3"}>Percentage ⬇️</MenuItem>
                <MenuItem value={"4"}>Underlying Points ⬆️</MenuItem>
                <MenuItem value={"5"}>Underlying Points ⬇️</MenuItem>
                <MenuItem value={"6"}>Underlying Percentage ⬆️</MenuItem>
                <MenuItem value={"7"}> UnderlyingPercentage ⬇️</MenuItem>
              </CustomSelect>
              <CustomTextField defaultValue={0} disabled={!checked.momentum} type="number" />
            </Stack>
          </Box>
          <Box>
            <FormControlLabel
              label="Target Profit"
              control={<Checkbox name="profit" checked={checked.profit} onChange={handleChange} />}
            />
            <Stack direction={"row"} spacing={1}>
              <CustomSelect disabled={!checked.profit} value={profit} defaultValue="0" onChange={handleProfitChange}>
                <MenuItem value={"0"}>Underlying Points</MenuItem>
                <MenuItem value={"1"}>Percentage </MenuItem>
                <MenuItem value={"2"}>Underlying Percentage</MenuItem>
              </CustomSelect>
              <CustomTextField defaultValue={0} disabled={!checked.profit} type="number" />
            </Stack>
          </Box>
          <Box>
            <FormControlLabel
              label="Stop Loss"
              control={<Checkbox name="loss" checked={checked.loss} onChange={handleChange} />}
            />
            <Stack direction={"row"} spacing={1}>
              <CustomSelect disabled={!checked.loss} value={loss} defaultValue="0" onChange={handleLossChange}>
                <MenuItem value={"0"}>Underlying Points</MenuItem>
                <MenuItem value={"1"}>Percentage </MenuItem>
                <MenuItem value={"2"}>Underlying Percentage</MenuItem>
              </CustomSelect>
              <CustomTextField defaultValue={0} disabled={!checked.loss} type="number" />
            </Stack>
          </Box>
          <Box>
            <FormControlLabel
              label="Trail SL"
              control={<Checkbox name="trail" checked={checked.trail} onChange={handleChange} />}
            />
            <Stack direction={"row"} spacing={1}>
              <CustomSelect disabled={!checked.trail} value={strikeType} defaultValue="0" onChange={handleStrikeChange}>
                <MenuItem value={"0"}>Points</MenuItem>
                <MenuItem value={"1"}>Percentage </MenuItem>
              </CustomSelect>
              <CustomTextField defaultValue={0} disabled={!checked.trail} type="number" />
              <CustomTextField defaultValue={0} disabled={!checked.trail} type="number" />
            </Stack>
          </Box>
          <Box>
            <FormControlLabel
              label="Re-entry on Tgt"
              control={<Checkbox name="tgt" checked={checked.tgt} onChange={handleChange} />}
            />
            <Stack direction={"row"} spacing={1}>
              <CustomSelect disabled={!checked.tgt} value={tgt} defaultValue="0" onChange={handleTgtChange}>
                <MenuItem value={"0"}>RE ASAF</MenuItem>
              </CustomSelect>
              <CustomTextField defaultValue={0} disabled={!checked.tgt} type="number" />
            </Stack>
          </Box>
          <Box>
            <FormControlLabel
              label="Re-entry on SL"
              control={<Checkbox name="sl" checked={checked.sl} onChange={handleChange} />}
            />
            <Stack direction={"row"} spacing={1}>
              <CustomSelect disabled={!checked.sl} value={sl} defaultValue="0" onChange={handleSlChange}>
                <MenuItem value={"0"}>RE ASAF</MenuItem>
              </CustomSelect>
              <CustomTextField defaultValue={0} disabled={!checked.sl} type="number" />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

const CustomTextField = styled(TextField)({
  maxWidth: "100px",
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& .MuiInputBase-input": {
      color: "black",
      padding: "6px 12px",
      backgroundColor: "white",
      borderRadius: "150px",
    },
    "& fieldset": {
      borderColor: "red",
      border: "none",
    },
  },
});

const CustomSelect = styled(Select)({
  "& .MuiInputBase-root ": {
    color: "black",
    borderRadius: "150px",
  },
  "& .MuiSelect-select": {
    color: "white",
    borderRadius: "150px !important",
    backgroundColor: "#0c569f",
    padding: "6px 12px",
    border: "none",
  },

  "& fieldset": {
    borderRadius: "150px",
    border: "none",
    color: "white",
  },
  "& .MuiSelect-icon": {
    color: "white",
  },
  //disabled
  "& .Mui-disabled": {
    WebkitTextFillColor: "rgb(255 255 255 / 47%) !important",
  },
});
