import React from "react";
import clsx from "clsx";
import {
    Drawer,
    IconButton,
    List, ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Button,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/Inbox";
import MenuIcon from "@material-ui/icons/Menu";


const drawerWidth = 240

const useStyle = makeStyles(theme => ({
    root: {
        display: "flex",
    },
    MenuIcon: {
        [theme.breakpoints.down("sm")]: {
            marginLeft: "500px"
        },

        [theme.breakpoints.only("xs")]: {
            marginLeft: "226px"
        },
        [theme.breakpoints.only("lg")]: {
            display: "none",

        },
        color: "white",
        marginLeft: "220px",

    },
    title1: {
        marginLeft: "20px",
        borderRadius: "30px",
        backgroundColor: "#eadb07",
        padding: "10px 25px",
        color: "#018e1a",
        fontSize: "10px",
        fontWeight: "bolder"

    },
    title2: {
        border: "1px solid #f5f4f0",
        marginLeft: "20px",
        borderRadius: "30px",
        padding: "5px 15px",
        color: "#f5f4f0",
    },
    buttonBar: {
        [theme.breakpoints.down("md")]: {
            display: "none"
        }
    },
    hide: {
        display: "none"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItem: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-start"
    }
}));

const AppBarCollapse = () => {
    const classes = useStyle();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }
    return (
        <div className={classes.root}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide, [classes.MenuIcon])}

            >
                <MenuIcon />
            </IconButton>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            // ModalProps={{
            //     keepMounted: true
            // }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['About Us', "How It Works", "Contact Us", "FAQ", "FEDPAY"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />

                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {["Sign In", "Download App"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.buttonBar}>

                <Button
                    className={classes.title2}
                >
                    Sign in

                  </Button>

                <Button
                    className={classes.title1}
                >
                    Download App
                    </Button>
            </div>

        </div>
    );
}

export default AppBarCollapse;
