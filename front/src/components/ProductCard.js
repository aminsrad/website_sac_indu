import * as React from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function ProductCard({ el }) {
  return (
    <Grid item xs={6}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={el.image}
              alt="sacem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {el.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
}
