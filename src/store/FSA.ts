import { Action,  MiddlewareAPI, Dispatch } from 'redux';

export type FSA<PayloadType> = FSASucces<PayloadType> | FSAError;
export type FSAWithMeta<PayloadType, MetaType> = FSASuccesWithMeta<PayloadType, MetaType> | FSAErrorWithMeta<MetaType>;

export abstract class FSASucces<PayloadType> implements Action {
    public abstract readonly type: any;
    public readonly error: false = false;
    public constructor(
        public readonly payload: PayloadType
    ) { }
}
export abstract class FSASuccesWithMeta<PayloadType, MetaType> extends FSASucces<PayloadType> {
    public constructor(
        payload: PayloadType,
        public readonly meta: MetaType
    ) {
        super(payload);
    }
}

export abstract class FSAError implements Action {
    public abstract readonly type: any;
    public readonly error: true = true;
    public constructor(
        public readonly payload: Error
    ) { }
}
export abstract class FSAErrorWithMeta<MetaType> extends FSAError {
    public constructor(
        payload: Error,
        public readonly meta: MetaType
    ) {
        super(payload);
    }
}

export function FSAMiddleware<S>(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S> {
    return (next: Dispatch<S>): Dispatch<S> => {
        return (action: any): any => {
            if (action instanceof FSASuccesWithMeta || action instanceof FSAErrorWithMeta) {
                return next({
                    type: action.type,
                    error: action.error,
                    payload: action.payload,
                    meta: action.meta
                });
            }
            if (action instanceof FSASucces || action instanceof FSAError) {
                return next({
                    type: action.type,
                    error: action.error,
                    payload: action.payload
                });
            }
        };
    };
}