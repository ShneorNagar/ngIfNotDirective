import {
  Component,
  VERSION,
  Injectable,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  posts$: Observable<Post[]>;
  posts: Post[];
  ifNotValue: boolean;

  constructor(private service: MyService, private cdr: ChangeDetectorRef) {
    this.initPosts();
    setInterval(() => {
      this.ifNotValue = !this.ifNotValue;
      this.cdr.markForCheck();
    }, 1000)
  }

  initPosts() {
    this.posts$ = this.service.getPosts();
    this.posts$.subscribe((p) => {
      this.posts = p;
      this.cdr.markForCheck();
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class MyService {
  constructor(private httpClient: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  getCurrentUser(): Observable<User> {
    return null;
  }

  getUserItems(uid: string): Observable<Item[]> {
    return null;
  }

  // TODO:
  getCurrentUserItems(): Observable<Item[]> {
    const items$ = this.getCurrentUser().pipe(
      switchMap((user) => this.getUserItems(user.uid))
    );
    return items$;
  }
}

export interface User {
  uid: string;
}

export interface Item {}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
