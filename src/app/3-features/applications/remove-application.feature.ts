import { Injectable } from "@angular/core";
import { ApplicationsApi } from "api";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RemoveApplicationFeature {

    constructor(private applicationsApi: ApplicationsApi) { }

    execute(id: string): Observable<void> {
        return this.applicationsApi.delete(id);
    }
}