/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  const graph = new Map();
  const inDegree = new Array(numCourses).fill(0);

  for (let i = 0; i < numCourses; i++) {
    graph.set(i, []);
  }

  for (const [course, prereq] of prerequisites) {
    graph.get(prereq).push(course);
    inDegree[course]++;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDegree[i] === 0) queue.push(i);
  }

  const result = [];
  while (queue.length) {
    const current = queue.shift();
    result.push(current);

    for (const neighbor of graph.get(current)) {
      inDegree[neighbor]--;
      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return result.length === numCourses ? result : [];
};