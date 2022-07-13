export interface FindDatum {
    results: string[]
}
export const isFindDatum = (o: any): o is FindDatum => {
    if (!o.hasOwnProperty('results')) return false;
    for (let e in o.results)
        if (typeof (e) != 'string')
            return false;

    return true;
}

// We only check for the validity of cwd option
export interface GlobOpt {
    cwd: string, // The current working directory in which to search. Defaults to process.cwd().
    root: string, // The place where patterns starting with / will be mounted onto. Defaults to path.resolve(options.cwd, "/") (/ on Unix systems, and C:\ or some such on Windows.)
    dot: boolean, // Include .dot files in normal matches and globstar matches. Note that an explicit dot in a portion of the pattern will always match dot files.
    nomount: boolean// By default, a pattern starting with a forward-slash will be "mounted" onto the root setting, so that a valid filesystem path is returned. Set this flag to disable that behavior.
    mark: boolean, // Add a / character to directory matches. Note that this requires additional stat calls.
    nosort: boolean // Don't sort the results.
}

export interface FindSettings {
    pattern: string
    options?: Partial<GlobOpt>
}
export const isFindSettings = (o: any): o is FindSettings => {
    if (!o.hasOwnProperty('pattern')) return false;
    if (typeof (o.pattern) != 'string') return false;
    if (o.hasOwnProperty('options'))
        if (o.options.hasOwnProperty('cwd'))
            if (typeof (o.options.cwd) != 'string')
                return false;

    return true;
}
