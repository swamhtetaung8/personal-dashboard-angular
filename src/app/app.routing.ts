import { Routes } from '@angular/router';
import { BookmarksComponent } from './components/bookmarks/bookmarks.component';
import { NotesComponent } from './components/notes/notes.component';
import { TodosComponent } from './components/todos/todos.component';

const appRoutes: Routes = [
  {
    path:"bookmarks",component:BookmarksComponent
  },
  {
    path:"notes",component:NotesComponent
  },
  {
    path:"todos",component:TodosComponent
  },
];
export default appRoutes;
