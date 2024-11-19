const problemsData = [
    {
        id: 'problem_001',
        title: '1. Hello World',
        description: 'Write a program that prints "Hello, World!" to the console.',
        inputFormat: 'No input is needed.',
        outputFormat: 'Output should be the text "Hello, World!"',
        Difficulty: 'Easy',
        examples: [
            {
                input: 'N/A',
                output: 'Hello, World!'
            }
        ],
        constraints: 'None'
    },
    {
        id: 'problem_002',
        title: '2. Sum of Two Numbers',
        description: 'Given two integers, return their sum.',
        inputFormat: 'The first line contains the first integer. The second line contains the second integer.',
        outputFormat: 'Return a single integer: the sum of the two numbers.',
        Difficulty: 'Easy',
        examples: [
            {
                input: '5\n3',
                output: '8'
            },
            {
                input: '10\n15',
                output: '25'
            }
        ],
        constraints: '1 <= a, b <= 10^9'
    },
    {
        id: 'problem_003',
        title: '3. Palindrome Check',
        description: 'Given a string, determine if it is a palindrome.',
        inputFormat: 'A single string, s (1 <= s.length <= 100).',
        outputFormat: 'Return "true" if s is a palindrome, "false" otherwise.',
        Difficulty: 'Medium',
        examples: [
            {
                input: 'racecar',
                output: 'true'
            },
            {
                input: 'hello',
                output: 'false'
            }
        ],
        constraints: 'The string consists of lowercase English letters.'
    },
    {
        id: 'problem_004',
        title: '4. Fibonacci Sequence',
        description: 'Write a function that returns the nth Fibonacci number.',
        inputFormat: 'A single integer n (0 <= n <= 30).',
        outputFormat: 'Return the nth Fibonacci number.',
        Difficulty: 'Medium',
        examples: [
            {
                input: '0',
                output: '0'
            },
            {
                input: '1',
                output: '1'
            },
            {
                input: '5',
                output: '5'
            }
        ],
        constraints: 'None'
    },
    {
        id: 'problem_005',
        title: '5. Find the Maximum Element',
        description: 'Given an array of integers, find the maximum element.',
        inputFormat: 'The first line contains an integer n (1 <= n <= 100). The second line contains n space-separated integers.',
        outputFormat: 'Return the maximum integer in the array.',
        Difficulty: 'Medium',
        examples: [
            {
                input: '5\n1 2 3 4 5',
                output: '5'
            },
            {
                input: '4\n-1 -2 -3 -4',
                output: '-1'
            }
        ],
        constraints: 'None'
    },
    {
        id: 'problem_006',
        title: '6. Count Vowels',
        description: 'Count the number of vowels in a given string.',
        inputFormat: 'A single string, s (1 <= s.length <= 100).',
        outputFormat: 'Return the number of vowels in the string.',
        Difficulty: 'Easy',
        examples: [
            {
                input: 'hello',
                output: '2'
            },
            {
                input: 'programming',
                output: '3'
            }
        ],
        constraints: 'The string consists of lowercase English letters.'
    },
    {
        id: 'problem_007',
        title: '7. Reverse a String',
        description: 'Write a function that reverses a string.',
        inputFormat: 'A single string, s (1 <= s.length <= 100).',
        outputFormat: 'Return the reversed string.',
        Difficulty: 'Medium',
        examples: [
            {
                input: 'hello',
                output: 'olleh'
            },
            {
                input: 'world',
                output: 'dlrow'
            }
        ],
        constraints: 'The string consists of lowercase English letters.'
    },
    {
        id: 'problem_008',
        title: '8. Calculate Factorial',
        description: 'Given a non-negative integer n, calculate its factorial.',
        inputFormat: 'A single integer n (0 <= n <= 20).',
        outputFormat: 'Return n! (n factorial).',
        Difficulty: 'Easy',
        examples: [
            {
                input: '5',
                output: '120'
            },
            {
                input: '0',
                output: '1'
            }
        ],
        constraints: 'None'
    },
    {
        id: 'problem_009',
        title: '9. Check for Anagrams',
        description: 'Given two strings, determine if they are anagrams of each other.',
        inputFormat: 'Two strings, s1 and s2 (1 <= s1.length, s2.length <= 100).',
        outputFormat: 'Return "true" if they are anagrams, "false" otherwise.',
        Difficulty: 'Easy',
        examples: [
            {
                input: 'listen\nsilent',
                output: 'true'
            },
            {
                input: 'hello\nworld',
                output: 'false'
            }
        ],
        constraints: 'The strings consist of lowercase English letters.'
    },
    {
        id: 'problem_010',
        title: '10. Merge Two Sorted Arrays',
        description: 'Given two sorted arrays, merge them into a single sorted array.',
        inputFormat: 'The first line contains the size of the first array, followed by its elements. The second line contains the size of the second array, followed by its elements.',
        outputFormat: 'Return the merged sorted array.',
        Difficulty: 'Medium',
        examples: [
            {
                input: '3\n1 3 5\n2\n2 4',
                output: '1 2 3 4 5'
            },
            {
                input: '2\n1 2\n3\n3 4 5',
                output: '1 2 3 4 5'
            }
        ],
        constraints: 'The lengths of the arrays are within the range of 1 to 100.'
    },
    {
        id: 'problem_011',
        title: '11. Remove Duplicates from Sorted Array',
        description: 'Given a sorted array, remove the duplicates in-place such that each element appears only once.',
        inputFormat: 'A sorted array of integers.',
        outputFormat: 'Return the array with duplicates removed.',
        Difficulty: 'Easy',
        examples: [
            {
                input: '1 1 2',
                output: '1 2'
            },
            {
                input: '0 0 1 1 1 2',
                output: '0 1 2'
            }
        ],
        constraints: 'The array will have at most 10^4 elements.'
    },
    {
        id: 'problem_012',
        title: '12. Longest Substring Without Repeating Characters',
        description: 'Given a string, find the length of the longest substring without repeating characters.',
        inputFormat: 'A string s (1 <= s.length <= 1000).',
        outputFormat: 'Return the length of the longest substring without repeating characters.',
        Difficulty: 'Medium',
        examples: [
            {
                input: 'abcabcbb',
                output: '3'
            },
            {
                input: 'bbbbb',
                output: '1'
            }
        ],
        constraints: 'The string consists of English letters, digits, symbols, and spaces.'
    },
    {
        id: 'problem_013',
        title: '13. Merge Intervals',
        description: 'Given a collection of intervals, merge all overlapping intervals.',
        inputFormat: 'An array of intervals, where each interval is represented by a pair of integers.',
        outputFormat: 'Return an array of merged intervals.',
        Difficulty: 'Medium',
        examples: [
            {
                input: '[[1,3], [2,6], [8,10], [15,18]]',
                output: '[[1,6], [8,10], [15,18]]'
            },
            {
                input: '[[1,4], [4,5]]',
                output: '[[1,5]]'
            }
        ],
        constraints: 'The input array will have at most 10^4 intervals.'
    },
    {
        id: 'problem_014',
        title: '14. Group Anagrams',
        description: 'Given a list of strings, group the anagrams together.',
        inputFormat: 'A list of strings.',
        outputFormat: 'Return a list of groups of anagrams.',
        Difficulty: 'Medium',
        examples: [
            {
                input: '["eat","tea","tan","ate","nat","bat"]',
                output: '[["eat","tea","ate"],["tan","nat"],["bat"]]'
            },
            {
                input: '["","a"]',
                output: '[[""],["a"]]'
            }
        ],
        constraints: 'The number of strings in the input will be at most 10^4.'
    },
    {
        id: 'problem_015',
        title: '15. Intersection of Two Arrays',
        description: 'Given two arrays, return the intersection of the two arrays. Each element in the result must be unique.',
        inputFormat: 'Two integer arrays.',
        outputFormat: 'Return the intersection of the arrays.',
        Difficulty: 'Easy',
        examples: [
            {
                input: '1 2 2 1\n2 2',
                output: '2'
            },
            {
                input: '4 9 5\n9 4 9 8 4',
                output: '9 4'
            }
        ],
        constraints: 'The length of each array will be between 1 and 1000.'
    },
    {
        id: 'problem_016',
        title: '16. Rotate Image',
        description: 'Given an n x n 2D matrix, rotate the image by 90 degrees (clockwise).',
        inputFormat: 'A 2D array (matrix) of size n x n.',
        outputFormat: 'Return the matrix after rotating it by 90 degrees clockwise.',
        Difficulty: 'Medium',
        examples: [
            {
                input: '[[1,2,3],[4,5,6],[7,8,9]]',
                output: '[[7,4,1],[8,5,2],[9,6,3]]'
            },
            {
                input: '[[5,1,9,11],[2,4,8,10],[3,6,7,12],[13,14,15,16]]',
                output: '[[13,2,3,5],[14,4,6,1],[15,8,7,9],[16,10,12,11]]'
            }
        ],
        constraints: 'The matrix will have n x n elements with n between 1 and 20.'
    },
    {
        id: 'problem_017',
        title: '17. Search Insert Position',
        description: 'Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.',
        inputFormat: 'A sorted array of integers and a target integer.',
        outputFormat: 'Return the index where the target should be inserted.',
        Difficulty: 'Easy',
        examples: [
            {
                input: '[1,3,5,6]\n5',
                output: '2'
            },
            {
                input: '[1,3,5,6]\n2',
                output: '1'
            }
        ],
        constraints: 'The array will have at most 10^4 elements.'
    },
    {
        id: 'problem_018',
        title: '18. 3Sum',
        description: 'Given an array of integers, return all unique triplets in the array that sum up to zero.',
        inputFormat: 'An array of integers.',
        outputFormat: 'Return a list of unique triplets that sum up to zero.',
        Difficulty: 'Medium',
        examples: [
            {
                input: '[-1,0,1,2,-1,-4]',
                output: '[[-1,-1,2],[-1,0,1]]'
            },
            {
                input: '[0,1,1]',
                output: '[]'
            }
        ],
        constraints: 'The array length will not exceed 3000.'
    },
    {
        id: 'problem_019',
        title: '19. Remove Nth Node from End of List',
        description: 'Given the head of a linked list, remove the nth node from the end of the list and return its head.',
        inputFormat: 'A linked list and an integer n.',
        outputFormat: 'Return the head of the modified list.',
        Difficulty: 'Medium',
        examples: [
            {
                input: '1 -> 2 -> 3 -> 4 -> 5\n2',
                output: '1 -> 2 -> 3 -> 5'
            },
            {
                input: '1\n1',
                output: '[]'
            }
        ],
        constraints: 'The linked list will have at most 30 nodes.'
    },
    {
        id: 'problem_020',
        title: '20. Find the Missing Number',
        description: 'Given an array containing n distinct numbers taken from 0 to n, find the one that is missing.',
        inputFormat: 'An array of distinct numbers between 0 and n.',
        outputFormat: 'Return the missing number.',
        Difficulty: 'Easy',
        examples: [
            {
                input: '[3,7,1,2,8,4,5]',
                output: '6'
            },
            {
                input: '[0,1]',
                output: '2'
            }
        ],
        constraints: 'The array will contain n distinct numbers, and its length will be n.'
    },
    {
        id: 'problem_021',
        title: '21. Find the Duplicate Number',
        description: 'Given an array of integers, find the duplicate number in it. The array contains n + 1 integers where each integer is between 1 and n (inclusive).',
        inputFormat: 'An array of integers where 1 ≤ arr[i] ≤ n and there is exactly one duplicate number.',
        outputFormat: 'Return the duplicate number.',
        Difficulty: 'Medium',
        examples: [
          { input: '[1, 3, 4, 2, 2]', output: '2' },
          { input: '[3, 1, 3, 4, 2]', output: '3' }
        ],
        constraints: 'The length of the array is n + 1, where n is the number of distinct elements.'
      },
      {
        id: 'problem_022',
        title: '22. Rotate an Array',
        description: 'Given an array, rotate the array to the right by k steps, where k is non-negative.',
        inputFormat: 'An array of integers and a non-negative integer k representing the number of rotations.',
        outputFormat: 'Return the rotated array.',
        Difficulty: 'Medium',
        examples: [
          { input: '[1, 2, 3, 4, 5, 6, 7], 3', output: '[5, 6, 7, 1, 2, 3, 4]' },
          { input: '[1, 2], 1', output: '[2, 1]' }
        ],
        constraints: 'The length of the array is at most 10^5.'
      },
      {
        id: 'problem_023',
        title: '23. Merge Intervals',
        description: 'Given a collection of intervals, merge all overlapping intervals.',
        inputFormat: 'A collection of intervals, where each interval is represented as an array of two integers [start, end].',
        outputFormat: 'Return the merged intervals.',
        Difficulty: 'Hard',
        examples: [
          { input: '[[1, 3], [2, 4], [5, 7], [6, 8]]', output: '[[1, 4], [5, 8]]' },
          { input: '[[1, 2], [3, 5], [4, 7], [8, 10]]', output: '[[1, 2], [3, 7], [8, 10]]' }
        ],
        constraints: 'The number of intervals is at most 10^4.'
      },
      {
        id: 'problem_024',
        title: '24. Top K Frequent Elements',
        description: 'Given a non-empty array of integers, return the k most frequent elements.',
        inputFormat: 'An array of integers and an integer k representing the number of elements to return.',
        outputFormat: 'Return the k most frequent elements in any order.',
        Difficulty: 'Medium',
        examples: [
          { input: '[1,1,1,2,2,3], 2', output: '[1, 2]' },
          { input: '[1], 1', output: '[1]' }
        ],
        constraints: 'The number of elements in the array is at most 10^4, and k is at most the number of unique elements in the array.'
      },
      {
        id: 'problem_025',
        title: '25. Reverse Words in a String',
        description: 'Given an input string, reverse the string word by word.',
        inputFormat: 'A string containing words separated by spaces.',
        outputFormat: 'Return the string with words reversed but the order of the words preserved.',
        Difficulty: 'Medium',
        examples: [
          { input: '"the sky is blue"', output: '"blue is sky the"' },
          { input: '"  hello world!  "', output: '"world! hello"' }
        ],
        constraints: 'The input string is non-empty and consists of words separated by spaces.'
      },
      {
        id: 'problem_026',
        title: '26. Valid Anagram',
        description: 'Given two strings, return true if they are anagrams of each other, and false otherwise.',
        inputFormat: 'Two strings, s1 and s2.',
        outputFormat: 'Return true if s1 and s2 are anagrams, false otherwise.',
        Difficulty: 'Easy',
        examples: [
          { input: '"anagram", "nagaram"', output: 'true' },
          { input: '"rat", "car"', output: 'false' }
        ],
        constraints: 'The strings consist of lowercase English letters.'
      },
      {
        id: 'problem_027',
        title: '27. Group Anagrams',
        description: 'Given an array of strings, group the anagrams together.',
        inputFormat: 'An array of strings.',
        outputFormat: 'Return a list of groups of anagrams.',
        Difficulty: 'Medium',
        examples: [
          { input: '["eat", "tea", "tan", "ate", "nat", "bat"]', output: '[["eat","tea","ate"],["tan","nat"],["bat"]]' },
          { input: '[""]', output: '[[""]]' }
        ],
        constraints: 'The input array has at most 10^4 strings.'
      },
      {
        id: 'problem_028',
        title: '28. Container With Most Water',
        description: 'Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai), n vertical lines are drawn such that the two endpoints of a line are at (i, ai) and (i, 0). Find two lines that together with the x-axis form a container, such that the container contains the most water.',
        inputFormat: 'An array of non-negative integers representing the height of each vertical line.',
        outputFormat: 'Return the maximum area of the container formed.',
        Difficulty: 'Medium',
        examples: [
          { input: '[1,8,6,2,5,4,8,3,7]', output: '49' },
          { input: '[1,1]', output: '1' }
        ],
        constraints: 'The number of elements in the array is at most 10^5.'
      },
      {
        id: 'problem_029',
        title: '29. Single Number',
        description: 'Given a non-empty array of integers, every element appears twice except for one. Find that single one.',
        inputFormat: 'An array of integers.',
        outputFormat: 'Return the element that appears once.',
        Difficulty: 'Easy',
        examples: [
          { input: '[2, 2, 1]', output: '1' },
          { input: '[4, 1, 2, 1, 2]', output: '4' }
        ],
        constraints: 'The number of elements in the array is at most 10^5.'
      },
      {
        id: 'problem_030',
        title: '30. Find the Missing Number',
        description: 'Given an array containing n distinct numbers taken from 0 to n, find the one that is missing.',
        inputFormat: 'An array of distinct numbers between 0 and n.',
        outputFormat: 'Return the missing number.',
        Difficulty: 'Easy',
        examples: [
          { input: '[3,7,1,2,8,4,5]', output: '6' },
          { input: '[0,1]', output: '2' }
        ],
        constraints: 'The array will contain n distinct numbers, and its length will be n.'
      }
];

export default problemsData;