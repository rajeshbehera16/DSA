class Solution {
public:
    int equalPairs(vector<vector<int>>& grid) {
        unordered_map<string,int> map; 
        int n = grid.size();

        for(int i = 0; i < n; i++){
            string temp1 = "";  
            for(int j = 0; j < n; j++){
                temp1 += to_string(grid[i][j]) + ","; 
            }
            map[temp1]++;
        }

        int count = 0;

        for(int i = 0; i < n; i++){
            string temp2 = "";  
            for(int j = 0; j < n; j++){
                temp2 += to_string(grid[j][i]) + ",";
            }
            if(map.find(temp2) != map.end())
                count += map[temp2];
        }

        return count;
    }
};