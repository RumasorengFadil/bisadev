import { BlogTag } from "./blogTag"
import { Category } from "./category"
import { Comment } from "./comments"
import { User } from "./user"

export interface Blog {
    id: string,
    category_id:string,
    title: string,
    user:User,
    tags: BlogTag[],
    comments: Comment[],
    slug: string,
    content: string,
    excerpt: string,
    status: string,
    thumbnail: string,
    category: Category,
    created_at:string,
    updated_at:string,
    published_at:string,
    views:string,
}
