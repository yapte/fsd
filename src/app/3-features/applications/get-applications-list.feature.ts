import { Injectable } from "@angular/core";
import { ApplicationDto, ApplicationsApi } from "api";
import { Application } from "entities";
import { Observable, map, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class GetApplicationsListFeature {

    constructor(private applicationsApi: ApplicationsApi) { }

    execute(model: { search?: string }): Observable<Application[]> {
        return this.applicationsApi.getList(this.adaptRequest(model))
            .pipe(map(dtos => dtos.map(dto => this.adaptResponse(dto))))
    }

    private adaptRequest(model: { search?: string }): { text?: string } {
        return {
            text: model.search,
        };
    }

    private adaptResponse(dto: ApplicationDto): Application {
        return {
            id: dto.id,
            name: dto.name,
            steps: dto.steps,
        };
    }
}