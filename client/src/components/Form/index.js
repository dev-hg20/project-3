import React from "react";
import { Button } from "@material-ui/core";

function Buttons() {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Sign In
    </Button>
  );
}

export default Buttons;
