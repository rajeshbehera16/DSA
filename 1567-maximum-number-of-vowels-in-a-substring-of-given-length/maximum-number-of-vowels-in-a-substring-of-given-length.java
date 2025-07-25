class Solution {
    public int maxVowels(String s, int k) {
        Set<Character> vowels = Set.of('a', 'e', 'i', 'o', 'u');    
        int maxCount = 0;
        int currentCount = 0;

        for (int i = 0; i < k; i++) {
            if (vowels.contains(s.charAt(i))) {
                currentCount++;
            }
        }
        maxCount = currentCount;

        for (int i = k; i < s.length(); i++) {
            char outgoing = s.charAt(i - k);  
            char incoming = s.charAt(i);     

            if (vowels.contains(outgoing)) currentCount--;
            if (vowels.contains(incoming)) currentCount++;

            maxCount = Math.max(maxCount, currentCount);
        }

        return maxCount;
    }
}