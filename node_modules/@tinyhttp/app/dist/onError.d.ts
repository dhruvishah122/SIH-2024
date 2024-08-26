import { NextFunction } from '@tinyhttp/router';
import { App } from './app.js';
import { Request } from './request.js';
import { Response } from './response.js';

export type ErrorHandler = (this: App, err: any, req: Request, res: Response, next?: NextFunction) => void;
export declare const onErrorHandler: ErrorHandler;
//# sourceMappingURL=onError.d.ts.map