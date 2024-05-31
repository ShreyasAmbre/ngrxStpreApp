import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/allInterfaces';
import { MainService } from 'src/app/services/main.service';
import { getPosts, addPosts } from '../../Store/Actions/post.action'
import { Store } from '@ngrx/store';
import { PostState } from 'src/app/Store/Reducers/post.reducer';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  allPosts: Post[] = []
  ptitle:string = ""
  pbody:string = ""

  /* This 'post' should be same as key given to reducre in app.module.ts
  Also need to assign type 'PostState' to Store in constructor which is created in reducer*/
  posts$ = this.store.select('posts') 

  constructor(private mainService: MainService, private store: Store<PostState>){}

  ngOnInit(): void {
    this.getAllPosts()
  }


  getAllPosts(){
    this.store.dispatch(getPosts())
    // this.mainService.getPosts().subscribe((res:any) => {
    //   this.allPosts = res
    //   console.log(this.allPosts)
    // })

    /*This is one way to get the data from Store using Reducer 
    But efficient way is use SELECTOR to get data from Store*/
    this.posts$.subscribe(res => {
      console.log("DATA FROM STORE ===>", res)
    })
    
  }

  addSinglePost(){
    let reqObj: Post = {
      userId: 15,
      id: 101,
      title: this.ptitle,
      body: this.pbody,
    }
    this.store.dispatch(addPosts(reqObj))

    // this.mainService.addPost(reqObj).subscribe((res:any) => {
    //   console.log("POST ADDED =>",res)
    //   this.ptitle, this.pbody = ""
    //   this.getAllPosts()
    // })
  }
  

}
