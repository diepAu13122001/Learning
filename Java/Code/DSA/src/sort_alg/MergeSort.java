package sort_alg;

public class MergeSort {
    public static void main(String[] args) {
        int[] nums = {1, 9, 7, 6, 4, 5, 2};
        System.out.println("Merge Sort -------------------------");
        System.out.println("Before sort: " + readArr(nums));
        mergeSort(nums, 0, nums.length - 1);
        System.out.println("After sort: " + readArr(nums));
    }

    public static void mergeSort(int[] nums, int left, int right) {
        if (left < right) {
            // tao mid
            int mid = (left + right) / 2;
            // chia thanh 2 mang
            mergeSort(nums, left, mid); // left arr
            mergeSort(nums, mid + 1, right); // right arr
            // sap xep va merge mang
            merge(nums, left, right, mid);

        }
    }

    private static void merge(int[] nums, int left, int right, int mid) {
        int len_left_arr = mid - left + 1;
        int len_right_arr = right - mid;
        int leftArr[] = new int[len_left_arr]; // copy thanh arr1
        int rightArr[] = new int[len_right_arr]; // copy thanh arr2

        for (int x = 0; x < len_left_arr; x++) {
            leftArr[x] = nums[left + x];
        }

        for (int x = 0; x < len_right_arr; x++) {
            rightArr[x] = nums[mid + 1 + x];
        }

        int i = 0;
        int j = 0;
        int k = left;

        while (i < len_left_arr && j < len_right_arr) {
            if (leftArr[i] <= rightArr[j]) {
                nums[k] = leftArr[i]; // viet lai gia tri moi cho arr
                i++;
            } else {
                nums[k] = rightArr[j]; // viet lai gia tri moi cho arr
                j++;
            }
            k++;
        }

        while (i < len_left_arr) {
            nums[k] = leftArr[i];
            i++;
            k++;
        }
        while (j < len_right_arr) {
            nums[k] = rightArr[j];
            j++;
            k++;
        }
        System.out.println("Result after sort: " + readArr(nums));
    }

    public static String readArr(int[] arr) {
        String result = "";
        for (int i : arr) {
            result += i + " ";
        }
        return result;
    }
}
