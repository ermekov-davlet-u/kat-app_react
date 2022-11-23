import image from "./Image.module.scss"

interface ImagePropType{
    imgUrl: string
}

function Image({ imgUrl }: ImagePropType) {
    return ( 
        <div className={image.wrap}>
            <img src={"/img/" + imgUrl} alt="" className={image.img} />
            <div className={image.img_title}>Title image</div>
        </div>
     );
}

export default Image;