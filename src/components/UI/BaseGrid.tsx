import { Grid } from "@mui/material";

interface Props {
  children: React.ReactNode;
}
export const BaseGrid = ({ children }: Props) => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={4}>
      {children}
    </Grid>
  );
};
