import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

// CURRENT core folder
import { AbstractProjectDetailData } from "./abstract-project-dertails.data";
import { Project } from "./models/project";
import { ProjectDashboard } from "./models/project-dashboard";

@Injectable()
export class ProjectDetailsService {
    constructor(private data: AbstractProjectDetailData) { }

    getProject(projectId: number): Observable<Project> {
        return this.data.getProject(projectId);
    }
    getDashboards(projectId: number): Observable<ProjectDashboard[]> {
        return this.data.getDashboards(projectId);
    }
    moveDashboardToProject(dashboardId: number, projectId: number): Observable<void> {
        return this.data.moveDashboardToProject(dashboardId, projectId);
    }
    removeDashboard(id: number): Observable<void> {
        return this.data.removeDashboard(id);
    }
    removeProject(id: number): Observable<void> {
        return this.data.removeProject(id);
    }
}