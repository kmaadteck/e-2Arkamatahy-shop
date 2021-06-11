import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  cartActions: {
    justifyContent: "space-between",
    // flexDirection: "column",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
    /* "& .MuiButtonBase-contained": {
      marginLeft: `calc(1rem + ${theme.spacing(1)}px),`,
    }, */
    /*  "& .MuiCardActions-spacing": {
      marginLeft: `calc(1rem + ${theme.spacing(4)}px),`,
      flexDirection: "column",
    }, */
  },
}));
