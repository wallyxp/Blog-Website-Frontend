import React from 'react'
import './singlepost.css'

export default function SinglePost(){
    return(
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://www.digitaltrends.com/wp-content/uploads/2023/05/motorola-razr-plus-2023-hands-on-1.jpg?fit=720%2C479&p=1" alt="" className="singlePostImg"/>
                <h1 className="singlePostTitle">
                    Lorem Ipsum
                    <div className="singlePostEdit">
                        <i class="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i class="singlePostIcon fa-sharp fa-solid fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Dona</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lectus tristique, aliquam justo quis, pharetra elit. Curabitur et ante ut ex condimentum vestibulum. Duis convallis metus a augue auctor, nec ultricies nisi consequat. Nulla facilisi. Ut rhoncus aliquam sem in posuere. In hac habitasse platea dictumst. Sed convallis tristique diam, non vulputate tortor imperdiet et. Aliquam erat volutpat. Sed at libero vehicula, sollicitudin felis ut, lacinia mauris. Nunc tristique sem at erat fermentum, ut fringilla metus sagittis. Nullam malesuada, turpis ac venenatis consequat, dolor mi pellentesque ligula, sed fringilla lectus lectus non magna. Proin pharetra aliquet arcu.
                </p>
            </div>
        </div>
    )
}