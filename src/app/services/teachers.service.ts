import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { environment } from "./../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { selectAll } from "../store/teachers/teachers.selector";
import { teacherAction } from "../store/teachers/teachers.action";

@Injectable({
  providedIn: "root"
})
export class TeachersService {

  private BASE_URI = environment.APIEndpoint;

  constructor(private http: HttpClient,
    private store: Store<{teachers}>) {
  }

  getTeachers() { 
    return this.http.get(`${this.BASE_URI}teachers`)
    .subscribe(response => {
      //@ts-ignore
      this.store.dispatch(teacherAction({ data: response.data }));
    });
  }

  ngOnInit(): void {
  }
}
