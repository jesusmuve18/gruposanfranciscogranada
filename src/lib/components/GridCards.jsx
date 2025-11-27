import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export default function GridCards({ items = [], cardColor = "#bcd" }) {
  return (
    <Box sx={{ width: "100%", textAlign: "center", py: 6 }}>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: 900,
          mx: "auto",
        }}
      >
        {items.map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.label}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              component="a"
              href={item.link}
              sx={{
                minWidth: "270px",
                width: "100%",
                height: 130,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: cardColor,
                color: "white",
                textDecoration: "none",
                fontSize: "25px",
                borderRadius: 3,
                padding: "0 7px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": {
                  opacity: 0.9,
                  transform: "scale(1.03)",
                },
              }}
            >
              {item.label}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
