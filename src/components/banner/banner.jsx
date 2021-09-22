import classes from "./banner.module.css";
import {useLocation} from "react-router-dom";

const pagesBannerReq = [
    {
        pageName:'HOME',
        pageURL:'/',
        bannerText:'THE GO-TO IN SCHOOL MANAGEMENT',
        bannerToon: null
    },
    {
        pageName:'CONTACT',
        pageURL:'/contact-us',
        bannerText:'GET SUPPORT FROM OUR TEAM',
        bannerToon: null
    },
    {
        pageName:'BILLING',
        pageURL:'/billing',
        bannerText:'JUST ENOUGH TO MEET YOUR BUDGET',
        bannerToon: null
    },
    {
        pageName:'SERVICES',
        pageURL:'/product-and-services',
        bannerText:'SIMPLY THE BEST, READ WHY',
        bannerToon: null
    },
    {
        pageName:'DOWNLOAD',
        pageURL:"/download",
        bannerText:'GET SCHOOLi WITH AMAZING FEATURES',
        bannerToon: null
    },
]
 

    const bannerInfoSelector = (selector)=> {
       const arr = pagesBannerReq
                   .filter(page =>page.pageURL ===selector)
                   .map(chosenBanner=> <h1 key ={chosenBanner.pageName}>{chosenBanner.bannerText}</h1>);
        return arr;
    }


    function Banner(){
        const currentPath = useLocation().pathname;
        
        return(
            <div className = {classes.mainBanner}>
               {bannerInfoSelector(currentPath)}
            </div>
        )
    }

export default Banner;

