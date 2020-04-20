import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import { Post } from '../models/post.models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
    this.getPosts();
   }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts).then(() => this.emitPosts()
    );
  }
  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data ) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }


  /**
   * Cette méthode doit suivre cette démarche :
   * 1 - enregistrement en base de données du paramètre newPost seul, ç ane sert à rien de re sauvegarder ceux qui sont déjà en BDD
   * 2 - une fois que cet enregistrement s'est bien déroulé, déclancher un appel au getPosts ( = appel BDD ) afin de mettre à jour le postsSubject
   *
   *    L'objectif global est qu'à chaque action (ajout, modification, suppression) provenant de n'importe où dans l'application
   *    ton "observable" soit à jour avec ta base de données. Si pendant une action, ta base de donnée plante, tu mets quand même à jour
   *    l'observable postsSubject
   *
   * @param newPost
   */
  createNewPost(newPost: Post) {
    // exemple de log : dans ton navigateur, fait F12 et va voir dans l'onglet console
    console.log('newPost dans le service :', newPost);
    this.posts.push(newPost);
    this.savePosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if (postEl === post){
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  removeAllPost(posts: number) {
    this.posts.splice(posts);
  }
}
