import { TemplateEngine, TemplateEngineOptions } from './types.js';

/**
 * Initialize a new `View` with the given `name`.
 *
 * Options:
 *
 *   - `defaultEngine` the default template engine name
 *   - `engines` template engine require() cache
 *   - `root` root path for view lookup
 *
 * @param name
 * @param options
 * @public
 */
export declare class View<RenderOptions extends TemplateEngineOptions = TemplateEngineOptions> {
    #private;
    ext: string;
    defaultEngine: string;
    name: string;
    engine: TemplateEngine<RenderOptions>;
    path: string;
    root: string | string[];
    constructor(name: string, opts?: Partial<{
        defaultEngine: string;
        root: string | string[];
        engines: Record<string, TemplateEngine<RenderOptions>>;
    }>);
    render(options: RenderOptions, data: Record<string, unknown>, cb: (err: Error | null, html: unknown) => void): void;
}
//# sourceMappingURL=view.d.ts.map