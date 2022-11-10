import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { menus } from "./Data";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./style.module.scss";
import clsx from "clsx";
import {
  ArrowDropDownRounded,
  ArrowDropUpRounded,
  TripOrigin,
} from "@mui/icons-material";
import { Collapse } from "@mui/material";

export default function SideMenu(props) {
  const router = useLocation();
  const path = router.pathname;
  const [selected, setSelected] = useState(path.split("/")[1] || "");
  const handleClick = (title) => {
    title.toLowerCase() !== selected.toLowerCase()
      ? setSelected(title)
      : setSelected("");
  };

  return (
    <div className={styles.SideMenu}>
      <List className={styles.list} component="nav">
        {menus.map((item, index) => {
          if (item.children && item.children.length) {
            return (
              <div key={item.title + index}>
                <ListItem
                  button
                  onClick={() => handleClick(item.title)}
                  className={styles.MenuItem}
                >
                  <ListItemIcon
                    className={clsx(
                      styles.ListItemIcon,
                      path.includes(item.title.toLowerCase()) && styles.active
                    )}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    className={clsx(
                      styles.Button,
                      styles.ListText,
                      path.includes(item.title.toLowerCase()) && styles.active
                    )}
                  />
                  <Box
                    className={clsx(
                      styles.ListIcon,
                      path.includes(item.title.toLowerCase()) && styles.active
                    )}
                  >
                    {item.title.toLowerCase() === selected.toLowerCase() ? (
                      <ArrowDropUpRounded />
                    ) : (
                      <ArrowDropDownRounded />
                    )}
                  </Box>
                </ListItem>
                <Collapse
                  in={item.title.toLowerCase() === selected.toLowerCase()}
                  timeout="auto"
                  unmountOnExit
                >
                  {item.children.map((sub, index) => (
                    <ListItem className={styles.ListItemSub} key={index}>
                      <NavLink
                        to={sub.path}
                        key={index}
                        className={styles.linkSub}
                      >
                        <Box className={styles.iconData}>
                          {path === sub.path && <TripOrigin />}
                        </Box>
                        <ListItemText
                          primary={sub.title}
                          className={clsx(
                            styles.listItemButton,
                            path === sub.path && styles.subActive
                          )}
                        />
                      </NavLink>
                    </ListItem>
                  ))}
                </Collapse>
              </div>
            );
          } else {
            return (
              <ListItem
                key={item.title + index}
                button
                className={styles.MenuItem}
              >
                <NavLink className={styles.link} to={item.path}>
                  <ListItemIcon
                    className={clsx(
                      styles.ListItemIcon,
                      path === item.path && styles.active
                    )}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.title}
                    className={clsx(
                      styles.Button,
                      styles.ListText,
                      path === item.path && styles.active
                    )}
                  />
                </NavLink>
              </ListItem>
            );
          }
        })}
      </List>
    </div>
  );
}
