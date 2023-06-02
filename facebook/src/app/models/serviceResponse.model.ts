import { Post } from "./post.model";

export class ServiceResponse {
    posts: Post[];
    comments: Comment[];
}