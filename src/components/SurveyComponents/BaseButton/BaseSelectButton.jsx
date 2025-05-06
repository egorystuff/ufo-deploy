import { Button, Typography } from "@mui/material";
import clsx from "clsx";

export const BaseSelectButton = ({ onClick, children, rightText }) => {
  return (
    <Button
      variant='contained'
      fullWidth
      onClick={onClick}
      className={clsx("base-select-button", {
        "with-right-text": rightText,
      })}>
      <Typography className='button-left-text'>{children}</Typography>

      {rightText && <Typography className='button-right-text'>{rightText}</Typography>}
    </Button>
  );
};
