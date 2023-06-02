import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <img className= 'postImg' src="https://www.digitaltrends.com/wp-content/uploads/2023/05/motorola-razr-plus-2023-hands-on-1.jpg?fit=720%2C479&p=1" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Tech</span>
                <span className="postCat">Music</span>
            </div>
            <span className="postTitle">Lorem Ipsum Dolor Sit Amet</span>
            <hr />
            <span className="postDate">1 hr ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lectus tristique, aliquam justo quis, pharetra elit. Curabitur et ante ut ex condimentum vestibulum. Duis convallis metus a augue auctor, nec ultricies nisi consequat. Nulla facilisi. Ut rhoncus aliquam sem in posuere. In hac habitasse platea dictumst. Sed convallis tristique diam, non vulputate tortor imperdiet et. Aliquam erat volutpat. Sed at libero vehicula, sollicitudin felis ut, lacinia mauris. Nunc tristique sem at erat fermentum, ut fringilla metus sagittis.
        </p>
    </div>
  )
}
