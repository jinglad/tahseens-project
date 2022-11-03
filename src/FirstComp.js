import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const FirstComp = () => {
  const [active, setActive] = React.useState("futures");
  const [selectedOption, setSelectedOption] = React.useState("sell");

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            mr: "10px",
          }}
        >
          Select segments
        </Typography>
        <Box>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            disableElevation
          >
            <Button
              onClick={() => setActive("futures")}
              variant={active === "futures" ? "contained" : "outlined"}
              sx={{
                color: active === "futures" ? "white" : "black",
                fontWeight: 600,
              }}
            >
              Futures
            </Button>
            <Button
              onClick={() => setActive("options")}
              variant={active === "options" ? "contained" : "outlined"}
              sx={{
                color: active === "options" ? "white" : "black",
                fontWeight: 600,
              }}
            >
              Options
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
      <Box>
        {active === "futures" && (
          <FuturesComp
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        )}
        {active === "options" && <OptionsComp />}
      </Box>
      <Box mt={5}>
        <Button
          type="primary"
          variant="contained"
          sx={{ borderRadius: "50px", width: "200px", fontWeight: 600 }}
        >
          Add Leg
        </Button>
        <Button
          type="primary"
          variant="outlined"
          sx={{ borderRadius: "50px", width: "200px", ml: 5, fontWeight: 600 }}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default FirstComp;

const FuturesComp = ({ selectedOption, setSelectedOption }) => {
  return (
    <>
      <Box sx={{ mt: 4, width: "300px", mx: "auto" }}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Box>
              <Box
                component="label"
                sx={{ fontWeight: 600, fontSize: "18px", ml: 1 }}
              >
                Total lot
              </Box>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Box
                component="input"
                type="number"
                sx={{
                  width: "70%",
                  height: "40px",
                  backgroundColor: "#FFF",
                  border: "none",
                  borderRadius: "50px",
                  padding: "0 10px",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#000000",
                  "&:focus": {
                    outline: "2px solid #007FFF",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box>
              <Box
                component="label"
                sx={{ fontWeight: 600, fontSize: "18px", ml: 1 }}
              >
                Position
              </Box>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                disableUnderline
                sx={{
                  width: "80%",
                  height: "40px",
                  backgroundColor: "#fff",
                  border: "none",
                  borderRadius: "50px",
                  padding: "0 10px",
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#000000",
                  outline: "none",
                  "&:focus": {
                    outline: "2px solid #007FFF",
                  },
                }}
              >
                <MenuItem value="sell">Sell</MenuItem>
                <MenuItem value="buy">Buy</MenuItem>
              </Select>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

const OptionsComp = ({ selectedOption, setSelectedOption }) => {
  return (
    <Box sx={{  display: "flex", mt: 2}}>
      <Box sx={{width: "200px"}}>
        <Box>
          <Box
            component="label"
            sx={{ fontWeight: 600, fontSize: "18px", ml: 1 }}
          >
            Total lot
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Box
            component="input"
            type="number"
            sx={{
              width: "70%",
              height: "40px",
              backgroundColor: "#FFF",
              border: "none",
              borderRadius: "50px",
              padding: "0 10px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#000000",
              "&:focus": {
                outline: "2px solid #007FFF",
              },
            }}
          />
        </Box>
      </Box>

      <Box sx={{width: '200px'}}>
        <Box>
          <Box
            component="label"
            sx={{ fontWeight: 600, fontSize: "18px", ml: 1 }}
          >
            Position
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            disableUnderline
            sx={{
              width: "70%",
              // mx: 2,
              height: "40px",
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "0 10px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#000000",
              outline: "none",
              "&:focus": {
                outline: "2px solid #007FFF",
              },
            }}
          >
            <MenuItem value="sell">Sell</MenuItem>
            <MenuItem value="buy">Buy</MenuItem>
          </Select>
        </Box>
      </Box>

      <Box sx={{width: '200px'}}>
        <Box>
          <Box
            component="label"
            sx={{ fontWeight: 600, fontSize: "18px", ml: 1 }}
          >
            Option Type
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            disableUnderline
            sx={{
              width: "70%",
              // mx: 2,
              height: "40px",
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "0 10px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#000000",
              outline: "none",
              "&:focus": {
                outline: "2px solid #007FFF",
              },
            }}
          >
            <MenuItem value="sell">Sell</MenuItem>
            <MenuItem value="buy">Buy</MenuItem>
          </Select>
        </Box>
      </Box>

      <Box sx={{width: '200px'}}>
        <Box>
          <Box
            component="label"
            sx={{ fontWeight: 600, fontSize: "18px", ml: 1 }}
          >
            Expiry
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            disableUnderline
            sx={{
              width: "70%",
              height: "40px",
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "0 10px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#000000",
              outline: "none",
              "&:focus": {
                outline: "2px solid #007FFF",
              },
            }}
          >
            <MenuItem value="sell">Sell</MenuItem>
            <MenuItem value="buy">Buy</MenuItem>
          </Select>
        </Box>
      </Box>

      <Box sx={{width: '300px'}}>
        <Box>
          <Box
            component="label"
            sx={{ fontWeight: 600, fontSize: "18px", ml: 1 }}
          >
            Select Strike Criteria
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            disableUnderline
            sx={{
              width: "70%",
              height: "40px",
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "0 10px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#000000",
              outline: "none",
              "&:focus": {
                outline: "2px solid #007FFF",
              },
            }}
          >
            <MenuItem value="sell">Sell</MenuItem>
            <MenuItem value="buy">Buy</MenuItem>
          </Select>
        </Box>
      </Box>

      <Box sx={{width: '200px'}}>
        <Box>
          <Box
            component="label"
            sx={{ fontWeight: 600, fontSize: "18px", ml: 1 }}
          >
            Strike Type
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <Select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            disableUnderline
            sx={{
              width: "70%",
              height: "40px",
              backgroundColor: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "0 10px",
              fontSize: "18px",
              fontWeight: 600,
              color: "#000000",
              outline: "none",
              "&:focus": {
                outline: "2px solid #007FFF",
              },
            }}
          >
            <MenuItem value="sell">Sell</MenuItem>
            <MenuItem value="buy">Buy</MenuItem>
          </Select>
        </Box>
      </Box>
    </Box>
  );
};
