import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ProfileDto } from '../models/profile.dto';

@Injectable({ providedIn: 'root' })
export class ProfileApi {
    getInfo(): Observable<ProfileDto> {
        return of(MOCK).pipe(delay(1200));
    }
}

const MOCK: ProfileDto = {
    id: 12345,
    first_name: 'Semyon',
    last_name: 'Yaptev',
    middle_name: 'A.',
    balance: 1234567,
};

