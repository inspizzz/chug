'use client'

// components
import { Post } from '../Post';

// hooks
import { useState } from 'react';

export function Posts() {

	const [ posts, setPosts ] = useState([1, 2, 3]);

	/**
	 * when you reach the bottom, load in more posts
	 */
	const loadMore = () => {
		setPosts([...posts, 1, 2, 3]);
	}

	return (
		<div className='flex flex-col justify-center gap-4'>
			{
				posts.map((post, index) => (
					<Post content={post} key={index}/>
				))
			}
		</div>
	)
}