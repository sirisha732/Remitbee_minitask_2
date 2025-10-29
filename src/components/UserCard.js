import React from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

const UserCard = ({ user }) => {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: 3,
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <CardContent>
        <Typography variant="h6" sx={{ color: "#1976d2", fontWeight: "bold" }}>
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          📧 {user.email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ☎ {user.phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          🏠 {user.address?.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          🌐 {user.website}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          href={`https://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;