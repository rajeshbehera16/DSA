class Solution {
    public String reverseVowels(String s) {
        int start = 0;
        int end = s.length() - 1;
        char[] arr = s.toCharArray(); 

        while (start < end) {
            if (!isVowel(arr[start])) {
                start++;
            } else if (!isVowel(arr[end])) {
                end--;
            } else {
                char temp = arr[start];
                arr[start] = arr[end];
                arr[end] = temp;

                start++;
                end--;
            }
        }
        return new String(arr); 
    }
    public boolean isVowel(char ch) {
    if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
        return true;
    }
    if (ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
        return true;
    }
    return false;
}

}