import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// CURRENT core folder
import { ProjectShort } from "./models/project-short";
import { ProjectCreate } from "./models/project-create";

@Injectable()
export abstract class AbstrastProjectsListData {
    abstract getProjects(model: { search: string, page: number }): Observable<ProjectShort[]>;
    abstract createProject(model: ProjectCreate): Observable<void>;
    abstract removeProject(projectId: number): Observable<void>;
    abstract removeProjects(projectIds: number[]): Observable<void>;
}