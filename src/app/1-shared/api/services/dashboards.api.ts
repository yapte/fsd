import { Injectable } from '@angular/core';
import { delay, Observable, of, switchMap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DashboardDto } from '../models/dashboard.dto';

@Injectable({ providedIn: 'root' })
export class DashboardsApi {
    private data: DashboardDto[] = MOCK;

    getList(): Observable<DashboardDto[]> {
        return of(this.data).pipe(
            delay(1000),
            // switchMap(() => throwError(() => new HttpErrorResponse({ error: { message: '500 error :(' } }))),
        );
    }

    getItem(id: number): Observable<DashboardDto> {
        const item: DashboardDto | undefined = this.data.find(d => d.dashboard_id === id);
        return (
            item
                ? of(item)
                : throwError(() => new HttpErrorResponse({ status: 404, statusText: 'Not found' }))
        ).pipe(delay(1000));
    }
}

const MOCK: DashboardDto[] = new Array(7).fill(0).map((_, i) => ({
    dashboard_id: i,
    dashboard_name: `Dashboard name ${i}`,
    dashboard_description: i % 2
        ? 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga unde, nihil esse veritatis deserunt adipisci minus, repellat doloribus qui pariatur amet obcaecati, rem ipsa itaque recusandae illum ipsum eligendi ex?'
        : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
    items_qty: 13 + i * i,
    is_active: !(i % 3),
    dt: `2023-01-0${i % 10 + 1}T12-12-12`
}));