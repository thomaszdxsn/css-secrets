
export function *range(start_, end_=undefined) {
    const hasEnd = typeof end_ !== 'undefined';
    const start = hasEnd ? start_ : 0;
    const end = hasEnd ? end_ : start_;
    
    for (let i = start; i < end; i ++) {
        yield i
    }
}