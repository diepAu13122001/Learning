package sort_alg;

public class QuickSort {
    public static void main(String[] args) {
        int[] nums = {1, 9, 7, 6, 4, 5, 2};
        System.out.println("Quick Sort -------------------------");
        System.out.println("Before sort: " + readArr(nums));
        quickSort(nums, 0, nums.length - 1);
        System.out.println("After sort: " + readArr(nums));
    }

    public static void quickSort(int[] nums, int low, int high) {
        if (low < high) {
            // tao pivot
            int pivot = partition(nums, low, high);
            // chia thanh 2 mang
            quickSort(nums, low, pivot - 1); // mang can sort
            quickSort(nums, pivot + 1, high); // mang da sort
        }
    }

    private static int partition(int[] nums, int low, int high) {
        int pivot = nums[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (nums[j] < pivot) {
                i++;
                // swap
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
        // swap
        int temp = nums[i + 1];
        nums[i + 1] = nums[high];
        nums[high] = temp;

        System.out.println("Result after sort: " + readArr(nums));

        return i + 1;
    }

    public static String readArr(int[] arr) {
        String result = "";
        for (int i : arr) {
            result += i + " ";
        }
        return result;
    }
}
