import { AppBar, Box, Container, Typography } from "@mui/material";

const Appbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "black", padding: 1.5 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundColor: "black",
            display: { lg: "flex", sm: "none", xs:"none" },
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
              fontSize={12}
              fontFamily="Poppins, sans-serif"
              fontWeight="bold"
              color="#808080"
              component="section"
            >
              Mon-Thu:
            </Typography>
            <Typography
              fontSize={12}
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
            fontSize={12}
            fontFamily="Poppins, sans-serif"
            fontWeight="bold"
            color="white"
            component="section"
          >
            Call Us: (00) 1234 5678
          </Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "black",
            display: { lg: "none", sm: "flex", xs:"flex" },
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
              fontSize={10}
              fontFamily="Poppins, sans-serif"
              fontWeight="bold"
              color="#808080"
              component="section"
            >
              Mon-Thu:
            </Typography>
            <Typography
              fontSize={10}
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
            fontSize={10}
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
