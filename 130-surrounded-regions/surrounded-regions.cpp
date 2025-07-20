class Solution {
    void dfs(int row, int col,int n , int m,int deltarow[],int deltacol[], vector<vector<char>>& board, vector<vector<int>> &visited) {
        visited[row][col] = 1;
        for (int i = 0; i < 4; i++) {
            int nrow = row + deltarow[i];
            int ncol = col + deltacol[i];
            if (nrow >= 0 && nrow < n && ncol >= 0 && ncol < m &&
                !visited[nrow][ncol] && board[nrow][ncol] == 'O') {
                dfs(nrow, ncol,n,m,deltarow,deltacol, board,  visited);
            }
        }
    }

public:
    void solve(vector<vector<char>>& board) {
        int n = board.size();
        int m = board[0].size();
        int deltarow[] = {-1,0,1,0};
        int deltacol[] = {0,1,0,-1};
        vector<vector<int>> visited(n, vector<int>(m, 0));
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < m; j++) {
                if ((i == 0 || j == 0 || i == n - 1 || j == m - 1) && board[i][j] == 'O' && !visited[i][j] ) {
                        dfs(i, j, n, m, deltarow, deltacol, board, visited);
                }
            }
        }

        for(int i = 0 ; i<n ; i++){
            for(int j = 0 ; j<m ; j++){
                if (!visited[i][j] && board[i][j] == 'O') {
                    board[i][j] = 'X';
                }
            }
        }
    }
};