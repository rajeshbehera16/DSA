class Solution {
    public boolean isSubsequence(String s, String t) {
        if (s.length() == 0) return true;
        if (t.length() == 0) return false;

        int i = 0, j = 0;
        char[] c = t.toCharArray();
        char[] d = s.toCharArray();

        while (i < c.length && j < d.length) {
            if (c[i] == d[j]) {
                j++;
            }
            i++;
        }
        return j == d.length;
    }
}