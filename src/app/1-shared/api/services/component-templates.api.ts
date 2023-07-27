import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, delay, of, switchMap, throwError } from "rxjs";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { ComponentTemplateDto } from "../models/component-template.dto";
import { ImportComponentTemplateRequestDto } from "../models/import-component-templates-request.dto";

@Injectable({ providedIn: 'root' })
export class ComponentTemplatesApi {
    private _list$ = new BehaviorSubject<ComponentTemplateDto[]>(LIST);

    // constructor(private _http: HttpClient) { }

    getList(model: { search?: string }): Observable<ComponentTemplateDto[]> {
        const list: ComponentTemplateDto[] = this._list$.value;
        return of(list).pipe(
            delay(1000),
            // switchMap(() => throwError(() => new HttpErrorResponse({ error: { message: '500 error :(' } }))),
        );
    }

    import(model: ImportComponentTemplateRequestDto): Observable<void> {
        return of().pipe(
            delay(1000),
            // switchMap(() => throwError(() => new HttpErrorResponse({ error: { message: '500 error :(' } }))),
        );
    }
}

const LIST: ComponentTemplateDto[] = [
    {
        publicId: `MILL`,
        name: 'MILL',
        description: `MILL Description`,
        labels: ['Equipment'],
        type: 'EQUIPMENT',
        inPortsCnt: 1,
        outPortsCnt: 1,
        updatedAt: `2023-01-01`,
        updatedBy: `User X`,
        imageId: `sag-mill.svg`,
        uiProperties: ``,
    },
    {
        publicId: `STOCKPILE`,
        name: 'STOCKPILE',
        description: `STOCKPILE Description`,
        labels: ['Equipment'],
        type: 'EQUIPMENT',
        inPortsCnt: 1,
        outPortsCnt: 1,
        updatedAt: `2023-01-01`,
        updatedBy: `User X`,
        imageId: `stockpile.svg`,
        uiProperties: ``,
    },
    {
        publicId: `RECTANGLE`,
        name: 'RECTANGLE',
        description: `RECTANGLE Description`,
        labels: ['Shape'],
        type: 'SHAPE',
        inPortsCnt: 0,
        outPortsCnt: 0,
        updatedAt: `2023-01-01`,
        updatedBy: `User X`,
        imageId: '',
        uiProperties: ``,
    },
    {
        publicId: `CIRCLE`,
        name: 'CIRCLE',
        description: `CIRCLE Description`,
        labels: ['Shape'],
        type: 'SHAPE',
        inPortsCnt: 0,
        outPortsCnt: 0,
        updatedAt: `2023-01-01`,
        updatedBy: `User X`,
        imageId: '',
        uiProperties: ``,
    },
    {
        publicId: `ARROW`,
        name: 'ARROW',
        description: `ARROW Description`,
        labels: ['Shape'],
        type: 'SHAPE',
        inPortsCnt: 0,
        outPortsCnt: 0,
        updatedAt: `2023-01-01`,
        updatedBy: `User X`,
        imageId: '',
        uiProperties: ``,
    },
];