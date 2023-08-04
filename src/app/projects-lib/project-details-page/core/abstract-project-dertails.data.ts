import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

// CURRENT core folder
import { Project } from "./models/project";
import { ProjectDashboard } from "./models/project-dashboard";

@Injectable()
export abstract class AbstractProjectDetailData {
    abstract getProject(projectId: number): Observable<Project>;
    abstract getDashboards(projectId: number): Observable<ProjectDashboard[]>;
    abstract moveDashboardToProject(dashboardId: number, projectId: number): Observable<void>
    abstract removeDashboard(id: number): Observable<void>;
    abstract removeProject(id: number): Observable<void>;
}