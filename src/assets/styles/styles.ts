import { makeStyles } from "@mui/styles";

const styles = (theme?: any) => {
  return {
    navlinks: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      justifyContent: "start",
    },
    link: { textDecoration: "none", color: "white", fontSize: "20px" },
    icon: {
      color: "blue",
      cursor: "pointer",
      position: "absolute",
      left: 4,
      top: 2,
    },
    closeIcon: { color: "white", cursor: "pointer" },
    logo: { flexGrow: "1", cursor: "pointer", color: "white" },
    draw: { background: "red" },
    card: {
      maxWidth: 300,
      margin: "auto",
      transition: "0.3s",
      cursor: "pointer",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12px rgba(0,0,0,0.3)",
      },
    },
    media: {
      objectFit: "cover",
    },
    content: {
      textAlign: "left",
      padding: 12,
      display: "grid",
      gap: 2,
    },
    divider: {
      margin: `2px 0`,
    },
    size: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    avatar: {
      display: "inline-block",
      border: "2px solid white",
      "&:not(:first-of-type)": {
        marginLeft: theme.spacing(2),
      },

      margin: theme.spacing(0),
      backgroundColor: theme.palette.secondary.main,
    },
    paper: {
      margin: theme.spacing(2, 6),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    title: {
      fontWeight: "bold",
    },
    heroBox: {
      width: "100%",
      display: "flex",
      minHeight: "600px",
      alignItems: "center",
      justifyContent: "center",
    },
    subtitle: {
      opacity: "0.4",
      paddingBottom: "30px",
    },
    largeImage: {
      width: "100%",
    },
    body: {
      lineHeight: 1.8,
      display: "-webkit-box",
      boxOrient: "vertical",
      lineClamp: 3,
      wordBreak: "break-all",
      overflow: "hidden",
    },

    testimonialCard: {
      backgroundColor: "#fff",
      padding: "10px",
      minHeight: "200px",
      display: "flex",
      alignItems: "center",
    },
    testimonialStatement: {
      paddingBottom: "25px",
    },
    testimonialPosition: {
      fontSize: "14px",
      opacity: "0.6",
    },
  };
};
// @ts-ignore
const useStyles = makeStyles(styles);
export default useStyles;
