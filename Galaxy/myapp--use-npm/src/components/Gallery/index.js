import ThumbnailItem from '../ThumbnailItem'
import './index.css'
import {Component} from 'react'
const imagesList = [
    {
      id: 0,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-pond-thumbnail-img.png',
      imageAltText: 'nature mountain with pond',
      thumbnailAltText: 'nature mountain with pond thumbnail',
    },
    {
      id: 1,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-sunset-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-sunset-thumbnail-img.png',
      imageAltText: 'nature sunset',
      thumbnailAltText: 'nature sunset thumbnail',
    },
    {
      id: 2,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-ocean-thumbnail-img.png',
      imageAltText: 'nature mountain with ocean',
      thumbnailAltText: 'nature mountain with ocean thumbnail',
    },
    {
      id: 3,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-mountain-with-forest-thumbnail-img.png',
      imageAltText: 'nature mountain with forest',
      thumbnailAltText: 'nature mountain with forest thumbnail',
    },
    {
      id: 4,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-leaves-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-leaves-thumbnail-img.png',
      imageAltText: 'nature leaves',
      thumbnailAltText: 'nature leaves thumbnail',
    },
    {
      id: 5,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-tree-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-tree-thumbnail-img.png',
      imageAltText: 'nature tree',
      thumbnailAltText: 'nature tree thumbnail',
    },
    {
      id: 6,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-waterfall-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-waterfall-thumbnail-img.png',
      imageAltText: 'nature waterfall',
      thumbnailAltText: 'nature waterfall thumbnail',
    },
    {
      id: 7,
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/nature-river-img.png',
      thumbnailUrl:
        'https://assets.ccbp.in/frontend/react-js/nature-river-thumbnail-img.png',
      imageAltText: 'nature river',
      thumbnailAltText: 'nature river thumbnail',
    },
  ]
class Gallery extends Component{
    state={initialUrl:imagesList[0].imageUrl}
    clickedImage=(imageUrl)=>{
       this.setState({initialUrl:imageUrl})
     }
    render(){ 
      const {initialUrl}=this.state
 return   (
      <div className="maincontainer">
        <div className='bigimage'><img src={initialUrl} alt="coorect" className='image'/></div>
        <h1>Nature Photography</h1>
        <p>Nature Photography by Rahul</p>
        <div>
        {
              imagesList.map((eachitem)=>(
              <ThumbnailItem List={eachitem} key={eachitem.id} clickedImage={this.clickedImage}/>
              ))
        }
        </div>
      </div>
    )
}
}
    export default Gallery