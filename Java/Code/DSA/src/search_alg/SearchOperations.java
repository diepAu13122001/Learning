package search_alg;

public class SearchOperations {
    public static void main(String[] args) {
        int nums1[] = {5, 7, 9, 11, 13}; // this is a sorted array
        int target1 = 11;
        int nums2[] = new int[10000]; // this is a sorted array
        int target2 = 900;
        /*
        Linear: neu so can search o dau hang => step < binary
        Binary: danh sach can duoc sap xep truoc + so can search nam cang xa => step < linear
         */

        System.out.println("Small array ------------------");
        System.out.println("Linear search -----------------");
        int result1 = linearSearch(nums1, target1);
        if (result1 != -1) {
            System.out.println("Element found at index: " + result1);
        } else {
            System.out.println("Element not found");
        }

        System.out.println("Binary search -----------------");
        int result2 = BinarySearch(nums1, target1);
        if (result2 != -1) {
            System.out.println("Element found at index: " + result2);
        } else {
            System.out.println("Element not found");
        }

        System.out.println("Large array ------------------");
        System.out.println("Linear search -----------------");
        int result4 = linearSearch(nums2, target2);
        if (result4 != -1) {
            System.out.println("Element found at index: " + result4);
        } else {
            System.out.println("Element not found");
        }

        System.out.println("Binary search -----------------");
        int result3 = BinarySearch(nums2, target2);
        if (result3 != -1) {
            System.out.println("Element found at index: " + result3);
        } else {
            System.out.println("Element not found");
        }

        System.out.println("Binary search (de quy) -----------------");
        int result5 = BinarySearchWithStartAndEnd(nums2, target2, 0, nums2.length-1);
        if (result5 != -1) {
            System.out.println("Element found at index: " + result5);
        } else {
            System.out.println("Element not found");
        }
    }

    private static int linearSearch(int[] nums, int target) {
        int steps = 0;
        for (int i = 0; i < nums.length; i++) {
            steps++;
            if (nums[i] == target) {
                System.out.println("Steps taken by Linear: " + steps);
                return i;
            }
        }
        System.out.println("Steps taken by Linear: " + steps);

        return -1; // no target in this list
    }

    private static int BinarySearch(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        int steps = 0;

        // khi nao con phan tu => con search
        while (left <= right) {
            steps++;
            int mid = (right + left) / 2;
            if (nums[mid] == target) {
                System.out.println("Steps taken by Binary: " + steps);
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        System.out.println("Steps taken by Binary: " + steps);
        return -1; // no target in this list
    }

    private static int BinarySearchWithStartAndEnd(int[] nums, int target, int left, int right) {
        // su dung de quy
        int mid = (left + right) / 2;
        if (left <= right) {
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                return BinarySearchWithStartAndEnd(nums, target, mid + 1, right);
            } else {
                return BinarySearchWithStartAndEnd(nums, target, left, mid - 1);
            }
        }
        return -1;

    }
}
