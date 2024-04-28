'use client'

import { useFeed } from '@/contexts/feedContext';
// components
import { Post } from '../Post';

// hooks
import { useState } from 'react';

export function Posts() {

	const { feed } = useFeed()

	/**
	 * when you reach the bottom, load in more posts
	 */
	// const loadMore = () => {
	// 	setPosts([...posts, 1, 2, 3]);
	// }

	return (
		<div className='flex flex-col justify-center gap-4'>
			{
				feed.map((post, index) => (
					<Post post={post} key={index}/>
				))
			}
		</div>
	)
}