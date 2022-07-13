# glob-spwan

A Wrapper of the glob package in a multiprocess environment.
This package deals with file system searches by spawning process foreach search. Within a process, npm [glob](https://www.npmjs.com/package/glob) is used to perform the search.
The present package exposes the search results through a simple async/await API

## installation

```sh
npm i glob-spawn
```

### Usage

Just pass a valid glob pattern to the find function.

```ts
import { find } from 'glob-spawn';
 try {
    const files = await find('src/**/*.js');
    console.log(files);
} catch(e) {
    console.log(e);
}
```

### Pattern matching (taken from official glob package)

Before parsing the path part patterns, braced sections are expanded into a set. Braced sections start with { and end with }, with any number of comma-delimited sections within. Braced sections may contain slash characters, so a{/b/c,bcd} would expand into a/b/c and abcd.

The following characters have special magic meaning when used in a path portion:

```txt
* Matches 0 or more characters in a single path portion

? Matches 1 character
[...] Matches a range of characters, similar to a RegExp range. If the first character of the range is ! or ^ then it matches any character not in the range.

!(pattern|pattern|pattern) Matches anything that does not match any of the patterns provided.

?(pattern|pattern|pattern) Matches zero or one occurrence of the patterns provided.

+(pattern|pattern|pattern) Matches one or more occurrences of the patterns provided.

*(a|b|c) Matches zero or more occurrences of the patterns provided

@(pattern|pat*|pat?erN) Matches exactly one of the patterns provided

** If a "globstar" is alone in a path portion, then it matches zero or more directories and subdirectories searching for matches. It does not crawl symlinked directories.
```