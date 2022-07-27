import CheckCircleSharpIcon from "@mui/icons-material/CheckCircleSharp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import { Fragment } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  maxWidth: 600,
  bgcolor: "background.paper",
  p: 4,
};

const ModalComponent = (props) => {
  const { type, open, onClose } = props;
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <IconButton onClick={onClose}>
            <CloseRoundedIcon fontSize="medium" />
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {type === "success" ? (
            <CheckCircleSharpIcon
              sx={{ width: 120, height: 120, color: "#7DCE13" }}
            />
          ) : (
            <CancelSharpIcon sx={{ width: 120, height: 120, color: "red" }} />
          )}

          <Typography
            variant="h6"
            marginY={3}
            component="div"
            fontFamily="Poppins, sans-serif"
            fontWeight="bolder"
          >
            Purchase {type === "success" ? "Successful" : "Unsuccessful"}
          </Typography>
          {type === "success" ? (
            <Fragment>
              <Typography
                variant="body1"
                marginY={1}
                component="div"
                fontFamily="Poppins, sans-serif"
              >
                You will get your product soon!
              </Typography>
              <Typography
                variant="body1"
                align="center"
                marginY={1}
                component="div"
                fontFamily="Poppins, sans-serif"
              >
                Get ready to experience the spatial audio with adaptive EQ that
                tunes music in your ears.
              </Typography>
            </Fragment>
          ) : null}
        </div>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
