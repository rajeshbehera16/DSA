class SmallestInfiniteSet {
    boolean[] present;
    int current;

    public SmallestInfiniteSet() {
        present = new boolean[1001]; // supports numbers from 1 to 1000
        Arrays.fill(present, true);
        current = 1;
    }

    public int popSmallest() {
        int val = current;
        present[val] = false;
        while (current < present.length && !present[current]) {
            current++;
        }
        return val;
    }

    public void addBack(int num) {
        if (!present[num]) {
            present[num] = true;
            if (num < current) {
                current = num;
            }
        }
    }
}