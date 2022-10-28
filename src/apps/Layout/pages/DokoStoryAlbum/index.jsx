import React from 'react'
import cls from './DokoStoryAlbum.module.scss'
import {dokoStory} from "../../../../utils/dokoStory";


const DokoStoryAlbum = () => {
  return (
    <div className={cls.root}>
      <div className='container'>
        <ul className={cls.albumList}>
          {
            dokoStory.map(story => (
              <li key={story.id}>
                <story.itemIcon/>
                <div className={cls.image}>
                  <img src={story.image} alt="album image"/>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default DokoStoryAlbum
