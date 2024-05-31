import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { StoreModule } from '@ngrx/store';
import { postReducer } from './Store/Reducers/post.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { enviroment } from 'src/enviroment/enviroment.stage';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './Store/Effects/post.effects';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({posts: postReducer}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: enviroment.production }),
    EffectsModule.forRoot([PostEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
