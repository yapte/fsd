import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, delay, filter, map, of, switchMap, throwError } from "rxjs";
import { DiagramDto } from "../models/diagram.dto";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { DiagramVersionDto } from "../models/diagram-version.dto";
import { DiagramBriefDto } from "../models/diagram-brief.dto";

@Injectable({ providedIn: 'root' })
export class DiagramsApi {
    private _list$ = new BehaviorSubject<DiagramDto[]>(LIST);

    // constructor(private _http: HttpClient) { }

    getList(model: { search?: string }): Observable<DiagramBriefDto[]> {
        const currentList: DiagramDto[] = this._list$.value;

        const fullList: DiagramDto[] = !model.search
            ? currentList
            : currentList.filter(d => d.name.toLowerCase().indexOf(model.search!.toLowerCase()) > -1);

        const briefList: DiagramBriefDto[] = fullList.map(d => ({
            public_id: d.public_id,
            name: d.name,
            description: d.description,
            deleted: false,
            updated_at: new Date(),
            updated_by: 'Ya',
        }));

        return of(briefList).pipe(
            delay(1000),
            // switchMap(() => throwError(() => new HttpErrorResponse({ error: { message: '500 error :(' } }))),
        );
    }

    getItem(id: string): Observable<DiagramDto> {
        const item: DiagramDto | undefined = this._list$.value.find(d => d.public_id === id);
        return (item ? of(item) : throwError(() => new HttpErrorResponse({ error: { message: 'Not found' } })))
            .pipe(delay(1000));
    }

    getItemVersions(id: string, version: string): Observable<DiagramVersionDto[]> {
        // TODO: data
        return of([]);
    }

    create(model: DiagramDto): Observable<void> {
        const currentList: DiagramDto[] = this._list$.value;
        this._list$.next([...currentList, model]);
        return of(void 0);
    }

    update(model: DiagramDto): Observable<void> {
        const currentList: DiagramDto[] = this._list$.value;
        const item: DiagramDto | undefined = currentList.find(d => d.public_id === model.public_id);
        if (!item)
            return throwError(() => new HttpErrorResponse({ error: { message: 'Not found' } }));

        this._list$.next([...currentList.filter(d => d.public_id !== model.public_id), model]);

        return of(void 0);
    }

    delete(id: string): Observable<void> {
        const currentList: DiagramDto[] = this._list$.value;
        this._list$.next(currentList.filter(d => d.public_id !== id));
        return of(void 0);
    }

    lockItem(id: string): Observable<void> {
        // TODO:
        return of(void 0);
    }

    unlockItem(id: string): Observable<void> {
        // TODO:
        return of(void 0);
    }

    getItemLockStatus(id: string): Observable<boolean> {
        // TODO: 
        return of(false);
    }
}

const LIST: DiagramDto[] = [1, 2, 3, 4, 5, 6, 7, 8].map(i => ({
    public_id: `${i}`,
    name: `Diagram name #${i}`,
    description: `${i}`,
    ui_properties: JSON.stringify({}),
    components: [
        {
            public_id: `${i * 1000 + 1}`,
            name: `Component #1 (Diagram ${i})`,
            type_public_id: 'MILL',
            signals: [],
            properties: [],
            ui_properties: JSON.stringify({}),
        },
    ],
    connections: [],
}));