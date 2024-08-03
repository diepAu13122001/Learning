package sort_alg;

public class BubbleSort {
    public static void main(String[] args) {
        int[] nums = {1, 9, 7, 6, 4, 5, 2};
        System.out.println("Bubble Sort -------------------------");
        System.out.println("Before sort: " + readArr(nums));
        System.out.println("After sort: " + readArr(bubbleSort(nums)));

    }

    public static int[] bubbleSort(int[] nums) {
        int steps = 0;
        for (int j = 0; j < nums.length; j++) {
            steps++;
            for (int i = 0; i < nums.length - 1; i++) {
                if (nums[i] > nums[i + 1]) {
                    // swap
                    int temp = nums[i + 1];
                    nums[i + 1] = nums[i];
                    nums[i] = temp;
                }
            }
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
