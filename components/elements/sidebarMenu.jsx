import React from 'react'
import Image from 'next/image'
import Profile from '../../static/img/icon/memoji.png'
import Order from '../../static/img/icon/Vector.svg'
import Wallet from '../../static/img/icon/Shape.svg'
import OrderHistory from '../../static/img/icon/OrderHistory.svg'
import Bookmark from '../../static/img/icon/Bookmark.svg'
import Download from '../../static/img/icon/Download.svg'
import Address from '../../static/img/icon/Address.svg'
import Ticket from '../../static/img/icon/Ticket.svg'
import ManageShop from '../../static/img/icon/ManageShop.svg'
import Exit from '../../static/img/icon/Exit.svg'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link'


function SidebarMenu({active}) {
    const [idMenu, idMenuSet] = React.useState([
        {
            name: "آرش",
            email: "arashzarandi@gmail.com"
        }
    ])
    const [openSidebar, setOpenSidebar] = React.useState(true) 

    const handleClick = () => {
       setOpenSidebar(prev => !prev)
    }


    return (
            <aside className={"sidebar_menu" +( openSidebar ? ` ${ "open"}` : '')}>
                <div className={"header_sidebar"}>
                    <div className={"profile_pic"}>
                        <Image src={Profile} alt={"profile"}/>
                    </div>
                    <div className={"id_menu"}>
                        {idMenu.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <p>{item.name}</p>
                                    <p>{item.email}</p>
                                    <span></span>
                                </div>
                            )
                        })}
                    </div>
                    <div className={"link_menu"}>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                        >
                            <ListItemButton selected={active === "wallet"}>
                                <Link href="/user-panel/wallet">
                                    <a>
                                    <ListItemIcon className={"LinkIcon"}>
                                        <Image src={Wallet} alt="Wallet"/>
                                    </ListItemIcon>
                                    <ListItemText  primary="کیف پول" />
                                    </a>
                                </Link>
                                
                            </ListItemButton >
                            <ListItemButton  selected={active === "pendin_orders"}>
                                <Link href="/user-panel/orders">
                                    <a>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={Order} alt="Order" />
                                        </ListItemIcon>
                                        <ListItemText primary="پیگیری سفارشات" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            <ListItemButton  selected={active === "history"}>
                                <Link href="/user-panel/history">
                                    <a>
                                        <ListItemIcon className={"LinkIcon"}>
                                        <Image src={OrderHistory} alt="OrderHistory" />
                                        </ListItemIcon>
                                        <ListItemText primary="تاریخچه خریدهای من" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            <ListItemButton  selected={active === "favorites"}>
                                <Link href="/user-panel/favorites">
                                    <a>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={Bookmark} alt="Bookmark" />
                                        </ListItemIcon>
                                        <ListItemText primary="علاقه مندی ها" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            <ListItemButton selected={active === "downloads"}> 
                                <Link href="/user-panel/downloads">
                                    <a>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={Download} alt="Download" />
                                        </ListItemIcon>
                                        <ListItemText primary="دانلودها" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            <ListItemButton selected={active === "address"}>
                                <Link href="/user-panel/address">
                                    <a>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={Address} alt="Address" />
                                        </ListItemIcon>
                                        <ListItemText primary="آدرس ها" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            <ListItemButton selected={active === "ticket"}>
                                <Link href="/user-panel/tickets">
                                    <a>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={Ticket} alt="Ticket" />
                                        </ListItemIcon>
                                        <ListItemText primary="تیکت های پشتیبانی" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            <ListItemButton selected={active === "managment"}>
                                <Link href="/user-panel/managment">
                                    <a>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={ManageShop} alt="ManageShop" />
                                        </ListItemIcon>
                                        <ListItemText primary="مدیریت فروشگاه" />
                                    </a>
                                </Link>
                            </ListItemButton >
                            <ListItemButton selected={active === "profile"}>
                                <Link href="/user-panel/profile">
                                    <a>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <PersonIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="پروفایل" />
                                    </a>
                                </Link>
                            </ListItemButton>
                            <ListItemButton >
                                <Link href="/signout">
                                    <a>
                                        <ListItemIcon className={"LinkIcon"}>
                                            <Image src={Exit} alt="Exit" />
                                        </ListItemIcon>
                                        <ListItemText primary="خروج" />
                                    </a>
                                </Link>
                            </ListItemButton>

                        </List>
                    </div>
                    <div className={"flotingButton"}>
                               <button onClick={handleClick}>
                                {
                                openSidebar ? <MenuIcon />  : <CloseIcon />}
                               </button>
                    </div>
                </div>
        </aside>
    )
}

export default SidebarMenu