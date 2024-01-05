import type { Post } from '$lib/types'

export async function load({ fetch, params }) {
	const response = await fetch('../../api/posts')
	const posts: Post[] = (await response.json()).filter((post: { categories: any[] }) =>
		post.categories.includes(params.category)
	)

	console.log(posts)

	return { posts }
}
