import { Injectable } from '@angular/core';
import { delay, Observable, of, switchMap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ApplicationDto } from '../models/applications/application.dto';
import { StepCreateDto } from '../models/applications/step-create.dto';
import { StepDto } from '../models/applications/step.dto';

@Injectable({ providedIn: 'root' })
export class ApplicationsApi {

    static GUID = 1;
    private data: ApplicationDto[] = MOCK;

    getList(model: { text?: string }): Observable<ApplicationDto[]> {
        return of(this.data).pipe(
            delay(1000),
            // switchMap(() => throwError(() => new HttpErrorResponse({ error: { message: '500 error :(' } }))),
        );
    }

    getItem(id: string): Observable<ApplicationDto> {
        const item: ApplicationDto | undefined = this.data.find(d => d.id === id);
        return (
            item
                ? of(item)
                : throwError(() => new HttpErrorResponse({ status: 404, statusText: 'Not found' }))
        ).pipe(delay(1000));
    }

    createStep(model: StepCreateDto): Observable<void> {
        ApplicationsApi.GUID++;

        const application: ApplicationDto = this.data.find(a => a.id === model.applicationId)!;

        const step: StepDto = {
            id: `STEP_${ApplicationsApi.GUID}`,
            name: model.name,
            input_params: '',
            output_params: '',
        };
        application.steps.push(step);

        return of(void 0)
            .pipe(
                delay(1000),
                // switchMap(() => throwError(() => new HttpErrorResponse({ error: { message: '500 error :(' } }))),
            );
    }

    getStep(stepId: string): Observable<StepDto> {
        const steps = this.data.reduce((acc, a) => [...acc, ...a.steps], [] as StepDto[]);
        console.log(steps);
        const step: StepDto | undefined = steps.find(s => s.id === stepId);

        console.log(step);

        return step ? of(step) : throwError(() => new HttpErrorResponse({ error: { message: '404 NotFound :(' } }));
    }

    updateStep(step: StepDto): Observable<void> {
        // TODO: implements
        return of(void 0);
    }

    deleteStep(applicationId: string, stepId: string): Observable<void> {
        const application: ApplicationDto = this.data.find(a => a.id === applicationId)!;
        application.steps = application.steps.filter(s => s.id !== stepId);
        return of(void 0);
    }

    delete(id: string): Observable<void> {
        this.data = this.data.filter(i => i.id !== id);
        return of(void 0);
    }
}

const MOCK: ApplicationDto[] = Array.from({ length: 50 }).map((_, id) => ({
    id: `${id}`,
    name: `Application ${id}`,
    steps: [
        {
            id: 'Step_1',
            name: 'Step qwerty',
            input_params: ``,
            output_params: ``,
        },
    ],
}));