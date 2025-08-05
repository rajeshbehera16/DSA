class Solution {
public:
    long long maxScore(vector<int>& nums1, vector<int>& nums2, int k) {
        int n = nums1.size();
        vector<pair<int,int>> pairs(n);
        for(int i = 0; i < n; ++i) pairs[i] = {nums2[i] , nums1[i]};
        sort(pairs.begin() , pairs.end());
        priority_queue<int , vector<int> , greater<>> pq;
        long long res = 0, sum = 0;
        for(int i = n - 1; i >= 0; --i){
            sum += pairs[i].second;
            pq.push(pairs[i].second);
            if(pq.size() > k){
                sum -= pq.top(); pq.pop();
            }
            if(pq.size() == k) res = max(res , sum * pairs[i].first);
        }
        return res;
    }
};