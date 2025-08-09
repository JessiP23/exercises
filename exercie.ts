function numIslands(grid: string[][]): number {
    const removeLand = (x: number, y: number) => {
        if(x < 0 || y < 0 || x >= grid.length || y >= grid[0]!.length || grid[x]![y] === '0') {
            return;
        }
        grid[x]![y] = '0';
        removeLand(x + 1, y);
        removeLand(x - 1, y);
        removeLand(x, y + 1);
        removeLand(x, y - 1);
    }
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0]!.length; j++) {
            if(grid[i]![j] === '1') {
                count++;
                removeLand(i, j);
            }
        }
    }
    return count;
}

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));