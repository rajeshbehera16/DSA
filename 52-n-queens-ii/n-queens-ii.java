class Solution {
    boolean board[][]; 
    public int totalNQueens(int n) {
        board = new boolean[n][n];
        int count = helper(0, n);
        return count;
    }
    public boolean aboveRow(int row, int col){
        for(int i = row; i>=0; i--){
            if(board[i][col])
                return false;
        }
        return true;
    }
    public boolean leftDiagonal(int row, int col){
        for(int i = row, j = col; i>=0 && j>=0; i--,j--){
            if(board[i][j])
                return false;
        }
        return true;
    }
    public boolean rightDiagonal(int row, int col){
        for(int i = row, j = col; i>=0 && j<board[0].length; i--, j++){
            if(board[i][j])
                return false;
        }
        return true;
    }
    public boolean canPlaceQueen(int row, int col){
        return (aboveRow(row, col) && leftDiagonal(row, col) && rightDiagonal(row, col));
    }
    public int helper(int row, int n){
        if(row==n)
            return 1;
        int ct = 0;
        for(int col = 0; col<board[0].length; col++){
            if(canPlaceQueen(row, col)){
                board[row][col] = true;
                ct = ct + helper(row+1, n);
                board[row][col] = false;
            }
        }
        return ct;
    }
}