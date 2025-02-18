
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import Logo from "../../assets/svg/LOGO (1).svg";
// import { useTranslation } from 'react-i18next';

// const pages = ['Главная', 'Фильмы'];
// const settings = ['Главная', 'Account'];

// const Header = () => {
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);
//     const [activeButton, setActiveButton] = React.useState(null);
//     const [lang, setLang] = React.useState('RU');
//     const { t, i18n } = useTranslation();

//     const handleChangeLang = () => {
//         if (lang === 'RU') {
//             i18n.changeLanguage('en')
//             localStorage.setItem('lang', 'en')
//             setLang('EN')
//             return;
//         }
//         i18n.changeLanguage('ru')
//         localStorage.setItem('lang', 'ru')
//         setLang("RU")
//     }

//     React.useEffect(() => {
//         const lang = localStorage.getItem('lang')
//         setLang(lang.toUpperCase() || "RU")
//     }, [])

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };
//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = () => {
//         setAnchorElNav(null);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     const handleButtonClick = (page) => {
//         setActiveButton(page);
//         handleCloseNavMenu();
//     };

//     return (
//         <AppBar position="relative" elevation={0} sx={{ background: 'transparent', zIndex: 10 }}>
//             <Container maxWidth="lg" sx={{ background: '', }}>
//                 <Toolbar disableGutters sx={{ background: 'transparent' }}>
//                     <img src={Logo} alt="logo" style={{ marginRight: '70px', marginLeft: '20px' }} />

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                             <MenuIcon />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={handleCloseNavMenu}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={() => handleButtonClick(page)}>
//                                     <Typography textAlign="center">{t(page)}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         {pages.map((page) => (
//                             <Button
//                                 key={page}
//                                 onClick={() => handleButtonClick(page)}
//                                 sx={{
//                                     my: 2,
//                                     color: 'white',
//                                     display: 'block',
//                                     position: 'relative',
//                                     '&::after': {
//                                         content: '""',
//                                         position: 'absolute',
//                                         bottom: 0,
//                                         left: 0,
//                                         width: activeButton === page ? '100%' : '0%',
//                                         height: '2px',
//                                         backgroundColor: 'red',
//                                         transition: 'width 0.3s',
//                                     },
//                                     '&:hover::after': {
//                                         width: '100%',
//                                     },
//                                 }}
//                             >
//                                 {t(page)}
//                             </Button>
//                         ))}
//                     </Box>

//                     <Box sx={{ flexGrow: 0, display: 'flex', gap: '20px', alignItems: 'center' }}>
//                         <Typography variant='h5'
//                             onClick={handleChangeLang}
//                             sx={{
//                                 cursor: 'pointer'
//                             }}>
//                             {lang}
//                         </Typography>
//                         <Tooltip title="Open settings">
//                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                 <Avatar alt="Alex Sharp" src="https://img5.lalafo.com/i/avatar/00/81/0c/afb6ca8349249bbe33009a1e41.jpeg" />
//                             </IconButton>
//                         </Tooltip>
//                         <Menu
//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={handleCloseUserMenu}
//                         >
//                             {settings.map((setting) => (
//                                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                                     <Typography textAlign="center">{t(pages)}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     )
// }
// export default Header;




import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "../../assets/svg/LOGO (1).svg";
import { useTranslation } from 'react-i18next';

const pages = ['Главная', 'Фильмы'];
const settings = ['Главная', 'Account'];

const Header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [activeButton, setActiveButton] = React.useState(null);
    const [lang, setLang] = React.useState('RU');
    const { t, i18n } = useTranslation();

    const handleChangeLang = () => {
        if (lang === 'RU') {
            i18n.changeLanguage('en');
            localStorage.setItem('lang', 'en');
            setLang('EN');
        } else {
            i18n.changeLanguage('ru');
            localStorage.setItem('lang', 'ru');
            setLang('RU');
        }
    }

    React.useEffect(() => {
        const storedLang = localStorage.getItem('lang');
        if (storedLang) {
            setLang(storedLang.toUpperCase());
        }
    }, []);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleButtonClick = (page) => {
        setActiveButton(page);
        handleCloseNavMenu();
    };

    return (
        <AppBar position="relative" elevation={0} sx={{ background: 'transparent', zIndex: 10, mb: '-80px' }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ background: 'transparent' }}>
                    <img src={Logo} alt="logo" style={{ marginRight: '70px', marginLeft: '20px' }} />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleButtonClick(page)}>
                                    <Typography textAlign="center">{t(page)}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleButtonClick(page)}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                    position: 'relative',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: activeButton === page ? '100%' : '0%',
                                        height: '2px',
                                        backgroundColor: 'red',
                                        transition: 'width 0.3s',
                                    },
                                    '&:hover::after': {
                                        width: '100%',
                                    },
                                }}
                            >
                                {t(page)}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0, display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <Typography variant='h5'
                            onClick={handleChangeLang}
                            sx={{
                                cursor: 'pointer'
                            }}>
                            {lang}
                        </Typography>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Alex Sharp" src="https://img5.lalafo.com/i/avatar/00/81/0c/afb6ca8349249bbe33009a1e41.jpeg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{t(setting)}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
