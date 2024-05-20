import React from 'react';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import EditNoteIcon from '@mui/icons-material/EditNote';
import LibraryAddCheckOutlinedIcon from '@mui/icons-material/LibraryAddCheckOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import styled from '@mui/material/styles/styled';
import { useState } from 'react';

const ListItemIconStyle = styled(ListItemIcon)(() => ({
    
}));

const ListItemTextStyle = styled(ListItemText)(() => ({
    marginLeft: '-15px',
}));

const ListItemStyle = styled(ListItem)(() => ({
    width: '90%',
    margin: 'auto',
}));

const ListItemButtonStyle = styled(ListItemButton)(() => ({
    borderRadius: '10px',
}));

const Sidebar = () => {
    const [activeItem, setActiveItem] = useState(window.location.pathname);

    return (
        <Box
            sx={{
                height: '100%',
                backgroundColor: 'white',
                position: 'relative',
                top: 0,
                left: 0,
            }}
        >
            <nav>
                <List>
                    <ListItemStyle disablePadding>
                        <ListItemButtonStyle 
                            component="a" 
                            href="/" 
                            sx={activeItem === "/" ? { backgroundColor: '#E8F1FD', color: '#1366D9', pointerEvents: 'none'} : {}}
                            onClick={() => setActiveItem("/")}
                        >
                            <ListItemIconStyle sx={activeItem === "/" ? { color: '#1366D9'} : {}}>
                                <HomeOutlinedIcon />
                            </ListItemIconStyle>
                            <ListItemTextStyle primary="Dashboard" />
                        </ListItemButtonStyle>
                    </ListItemStyle>
                    <ListItemStyle disablePadding>
                        <ListItemButtonStyle 
                            component="a" 
                            href="/frontdesk"
                            sx={activeItem === "/frontdesk" ? { backgroundColor: '#E8F1FD', color: '#1366D9', pointerEvents: 'none' } : {}}
                            onClick={() => setActiveItem("/frontdesk")}
                        >
                            <ListItemIconStyle sx={activeItem === "/frontdesk" ? { color: '#1366D9'} : {}}>
                                <EditNoteIcon />
                            </ListItemIconStyle>
                            <ListItemTextStyle primary="Front desk" />
                        </ListItemButtonStyle>
                    </ListItemStyle>
                    <ListItemStyle disablePadding>
                        <ListItemButtonStyle 
                            component="a" 
                            href="/guest"
                            sx={activeItem === "/guest" ? { backgroundColor: '#E8F1FD', color: '#1366D9', pointerEvents: 'none' } : {}}
                            onClick={() => setActiveItem("/guest")}
                        >
                            <ListItemIconStyle sx={activeItem === "/guest" ? { color: '#1366D9'} : {}}>
                                <LibraryAddCheckOutlinedIcon />
                            </ListItemIconStyle>
                            <ListItemTextStyle primary="Guest" />
                        </ListItemButtonStyle>
                    </ListItemStyle>
                    <ListItemStyle disablePadding>
                        <ListItemButtonStyle 
                            component="a" 
                            href="/rooms"
                            sx={activeItem === "/rooms" ? { backgroundColor: '#E8F1FD', color: '#1366D9', pointerEvents: 'none' } : {}}
                            onClick={() => setActiveItem("/rooms")}
                        >
                            <ListItemIconStyle sx={activeItem === "/rooms" ? { color: '#1366D9'} : {}}>
                                <BookmarkBorderOutlinedIcon />
                            </ListItemIconStyle>
                            <ListItemTextStyle primary="Rooms" />
                        </ListItemButtonStyle>
                    </ListItemStyle>
                    <ListItemStyle disablePadding>
                        <ListItemButtonStyle 
                            component="a" 
                            href="/deal"
                            sx={activeItem === "/deal" ? { backgroundColor: '#E8F1FD', color: '#1366D9', pointerEvents: 'none' } : {}}
                            onClick={() => setActiveItem("/deal")}
                        >
                            <ListItemIconStyle sx={activeItem === "/deal" ? { color: '#1366D9'} : {}}>
                                <LocalOfferOutlinedIcon />
                            </ListItemIconStyle>
                            <ListItemTextStyle primary="Deal" />
                        </ListItemButtonStyle>
                    </ListItemStyle>
                    <ListItemStyle disablePadding>
                        <ListItemButtonStyle 
                            component="a" 
                            href="/rate"
                            style={activeItem === "/rate" ? { backgroundColor: '#E8F1FD', color: '#1366D9', pointerEvents: 'none' } : {}}
                            onClick={() => setActiveItem("/rate")}
                        >
                            <ListItemIconStyle sx={activeItem === "/rate" ? { color: '#1366D9'} : {}}>
                                <MonetizationOnOutlinedIcon />
                            </ListItemIconStyle>
                            <ListItemTextStyle primary="Rate" />
                        </ListItemButtonStyle>
                    </ListItemStyle>
                </List>
            </nav>
        </Box>
    );
}

export default Sidebar;
