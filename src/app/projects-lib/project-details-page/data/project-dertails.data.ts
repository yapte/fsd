import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";

// LIB api
import { ProjectsApi } from "api";

// core folder
import { Project } from "../core/models/project";
import { ProjectDashboard } from "../core/models/project-dashboard";

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