import React, { useState } from "react";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

function SimpleRating() {
  const [value, setValue] = useState();
  return (
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
    </Box>
  );
}

export default SimpleRating;
