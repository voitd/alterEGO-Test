import { VerifiedUserOutlined } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Avatar,
  CssBaseline,
  Grid,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import useStyles from "../assets/styles/styles";
import BaseGrid from "../components/UI/BaseGrid";
import useAuth from "../hooks/useAuth";
import { Credentials } from "../types/auth";

interface FormValue {
  value: string | number;
  error: boolean;
  errorMessage: string;
}

interface FormValuesState {
  login: FormValue;
  password: FormValue;
}

const LoginPage = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const { doLogin, user } = useAuth();

  const errorMessage: string = t(
    "The name of the user or the password was not entered correctly.",
  );

  const [formValues, setFormValues] = useState<FormValuesState>({
    login: {
      value: "",
      error: false,
      errorMessage,
    },
    password: {
      value: "",
      error: false,
      errorMessage,
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: {
        ...prevFormValues[name as keyof typeof prevFormValues],
        value,
      },
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isValidate: boolean = false;
    Object.keys(formValues).forEach((field) => {
      const value: string | number =
        formValues[field as keyof typeof formValues].value;

      const isValidCredentials: boolean =
        user[field as keyof typeof user] === value;

      const isError: boolean = value === "" || !isValidCredentials;
      isValidate = !isError;
      setFormValues((prevFormValues) => ({
        ...prevFormValues,
        [field]: {
          ...prevFormValues[field as keyof typeof prevFormValues],
          error: isError,
        },
      }));
    });
    if (isValidate) {
      const credentials: Credentials = Object.entries(formValues).reduce(
        (acc, [key, value]) => ({ ...acc, [key]: value.value }),
        { login: "", password: "" },
      );

      doLogin(credentials);
    }
  };

  return (
    <BaseGrid>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5}>
        <Paper
          elevation={3}
          sx={{ p: 12, mt: 12, display: "grid", placeItems: "center" }}
        >
          <Avatar className={classes.avatar}>
            <VerifiedUserOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="login"
              label="Login"
              name="login"
              autoFocus
              placeholder="admin"
              value={formValues.login.value}
              onChange={handleChange}
              error={formValues.login.error}
              helperText={
                formValues.login.error && formValues.login.errorMessage
              }
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              placeholder="12345"
              value={formValues.password.value}
              onChange={handleChange}
              error={formValues.password.error}
              helperText={
                formValues.password.error && formValues.password.errorMessage
              }
            />
            <LoadingButton
              loading={isLoading}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </LoadingButton>
          </form>
        </Paper>
      </Grid>
    </BaseGrid>
  );
};

export default LoginPage;
