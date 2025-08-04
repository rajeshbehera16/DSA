class Solution {
    int cnt = 0;
    public void dfs(int node,List<List<Integer>> rooms,int visited[]){
        visited[node] = 1;
        cnt += 1;
        for(int i = 0; i< rooms.get(node).size();i++){
            int neigh = rooms.get(node).get(i);
            if(visited[neigh] == 0){
                dfs(neigh,rooms,visited);
            }
        }
    }
    public boolean canVisitAllRooms(List<List<Integer>> rooms) {
        int n = rooms.size();
        int visited[] = new int[n];
        
         dfs(0,rooms,visited);
         return cnt == n;
    }
}