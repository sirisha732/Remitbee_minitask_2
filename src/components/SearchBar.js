import React from "react";
import { TextField, Box } from "@mui/material";

const SearchBar = ({ search, setSearch }) => {
  return (
    <Box display="flex" justifyContent="center" marginTop={2}>
      <TextField
        label="Search by name"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ width: "100%", maxWidth: 400 }}
      />
    </Box>
  );
};

export default SearchBar;