import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { MainService } from "src/app/services/main.service";
import { getPostSuccess, getPosts } from "../Actions/post.action";
import { catchError, exhaustMap, map, mergeMap, throwError } from "rxjs";

@Injectable()
export class PostEffects{


    loadPosts$ = createEffect(() =>
        this.actions$.pipe(
          ofType(getPosts),
          mergeMap(() =>
            this.mainService.getPosts().pipe(
              map(posts => getPostSuccess({ post: posts })),
              catchError(error => {  throw error })
            )
          )
        )
      );

    constructor(private actions$: Actions, private mainService: MainService){}



}