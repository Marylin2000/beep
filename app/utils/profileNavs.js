import { FaHeart, FaShoppingBag, FaShoppingCart, FaStoreAlt } from "react-icons/fa"
import { MdOutlineHistory, MdOutlineMailOutline } from "react-icons/md"

export const profileNav = [


    {
        title:"Order",
        icon:<FaShoppingBag size={25} />,
        link:"/profile/order",

    },
    {
        title:"Inbox",
        icon:<MdOutlineMailOutline size={25} />,
        link:"",

    },{
        title:"Cart",
        icon:<FaShoppingCart size={25}/>,
        link:"/cart",

    },{
        title:"Followed seller",
        icon:<FaStoreAlt size={25}/>,
        link:"",

    },{
        title:"Recently viewed",
        icon:<MdOutlineHistory size={25}/>,
        link:"",

    },
    
]