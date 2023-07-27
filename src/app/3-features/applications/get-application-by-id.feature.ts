import { Injectable } from "@angular/core";
import { ApplicationDto, ApplicationsApi } from "api";
import { Application } from "entities";
import { Observable, map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GetApplicationByIdFeature {

    constructor(private applicationsApi: ApplicationsApi) { }

    execute(id: string): Observable<Application> {
        return this.applicationsApi.getItem(id)
            .pipe(map(dto => this.adaptResponse(dto)))
    }

    private adaptResponse(dto: ApplicationDto): Application {
        return {
            id: dto.id,
            name: dto.name,
            steps: dto.steps,
        };
    }
}