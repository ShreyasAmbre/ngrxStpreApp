import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/models/allInterfaces";


export const getPosts = createAction('[POST] Get Post')
export const getPostSuccess = createAction(
    '[POST] Get Post Success',
    // (post: Post) => post,
    props<{ post: Post[] }>()
)



export const addPosts = createAction(
    '[POST] Add Post', 
    (post: Post) => post, /* This statement is used to pass the PAYLOAD to set the data in 
    Store or to call API -> Effects -> API */
    
)
export  const addPostSuccess = createAction(
    '[POST] Add Post Success', 
    props<{post: Post}>() // alternate way to pass the PAYLOAD 
)