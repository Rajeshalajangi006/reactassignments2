import './index.css'


const ThumbnailItem =(props)=>{
   const {clickedImage,List}=props
   const {thumbnailUrl,thumbnailAltText,imageUrl}=List
    const images=()=>{
       clickedImage(imageUrl)
    }

    return(            
        <div className='lowerimages'>
           <button onClick={images}> <img src={thumbnailUrl}  alt={thumbnailAltText}/> </button>
        </div>
    )
}
export default ThumbnailItem