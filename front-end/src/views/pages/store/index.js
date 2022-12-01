import { Add, KeyboardArrowDownRounded, Star } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Menu as MenuMUI,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Layout from "../../../components/layout";
import StoreItem from "../../../components/store-item";
import "./store.scss";

const StoreItemSample = [
  {
    avatar:
        "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/317076314_1769032306828805_5106915471589013829_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OB319lJRjDgAX9ZBEz_&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCb1ro1sSR6dKM3B_ERfSt6TTPbqIm2spMk4KdX12ym6w&oe=6389A0E3",
    title: "AAAAAAAA",
    address: "126B Đường 2 Tháng 9, Q. Hải Châu, TP. Đà Nẵng",
  },
  {
    avatar:
        "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/317076314_1769032306828805_5106915471589013829_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OB319lJRjDgAX9ZBEz_&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCb1ro1sSR6dKM3B_ERfSt6TTPbqIm2spMk4KdX12ym6w&oe=6389A0E3",
    title: "AAAAAAAA",
    address: "126B Đường 2 Tháng 9, Q. Hải Châu, TP. Đà Nẵng",
  },
  {
    avatar:
        "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/317076314_1769032306828805_5106915471589013829_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OB319lJRjDgAX9ZBEz_&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCb1ro1sSR6dKM3B_ERfSt6TTPbqIm2spMk4KdX12ym6w&oe=6389A0E3",
    title: "AAAAAAAA",
    address: "126B Đường 2 Tháng 9, Q. Hải Châu, TP. Đà Nẵng",
  },
  {
    avatar:
        "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/317076314_1769032306828805_5106915471589013829_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=OB319lJRjDgAX9ZBEz_&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCb1ro1sSR6dKM3B_ERfSt6TTPbqIm2spMk4KdX12ym6w&oe=6389A0E3",
    title: "AAAAAAAA",
    address: "126B Đường 2 Tháng 9, Q. Hải Châu, TP. Đà Nẵng",
  },
];

const Menu = (props) => {
  return (
      <MenuMUI
          open={props.open}
          onClose={props.handleClose}
          anchorEl={props.anchorEl}
      >
        <MenuItem className="rate" onClick={props.handleClose}>
          <Typography>5</Typography>
          <Star className="start" />
        </MenuItem>
        <MenuItem className="rate" onClick={props.handleClose}>
          <Typography>4</Typography>
          <Star className="start" />
        </MenuItem>
        <MenuItem className="rate" onClick={props.handleClose}>
          <Typography>3</Typography>
          <Star className="start" />
        </MenuItem>
        <MenuItem className="rate" onClick={props.handleClose}>
          <Typography>2</Typography>
          <Star className="start" />
        </MenuItem>
        <MenuItem className="rate" onClick={props.handleClose}>
          <Typography>1</Typography>
          <Star className="start" />
        </MenuItem>
      </MenuMUI>
  );
};

const PopupAdd = (props) => {
  return (
      <Dialog open={props.open} onClose={props.handleClose}>
        <DialogTitle>New Store</DialogTitle>
        <DialogContent>
          <TextField
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
          />
          <TextField
              margin="dense"
              id="name"
              label="Address"
              type="text"
              fullWidth
              variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Hủy</Button>
          <Button onClick={props.handleClose}>Lưu</Button>
        </DialogActions>
      </Dialog>
  );
};

export const Store = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  return (
      <Layout>
        <div className="action">
          <Button variant="contained" onClick={handleClickPopup}>
            <Add />
          </Button>
          <PopupAdd open={openPopup} handleClose={handleClosePopup} />
          <Button variant="contained" onClick={handleClick}>
            <KeyboardArrowDownRounded />
          </Button>
          <Menu
              open={openMenu}
              anchorEl={anchorEl}
              handleClose={handleClose}
              onClick={handleClick}
          />
        </div>

        <Grid container spacing={2} className="grid-container">
          {StoreItemSample.map((item) => (
              <Grid item xs={4}>
                <StoreItem avatar={item.avatar}></StoreItem>
              </Grid>
          ))}
        </Grid>
      </Layout>
  );
};