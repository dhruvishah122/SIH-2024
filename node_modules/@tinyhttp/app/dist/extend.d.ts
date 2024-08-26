import { NextFunction } from '@tinyhttp/router';
import { App } from './app.js';
import { Request } from './request.js';
import { Response } from './response.js';
import { TemplateEngineOptions } from './types.js';

/**
 * Extends Request and Response objects with custom properties and methods
 */
export declare const extendMiddleware: <EngineOptions extends TemplateEngineOptions = TemplateEngineOptions>(app: App) => (req: Request, res: Response<EngineOptions>, next: NextFunction) => void;
//# sourceMappingURL=extend.d.ts.map