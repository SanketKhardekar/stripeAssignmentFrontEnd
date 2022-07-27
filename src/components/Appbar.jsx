import { AppBar, Box, Container, Typography } from "@mui/material";

const Appbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black", padding: 1.5 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "black",
            display:"flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              fontSize={{md:"12px", xs:"11px"}}
              fontFamily="Poppins, sans-serif"
              fontWeight="bold"
              color="#808080"
              component="section"
            >
              Mon-Thu:
            </Typography>
            <Typography
              fontSize={{md:"12px", xs:"11px"}}
              marginLeft={0.5}
              variant="caption"
              fontFamily="Poppins, sans-serif"
              fontWeight="bold"
              color="white"
              component="section"
            >
              9:00 AM - 5:30 PM
            </Typography>
          </div>
          <Typography
            fontSize={{md:"12px", xs:"11px"}}
            fontFamily="Poppins, sans-serif"
            fontWeight="bold"
            color="white"
            component="section"
          >
            Call Us: (00) 1234 5678
          </Typography>
        </Box>
      </Container>
    </AppBar>
  );
};

export default Appbar;
