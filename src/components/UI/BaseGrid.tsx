import { Grid } from "@mui/material";

interface Props {
  children: React.ReactNode;
}
const BaseGrid = ({ children }: Props) => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={4}>
      {children}
    </Grid>
  );
};

export default BaseGrid;
