import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import { Container, Grid, Typography } from "@mui/material";

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch user data from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Filter users by name
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ padding: "2rem" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1976d2" }}
      >
        User Directory
      </Typography>

      <SearchBar search={search} setSearch={setSearch} />

      <Grid container spacing={3} sx={{ marginTop: "1rem" }}>
        {filteredUsers.map((user) => (
          <Grid item xs={12} sm={6} md={4} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;