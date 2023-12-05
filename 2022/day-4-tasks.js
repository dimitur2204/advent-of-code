const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

const pairs = input.split('\n').map(pair => pair.split(',').map(range => range.split('-').map(Number)))

pairs.forEach(pair => {
    const [range1, range2] = pair
    const [start1, end1] = range1
    const [start2, end2] = range2
    const ranges = []
    if (start1 <= start2 && end1 >= end2) {
        ranges.push([start1, start2 - 1])
        ranges.push([end2 + 1, end1])
    } else if (start1 >= start2 && end1 <= end2) {
        ranges.push([start2, start1 - 1])
        ranges.push([end1 + 1, end2])
    } else if (start1 <= start2 && end1 <= end2) {
        ranges.push([start1, start2 - 1])
    } else if (start1 >= start2 && end1 >= end2) {
        ranges.push([end2 + 1, end1])
    }
})

console.log(ranges)
