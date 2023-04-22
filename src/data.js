import img1 from './images/tour-1.jpeg'
import img2 from './images/tour-2.jpeg'
import img3 from './images/tour-3.jpeg'
import img4 from './images/tour-4.jpeg'

export const pageLinks = [
    {id:1, href:'#home', text:'home'},
    {id:2, href:'#about', text:'about'},
    {id:3, href:'#services', text:'services'},
    {id:4, href:'#tours', text:'tours'}

]

export const socialLinks = [
    {id:1, href:"https://www.twitter.com", icon: 'fab fa-twitter'},
    {id:2, href:"https://www.facebook.com", icon: 'fab fa-facebook'},
    {id:3, href:"https://www.squarespace.com/", icon: 'fab fa-squarespace'},
]

export const services = [
    {id:1, title:"Saving Money", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.", icon:'fas fa-wallet fa-fw'},
    {id:2, title:"Endless Hiking", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.", icon:'fas fa-tree fa-fw'},
    {id:3, title:"Amazing Comfort", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.", icon:'fas fa-socks fa-fw'},
]

export const tours = [
    {id:1, img:img1, date:'August 26th, 2020', title:'Tibet Adventure', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country:'China', duration:'6 Days', price:'From $2100' },
    {id:2, img:img2, date:'October 1th, 2020', title:'Best Of Java', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country:'Indonesia', duration:'11 Days', price:'From $1400' },
    {id:3, img:img3, date:'September 15th, 2020', title:'Explore Hong Kong', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country:'Hong Kong', duration:'8 Days', price:'From $5000' },
    {id:4, img:img4, date:'December 5th, 2019', title:'Kenya Highlights', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.', country:'Kenya', duration:'20 Days', price:'From $3300' }
]