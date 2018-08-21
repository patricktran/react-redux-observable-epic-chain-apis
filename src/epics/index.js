import { ofType } from 'redux-observable';
import types from '../types'
import { from, empty, of } from 'rxjs';
import { switchMap, catchError, startWith } from 'rxjs/operators';

//helper method to similuate an Api call using a delayed promise
const delayResponse = (time, response) => new Promise(res => setTimeout(() => res(response), time));

export const chainEpic = (action$, store) => {
    return action$
        .pipe(
            ofType(types.PING),
            switchMap(() => {
                return from(delayResponse(2000, "hello"))
                    .pipe(switchMap(response => {
                        console.log("1:" + response);
                        return ApiCall2(response);
                    }),
                        catchError(err => {
                            console.log("error");
                            return empty();
                        }),
                        startWith({ type: types.BEGIN_API_1_CALL }));
            })
        );
}

const ApiCall2 = (input) => {
    return from(delayResponse(2000, `${input} there`))
        .pipe(
            switchMap(response => {
                //call next api
                console.log("2:" + response);
                return ApiCall3(response);
            }),
            catchError(err => {
                console.log("error");
                return empty();
            }),
            startWith({ type: types.BEGIN_API_2_CALL })
        )
}

const ApiCall3 = (input) => {
    //call next api
    return from(delayResponse(2000, `${input} again`))
        .pipe(
            switchMap(response => {
                console.log("3:" + response);
                return of({ type: types.PONG });
            }),
            catchError(err => {
                console.log("error");
                return empty();
            }),
            startWith({ type: types.BEGIN_API_3_CALL }))
}
