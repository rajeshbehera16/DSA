var findMinArrowShots = function(points) {
    if (!points.length) return 0;
    points.sort((a, b) => a[1] - b[1]);
    let arrows = 1;
    let end = points[0][1];

    for (let i = 1; i < points.length; i++) {
        const [start, finish] = points[i];
        if (start > end) {
            arrows++;
            end = finish;
        }
    }

    return arrows;
};