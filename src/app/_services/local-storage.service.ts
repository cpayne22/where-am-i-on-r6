import { Inject, Injectable } from '@angular/core';

const STORAGE_KEY = 'WhereAmIOnR6';

@Injectable()

// taken from :  https://medium.com/@tiagovalverde/how-to-save-your-app-state-in-localstorage-with-angular-ce3f49362e31

export class LocalStorageService {
     anotherTodolist = [];
     constructor() { }
     public setLocalStorage(value: any): void {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
     }

     public getLocalStorage(): any {

          // get array of tasks from local storage
          var obj = {};
          try {
               obj =JSON.parse(localStorage.getItem(STORAGE_KEY));
          }
          catch{
               obj = null;
          }
          return obj;
     }
}