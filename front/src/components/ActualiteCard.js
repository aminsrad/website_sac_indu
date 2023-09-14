import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const ActualiteCard = (el) => {
  const [dataUrl, setDataUrl] = useState("");
  const imgfolder = "http://localhost:5000/images/";

  //*/
  useEffect(() => {
    // Convert the binary data to a base64 data URL
    const binaryData = new Uint8Array(el.image.data.data);
    const base64Data = btoa(String.fromCharCode.apply(null, binaryData));
    //const dataUrl = `data:${el.image.contentType};base64,${base64Data}`;
    const decodedData = atob(base64Data);
    setDataUrl(decodedData);
  }, [el.image]);

  return (
    <div>
      <div>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                <p>{el.title}</p>
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              ></Typography>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            alt="sacem"
            src={imgfolder + dataUrl}
          />
          <CardMedia />
        </Card>
      </div>
    </div>
  );
};
export default ActualiteCard;
