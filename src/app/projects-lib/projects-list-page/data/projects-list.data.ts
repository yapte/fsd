import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";

// LIB common/api
import { ProjectsApi } from "api";

// core folder
import { ProjectShort } from "../core/models/project-short";
import { ProjectCreate } from "../core/models/project-create";
import { AbstrastProjectsListData } from "../core/abstract-projects-list.data";

@Injectable()
export class ProjectsListData implements AbstrastProjectsListData {

    constructor(private projectsApi: ProjectsApi) { }

    getProjects(model: { search: string, page: number }): Observable<ProjectShort[]> {
        // projectsApi + Adapter
        return of([]);
    }

    createProject(model: ProjectCreate): Observable<void> {
        // projectsApi + Adapter
        return of(void 0).pipe(delay(1000));
    }

    removeProject(projectId: number): Observable<void> {
        // projectsApi + Adapter
        return of(void 0).pipe(delay(1000));
    }

    removeProjects(projectIds: number[]): Observable<void> {
        // projectsApi + Adapter
        return of(void 0).pipe(delay(1000));
    }
}