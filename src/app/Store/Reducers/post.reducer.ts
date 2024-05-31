import { createReducer, on } from "@ngrx/store";
import { Post } from "src/app/models/allInterfaces";
import { addPosts, getPostSuccess } from "../Actions/post.action";


export interface PostState {
    posts: ReadonlyArray<Post>
}

const initialState: ReadonlyArray<Post> = []

export const postReducer = createReducer(
    initialState,
    on(getPostSuccess, (state, {post}) => [...post]),
    on(addPosts, (state, post) => [...state, post])  /* on 'addPost' Action is trigger this reducer takes the initial 
    state and add the newly post inside that state */  
)  


function getMockData(): Post[]{
    let post1:Post = {
        userId: 101,
        title: "This is first post title",
        body: "This is first post body"
    }

    let post2:Post = {
        userId: 101,
        title: "This is second post title",
        body: "This is second post body"
    }

    let post3:Post = {
        userId: 101,
        title: "This is third post title",
        body: "This is third post body"
    }
    const posts = [post1, post2, post3]
    return posts
}