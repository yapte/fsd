import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { AuthLoginRequestDto } from '../models/auth-login-request.dto';
import { AuthLoginResponseDto } from '../models/auth-login-response.dto';

@Injectable({ providedIn: 'root' })
export class AuthApi {
    constructor() { }

    login(model: AuthLoginRequestDto): Observable<AuthLoginResponseDto> {
        return of({
            access_token: 'qwertyuio',
            refresh_token: 'asdfghkl',
        }).pipe(delay(1000));
    }

    logout(): Observable<void> {
        return of().pipe(delay(1000))
    }
}