import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import appRoutes from './app.routing';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { NotesComponent } from './components/notes/notes.component';
import { TodosComponent } from './components/todos/todos.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { LucideAngularModule,Bookmark,Check,AlignLeft } from 'lucide-angular';
import { BookmarkCardComponent } from './components/bookmark-card/bookmark-card.component';

@NgModule({
  declarations: [
    AppComponent,
    BookmarksComponent,
    NotesComponent,
    TodosComponent,
    TabsComponent,
    BookmarkCardComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes),
    LucideAngularModule.pick({Bookmark,Check,AlignLeft})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
