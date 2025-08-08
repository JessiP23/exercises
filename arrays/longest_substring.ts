function merge(intervals: number[][]): number[][] {
    intervals.sort((a,b) => a[0]! - b[0]!);
    const result: number[][] = [];

    for (const interval of intervals) {
        if (result.length === 0 || result[result.length - 1]![1]! < interval[0]!) {
            result.push(interval);
        } else {
            result[result.length - 1]![1]! = Math.max(result[result.length - 1]![1]!, interval[1]!);
        }
    }
    return result;
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));