import React, {useState, useEffect} from 'react'
import data from '../Data/dataPhotos';
import {HiOutlineChevronDoubleLeft} from 'react-icons/hi';
const allCategories = [...new Set(data.map((item) => item.category))];

const Photos = ({setIsOpen}) => {
  const [photos, setPhotos] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterPhotos = (category) => {
    const newPhotos = data.filter((item) => item.category === category);
    setPhotos(newPhotos);
  }
  useEffect(() =>{
    setIsOpen(false)
  }, [])
  useEffect(() =>{
    document.getElementById('gallery').scrollTo(0, 0)
  }, [photos])

  const[isHidden, setIsHidden] = useState(true);
  
  return (
    <section className='photos'>
      <div className='photos__gallery' id='gallery'>
        {photos.map((item) => {
          return (
            <img className='photos__gallery__img' src={require(`../Images/${item.url}`)} />
          )
        })}
      </div>
      <nav className='photos__nav'>
        <div className='photos__nav__links' style={{display: isHidden ? 'none' : 'flex'}}>
        {categories.map((category, index) => {
          return (
            <button key={index} className='photos__nav__link' onClick={() => filterPhotos(category)}>{category}</button>
          )
        })}
        </div>
        <div className='photos__nav__toggle' onClick={() => setIsHidden(!isHidden)}>
          <p className='photos__nav__toggle__text'>{isHidden ? "show categories" : "hide"}</p>
        </div>
      </nav>
    </section>
    
  )
}

export default Photos;