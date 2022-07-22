
import Image from './../Image/Image';
import classes from "./Gallery.module.scss"
import classnames from 'classnames';
import { MouseEvent } from 'react';


function Gallery() {

    const animation = (e: MouseEvent<HTMLDivElement>) => {
        if(e.target instanceof HTMLImageElement){
            e.target.closest("div")?.classList.add("fourth")
        };
        
    }   

    return ( 
    <div className={classes.main_gallery}>
        <div className={classes.header}>
            <h1 className={classes.title}>
                Лучшие картинки
            </h1>
        </div>
    
        <div className={classes.gallery} >
            <div onMouseEnter={animation} className={classnames(classes.imgWrap, classes.first)}>
                <Image  imgUrl='img1.jpg' />
            </div>
            <div onMouseEnter={animation} className={classnames(classes.imgWrap, classes.second)}>
                <Image  imgUrl='img2.jpg' />
            </div>
            <div onMouseEnter={animation} className={classnames(classes.imgWrap, classes.third)}>
                <Image  imgUrl='img3.jpg' />
            </div>
            <div onMouseEnter={animation} className={classnames(classes.imgWrap, classes.fourth)}>
                <Image  imgUrl='img4.jpg' />
            </div>
            <div onMouseEnter={animation} className={classnames(classes.imgWrap, classes.fifth)}>
                <Image  imgUrl='img4.jpg' />
            </div>
            <div onMouseEnter={animation} className={classnames(classes.imgWrap, classes.sixth)}>
                <Image  imgUrl='img3.jpg' />
            </div>
        </div>
    </div>
     );
}

export default Gallery;