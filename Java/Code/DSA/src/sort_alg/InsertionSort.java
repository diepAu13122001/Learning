package sort_alg;

public class InsertionSort {
    public static void main(String[] args) {
        int[] nums = {1, 9, 7, 6, 4, 5, 2};
        System.out.println("Insertion Sort -------------------------");
        System.out.println("Before sort: " + readArr(nums));
        System.out.println("After sort: " + readArr(insertionSort(nums)));

    }

    public static int[] insertionSort(int[] nums) {
        int steps = 0;
        for (int i = 1; i < nums.length; i++) {
            steps++;
            int temp = nums[i];
            int j = i - 1;
            while (nums[j] > temp && j >= 0) {
                // dich chuyen vi tri + so sanh giua cac item
                nums[j + 1] = nums[j];
                j = j - 1;
            }
            // them temp vao vi tri tuong ung
            nums[j+1] = temp;
            System.out.println("Result of step " + steps + " is " + readArr(nums));
        }
        return nums;
    }

    public static String readArr(int[] arr) {
        String result = "";
        for (int i : arr) {
            result += i + " ";
        }
        return result;
    }

}
