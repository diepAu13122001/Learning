package sort_alg;

public class SelectionSort {
    public static void main(String[] args) {
        int[] nums = {1, 9, 7, 6, 4, 5, 2};
        System.out.println("Selection Sort -------------------------");
        System.out.println("Before sort: " + readArr(nums));
        System.out.println("After sort: " + readArr(selectionSort(nums)));

    }

    public static int[] selectionSort(int[] nums) {
        int steps = 0;
        for (int j = 0; j < nums.length - 1; j++) {
            steps++;
            int minIndex = j;
            for (int i = j + 1; i < nums.length; i++) {
                // change
                if (nums[minIndex] > nums[i]) minIndex = i;
            }
            // swap
           int temp = nums[minIndex];
            nums[minIndex] = nums[j];
            nums[j] = temp;

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
