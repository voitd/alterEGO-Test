import { Grid, Typography, Button, Box } from "@mui/material";
import useStyles from "../../assets/styles/styles";
import myteam from "../../assets/images/myteam.jpg";
import BaseGrid from "./BaseGrid";

const BaseHero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox}>
      <BaseGrid>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Let's scale your business
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Hire professionals who will help your business make 10X your
            previous income. With over 5years experience in Marketing & Business
            strategy, we are your best client.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px", fontSize: "16px" }}
          >
            HIRE ME =)
          </Button>
        </Grid>
        <Grid item xs={12} md={5}>
          <img src={myteam} alt="My Team" className={classes.largeImage} />
        </Grid>
      </BaseGrid>
    </Box>
  );
};

export default BaseHero;
