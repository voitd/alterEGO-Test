import { Container, Typography, Box, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import useStyles from "../assets/styles/styles";
import getRandomQuote, { Quote } from "../utils/getRandomQuote";

const HomePage = () => {
  const classes = useStyles();

  const [quote, setQuote] = useState<Quote>();
  const fetchQuote = async () => {
    const quote = await getRandomQuote();
    setQuote(quote);
  };
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Container
      sx={{
        height: "100%",
      }}
    >
      <Paper elevation={3} sx={{ p: 4, mt: 12 }}>
        {quote && (
          <Box
            sx={{
              display: "grid",
              placeSelf: "center",
            }}
          >
            <Typography
              variant="h3"
              fontWeight={700}
              className={classes.title}
              color="darkgray"
            >
              {quote.quote}
            </Typography>
            <Typography
              variant="h6"
              className={classes.subtitle}
              display="flex"
              justifyContent="end"
              p={2}
            >
              {quote.author}
            </Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default HomePage;
