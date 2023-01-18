import React, {useState} from 'react'
import data from '../Data/dataPhotos';
const allCategories = [...new Set(data.map((item) => item.category))];

const Photos = ({setIsOpen}) => {
  const [photos, setPhotos] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterPhotos = (category) => {
    const newPhotos = data.filter((item) => item.category === category);
    setPhotos(newPhotos);
  }
  React.useEffect(() =>{
    setIsOpen(false)
  }, [])
  
  return (
    <section className='photos'>
      <div className='photos__gallery'>
        {photos.map((item) => {
          return (
            <img className='photos__gallery__img' src={require(`../Images/${item.url}`)} />
          )
        })}
      </div>
      <nav className='photos__nav'>
        <div className='photos__nav__links'>
        {categories.map((category, index) => {
          return (
            <button key={index} className='photos__nav__link' onClick={() => filterPhotos(category)}>{category}</button>
          )
        })}
        </div>
        <div className='photos__nav__toggle'></div>
      </nav>
    </section>
    
  )
}

export default Photos;