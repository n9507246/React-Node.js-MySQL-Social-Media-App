import classes from'./styles.module.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';

export default function (){
    return(
        <div className={classes.navbar}>
            <div className={classes.left}>
                <Link to='/'  style={{textDecoration: 'none'}}>
                    <span>My social</span>
                </Link>
                <HomeOutlinedIcon/>
                <DarkModeOutlinedIcon/>
                <GridViewOutlinedIcon/>
                <div className={classes.search}>
                    <SearchOutlinedIcon/>
                    <input type='text' placeholder='Search...'/>
                </div>
            </div>
            <div className={classes.right}>
                <PersonOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon/>
                <div className={classes.user}>
                    <img src='https://cs7.pikabu.ru/post_img/big/2014/07/22/6/1406017582_1886645288.jpg' alt='https://nevateka.ru/upload/iblock/bfd/mcibvfdrfow139gharqpg3nlcgqdk8bn/0aa07cc1-2eab-47f2-8a5c-e147fa415dfd.png'/>
                    <span>John Doe</span>
                </div>
            </div>
        </div>
    )
}