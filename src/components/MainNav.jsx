import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TvIcon from '@mui/icons-material/Tv';
import { useEffect } from 'react';


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);

    useEffect(() => {
        if (value === 0) history.push('/')
        if (value === 1) history.push('/')
        if (value === 2) history.push('/')
        if (value === 3) history.push('/')
    }, [value])

    return (
        <Box sx={{ width: "100%", position: "fixed", bottom: 0, backgroundColor: "#2d313a", zIndex: 100, }}>

            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
                <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
                <BottomNavigationAction label="TV Series" icon={<TvIcon />} />
                <BottomNavigationAction label="Search" icon={<SearchIcon />} />
            </BottomNavigation>
        </Box>
    );
}
