class Solution {
public:
    string decodeString(string s) {
        stack<string>string_stack;
        stack<int>number_stack;

        int n = s.size();
        int num = 0;
        string curr = "";
        for(int i = 0 ; i < n ; i++){

            if(isdigit(s[i])){
                num = num * 10 + s[i] - '0';
            }
            else if(s[i] == '['){
                number_stack.push(num);
                string_stack.push("[");
                num = 0;
                curr = "";
            }
            else if(s[i] == ']'){
                string result = "";
                curr.clear();
                while(!string_stack.empty() && string_stack.top() != "["){
                        curr = string_stack.top() + curr;
                        string_stack.pop();
                    }
                    
                    if (!string_stack.empty() && string_stack.top() == "[") {
                        string_stack.pop();     
                    }

                int k = number_stack.top();
                number_stack.pop();

                result.reserve(curr.size() * k);
                for(int i = 0 ; i < k ; i++){
                    result += curr;
                }
                
                string_stack.push(result);
            }
             else {
                string_stack.push(string(1, s[i]));
            }
        }

        string result = "";
        while(!string_stack.empty()){
            result = string_stack.top() + result;
            string_stack.pop();
        }
        return result;
    }
};