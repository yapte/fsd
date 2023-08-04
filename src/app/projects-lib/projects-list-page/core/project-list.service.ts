import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// CURRENT core folder
import { AbstrastProjectsListData } from "./abstract-projects-list.data";
import { ProjectShort } from "./models/project-short";
import { ProjectCreate } from "./models/project-create";

@Injectable()
export class ProjectsListService {
    constructor(private data: AbstrastProjectsListData) { }

    getProjects(model: { search: string, page: number }): Observable<ProjectShort[]> {
        return this.data.getProjects(model);
    }
    createProject(model: ProjectCreate): Observable<void> {
        return this.data.createProject(model);
    }
    removeProject(projectId: number): Observable<void> {
        return this.data.removeProject(projectId);
    }
    removeProjects(projectIds: number[]): Observable<void> {
        return this.data.removeProjects(projectIds);
    }
}