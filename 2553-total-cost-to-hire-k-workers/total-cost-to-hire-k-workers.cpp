class Solution {
public:
    long long totalCost(vector<int>& costs, int k, int candidates) {
        priority_queue<int, vector<int>, greater<int>> start;
        priority_queue<int, vector<int>, greater<int>> end;
        int n = costs.size();


        for(int i = 0; i < min(candidates, n); i++){
            start.push(costs[i]);
        }

        for(int i = n - 1; i >= max(n - candidates, min(candidates, n)); i--){
            end.push(costs[i]);
        }
        int i = candidates, j = n - 1 - candidates;

        long long sum = 0;
        while(k--){
            int first = start.empty() ? INT_MAX : start.top();
            int last = end.empty() ? INT_MAX : end.top();

            if(last < first){
                sum += last;
                end.pop();
                if (j >= i){
                    end.push(costs[j]);
                    j--;
                }
            }
            else{
                sum += first;
                start.pop();
                if (i <= j){
                    start.push(costs[i]);
                    i++;
                }
            }
        }

        return sum;

    }
};