import { Injectable } from "@angular/core";
import { ProjectsApi } from "api";
import { Observable, delay, of } from "rxjs";
import { Project } from "../models/project";
import { ProjectDashboard } from "../models/project-dashboard";

@Injectable()
export class ProjectDetailData {

    constructor(private projectsApi: ProjectsApi) { }

    getProject(projectId: number): Observable<Project> {
        // projectsApi + Adapter
        return of({ id: projectId } as Project);
    }

    getDashboards(projectId: number): Observable<ProjectDashboard[]> {
        // projectsApi + Adapter
        return of([]);
    }

    moveDashboardToProject(dashboardId: number, projectId: number): Observable<void> {
        // projectsApi + Adapter
        return (of(void 0)).pipe(delay(1000));
    }

    removeDashboard(id: number): Observable<void> {
        // projectsApi 
        return (of(void 0)).pipe(delay(1000));
    }

    removeProject(id: number): Observable<void> {
        // projectsApi 
        return (of(void 0)).pipe(delay(1000));
    }
}