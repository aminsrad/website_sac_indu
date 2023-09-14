import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const HistorieCard = ({ ...e }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <div style={{ display: "flex" }}>
              <Typography gutterBottom variant="h5" component="div">
                {e.title}
              </Typography>
            </div>
            <CardMedia
              component="img"
              height="100%"
              width="100%"
              image={e.image}
              alt=""
            />
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default HistorieCard;
