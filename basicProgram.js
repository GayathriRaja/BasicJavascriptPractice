// console.log("Hello World")

// var a=[5]
// var arr=[]
// for(var i=0;i<a.length-3;i++){
//   var sum = a.slice(i,i+1).reduce(((prev,curr)=>prev+curr),0)
//   arr.push(sum/1)
// }
// console.log("arr",arr)

// var findMaxAverage = function(nums, k) {
//   var arr=[]
//   var sum=0
//   // console.log(nums.length-(k-2))
//   for(var i=0;i<k;i++){
//     if(nums[i]){
//       sum=sum+nums[i]
//     }
//   }
//   console.log(sum)

//   arr.push(sum/k)

//   for(var j=0;j<nums.length;j++){
//       sum = (sum - nums[j] + nums[k+j])
//       // console.log(nums[j])
//       // console.log(nums[nums.length-1-j])

//       arr.push(sum/4)
//   }

//   return arr.sort((a,b)=>b-a)[0]
// }

// console.log(findMaxAverage([1,12,-5,-6,50,3],4))
// console.log(findMaxAverage([5],1))
// console.log(findMaxAverage([7,4,5,8,8,3,9,8,7,6],7))

// s = "aaaaaaabc"
// goal = "aaaaaaacb"

// // Expected : true

// let count = 0
// let arr = []

// if(s.length!=goal.length){
//     return false
// }

// if(s===goal){
//     for (let i = 0;  i < s.length; i++) {
//            if(s[i]==goal[i]){
//            count ++
//            arr.push(i)
//     }
//       }
// }else{
// for(var i=0;i<s.length;i++){

//     if(s[i]!==goal[i]){
//         count ++
//         arr.push(i)
//     }
// }}

// let k = s.split("")

// if(count==2){
//     let temp = k[0]
//     k[0]=k[1]
//     k[1]=temp

//   if(k.join('') == goal){
//     return true
// }
// }

// return false

// var isWinner = function(player1, player2) {
//     let count1=0
//     let count2=0

//       for(var i=0;i<player1.length;i++){

//          if(player1[i-1]==10 || player1[i-2]==10){
//               count1=count1+(2*player1[i])
//             //   console.log("count1", 2*player1[i])

//          }
//          if(player2[i-1]==10 || player2[i-2]==10){
//               count2=count2+(2*player2[i])
//          }
//         if(player1[i-1]!==10 && player1[i-2]!==10){
//          count1=count1+player1[i]
//         //  console.log("count1", player1[i])

//         }
//          if(player2[i-1]!==10 && player2[i-2]!==10){
//          count2=count2+player2[i]
//         }

//         // console.log("count1", count1)

//       }

//       console.log("count1",count1)
//       console.log("count2",count2)

//       if(count1>count2){
//           return  1
//       }else if(count2>count1){
//           return 2
//       }else{
//           return 0
//       }
// };

// console.log(isWinner([3,6,10,8],[9,9,9,9]))

// var distanceTraveled = function(mainTank, additionalTank) {

// let count = 0

// while(mainTank>=5){

//     // count = count + (mainTank*10)

//     if(additionalTank >= 1){
//         mainTank++
//         additionalTank--
//     }
//     // console.log(distanceTraveled(4,1))
//     count = count + (mainTank*10)
//     mainTank = Math.floor(mainTank/5)
// }
// count = count + (mainTank*10)

//     for(var i=5; i<=mainTank;i+=5){
//         //  console.log("i value", i)
//          if(additionalTank > 0){
//             mainTank++
//             additionalTank--
//          }
//     }
//     count = count + (mainTank*10)

//     return count

// };

// console.log(distanceTraveled(4,1))
// console.log(distanceTraveled(5,10))
// console.log(distanceTraveled(1,2))
// console.log(distanceTraveled(9,1))

// function removeDigit(number, digit) {
//     let digitIndex = -1;
//     const n = number.length;
//     const digitsArr = number.split("");

//     for (let i = 0; i < n; i++) {
//       if (digitsArr[i] === digit) {
//         digitIndex = i;
//         if (i < n && digitsArr[i + 1] > digit) {
//           digitsArr[i] = "";
//           return digitsArr.join("");
//         }
//       }
//     }

//     if (digitIndex === -1) return number;
//     else {
//       digitsArr[digitIndex] = "";
//       return digitsArr.join("");
//     }
//   }

//   removeDigit("1231","1")

// var passThePillow = function(n, time) {
//     let count = 1
//     let flag = false

//     while(time !== 0){

//     if(count == 1){
//         flag = false
//     }else if(count == n){
//          flag = true
//     }

//     if(!flag){
//         count ++
//     }else{
//         count--
//     }

//           time --

//     }
//     return count
// };

// var passThePillow = function(n, time) {
//     let count = Math.floor(time / (n-1));
//     let mod = time % (n-1);
//     if(count % 2 == 0) {
//         return 1 + mod
//     }
//     return n - mod
// };

// console.log(passThePillow(6,3))
// console.log(passThePillow(3,2))

// var maxSubsequence = function(nums, k) {
//     var val = [...nums].sort((a,b)=>b-a)
//     var num = val.slice(0,k)

// console.log("num",num)

// var arr = []
//     for(var i=0;i<nums.length;i++){
//         let count1 = arr.filter(a=> a===nums[i]).length
//         let count2 = num.filter(b=> b===nums[i]).length

// console.log("nums[i]",nums[i])
// // console.log("count2",count2)

//         if(num.includes(nums[i]) && count2>count1 ){
//             arr.push(nums[i])
//         }
//         if(arr.length === k){
//             break
//         }
//     }

//      return arr
// };

// // var nums = [5,2,3,5,2]
// // var k = 3

// var nums = [-16,-13,8,16,35,-17,30,-8,34,-2,-29,-35,15,13,-30,-34,6,15,28,-23,34,28,-24,15,-17,10,31,32,-3,-36,19,31,
// -5,-21,-33,-18,-23,-37,-15,12,-28,-40,1,38,38,-38,33,-35,-28,-40,4,-15,-29,-33,-18,-9,-29,20,1,36,-8,23,-34,16,-7,13,39,38,
// 7,-7,-10,30,9,26,27,-37,-18,-25,14,-36,23,28,-15,35,-9,1]
// var k = 8

// console.log(maxSubsequence(nums,k))

// var addToArrayForm = function(num, k) {
//     const val = (BigInt(num.join('')) + BigInt(k)).toString().split('').split('n')[0]
//     console.log("val", val)
//     return val.map(a=> Number(a))
// };

// i=[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
// j=516

// console.log(addToArrayForm(i,j))

// var checkOnesSegment = function(s) {
//     let isZero = false
//     let countOne = 0
//     let count = 0
//     for(var i=0;i<s.length;i++){
//           if(s[i] == 1){
//               countOne++
//           }

//           if(s[i] == 1 && s[i+1] == 1 && !isZero){
//              count++;
//              isZero=true
//           }else if(s[i] == 0 && s[i+1] == 1){
//             return false
//           }
//     }

//     if((count === 1 ) || countOne === 1){
//         return true
//     }

//     return false
//     };

// // const data = "1001"
// // const data = "111"
// const data = "10110000"

// console.log(checkOnesSegment(data))

// var longestSubarray = function(nums) {

//     const data = nums.join('').split('0')
//     data.sort((a,b)=>b-a)[0]
//     console.log("data", data)
//     const val = data.length
//     if(val === nums.length){
//         return val-1
//     }else{
//          return val
//     }

// };
// array = [1,1,0,1]
// console.log(longestSubarray(array))

// var findKthLargest = function(nums, k) {
//     // nums.sort((a,b)=>b-a)
//     // return nums[k-1]

//    let data = nums[0]
//    const arr = []

//    for(var i=0;i<nums.length;i++){
//        if(data < nums[i]){
//            arr[arr.length] = nums[i]
//            data = nums[i]
//        }
//        if(arr.length === k){
//            break;
//        }
//    }
//     // console.log(arr)
//     return arr;
// };

// nums = [3,2,1,4,5,6]
// k = 2
// console.log(findKthLargest(nums, k))

// -------------------------------------------------------

// 2 pointers approach-------------------------------------

// var arr = [1,3,6,8,9,10]
// var sum = 11

// var left = 0
// var right = arr.length-1

// function pointersApproach(){

//     for(var i=0;i<arr.length; i++){
//         if(arr[left]+arr[right] === sum){
//             console.log("left :", left + " right:", right)
//             return "match found" + "Left : "+ left + " , Right: "+ right
//         }else if(arr[left]+arr[right] < sum){
//              left=left+1
//         }else{
//             right=right-1
//         }
//     }
//     return "Match not found"
// }

// console.log(pointersApproach())

// ----------------------------------------------------------

// Backtracking Algorithm

// var arr = [1,2,3]
// Output = 2^n i.e 2^3=8
// Output : [ [], [1], [2], [3], [1,2], [2,3], [1,3], [1,2,3]]

// const arr = [1,2,3,4,5,6,7,8]
// const result=[]
// const collectOddvalue = (num) => {

//     if(num !== (arr.length-1)){
//         if(arr[num]%2 !== 0)  {
//             result.push(arr[num])
//         }
//         return collectOddvalue(num+1)
//     }
//     return result
// }
// console.log(collectOddvalue(0))

// Binary Search Algorithm ----------------------------------------------------------

// function binarySearch(arr, val){
//     // add whatever parameters you deem necessary - good luck!
//       let low = 0
//       let high = arr.length-1
//       let mid;
//       // if(!arr.includes(val)) return -1
//       while(arr[mid] !== val && low<=high){
//           // Get the mid value
//              mid = Math.ceil((low+high)/2)
//          // if val is greater than changing the left pointer to mid
//             if(val > arr[mid] ) {
//                 low = mid + 1
//             }
//           // if val is lesser than changing the right pointer to mid
//             else {
//                 high = mid - 1
//             }

//       }

//     // if mid value matches search element return index

//        return mid ? mid : -1
//   }

//   console.log(binarySearch([1,2,3,4,5],2) )

// console.log(binarySearch([1,3,4,5,9],2)) // 1
// console.log(binarySearch([1,2,3,4,5],3)) // 2
// console.log(binarySearch([1,2,3,4,5],5)) // 4
// console.log(binarySearch([1,2,3,4,5],6)) // -1
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10)) // 2
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95)) // 16
// console.log(binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100)) // -1

// Naive search string -------------------------------------------------------------------------

// Declaring variables
// var longStr = "hashh udauj ash uciki uda uda";
// var shortStr = "ud";
// var longStr = "lorie lolled"
// var shortStr = "lol"
// var count = 0

// Looping over long string
// Looping over short string
// character matches break out of inner loop

// function getCountOfSubStr(){
// for (var i = 0; i < longStr.length; i++) {
//   // var str = ''
//   for (var j = 0; j < shortStr.length; j++) {
//     if(shortStr[j] !== longStr[j+i]){
//        break;
//     }
//   }
//   if(j===shortStr.length){
//      count++
//   }

// }
//  return count
// }

// console.log(getCountOfSubStr())



// var arr=[14,8,3,2,10]
// console.log("initial arr", arr)        // var temp = arr[j]

// let min;
// for(var i=0;i<arr.length;i++){
//   min = arr[i]
//   for(var j=i+1;j<arr.length;j++){
//       if(arr[j] < min){
//         min = arr[j]
//         [arr[i],arr[j]] = [arr[j],arr[i]]
//         console.log("arr", arr)        // var temp = arr[j]
//         // arr[j]=min
//         // min = temp
//       }
//   }

// }

// console.log("arr", arr)


// var arr = [0,1,34,22,10,19,17]

// console.log("initial arr", arr)        // var temp = arr[j]

// let min;
// for(var i=0;i<arr.length;i++){
//   min = arr[i]
//   for(var j=i+1;j<arr.length;j++){
//       if(arr[j] < arr[i]){
//         [arr[i],arr[j]] = [arr[j],arr[i]]
//       }
//   }

// }

// console.log("arr", arr)


// --------------------------- Insertion Sort ------------------------------------------


// const array = [5,7,1,2,9]

// for(var i=1;i<array.length;i++){
//        var curVal = array[i]
//        for(var j=i-1;j>=0 && array[j]>curVal;j--){
//                array[j+1] = array[j]
//        }
//        array[j+1] =curVal
// }
// console.log("sorted array", array)




// -----------------------------------------------------------------------------------------

// var mergeAlternately = function(word1, word2) {
//      // let result = word1.length > word2.length ? word1 : word2
//      let newArr = word1.split('')
//      let count=0
//       for(var i=0;i<(word1.length + word2.length) ;i+=2){
//           if(word1[count]== undefined || word2[count]== undefined){
//                if(word1[count]== undefined){
//                     newArr = newArr.concat(word2.slice(count).split(''))

//                  }
//                  break
//           }else {
//                newArr.splice(i+1,0,word2[count])
//           }
//           count++
//       }
//       console.log("newArr", newArr.join(''))
//       return newArr.join('')
//  };
//     console.log("mergeAlternately", mergeAlternately("abc", "pqr"))




// ------------------------------- Leetcode -----------------------------------


// var summaryRanges = function(nums) {  
//      var start=0;
//      var end;
//      var arr=[];
//      var flag = false;

//      for(var i=0;i<nums.length;i++){
//          if(nums[i]+1 === nums[i+1] ){
//              if(!flag){
//                 start = i
//              }
//              flag = true
//          }
//          if(nums[i]+1 !== nums[i+1]){
//             flag = false;
//             end = i;
//             (end === start )  ? arr.push(nums[end].toString()) : arr.push(nums[start]+"->"+nums[end])
//             start=i+1
//          }

//      }
//      return arr
//  };

// var summaryRanges = function(nums) {
//     let i=0, j=0;
//     let ret=[];
//     while(i<nums.length) {
//         j=i+1;
//         while(j<nums.length && nums[j]-1===nums[j-1]) {
//             j++;
//         }
//         if(i!==j-1) {
//             ret.push(""+nums[i]+"->"+nums[j-1]);
//         }else {
//             ret.push(""+nums[i]);
//         }
//         i=j;
//     }
//     return ret;
// };


// var summaryRanges = function (nums) {
//     let arr =[]
//     let res =[]
//     for(let j=0;j<nums.length;j++){
//        if(nums[j]+1 === nums[j+1]){
//         arr.push(nums[j])
//        }else if(nums[j]+1!==nums[j+1]&&nums[j]===nums[j-1]+1){
//             arr.push(nums[j])
//             res.push(arr)
//             arr=[]
//        }else{
//         res.push(nums[j])
//        }
//     }
//     for(let j=0;j<res.length;j++){
//         if(Array.isArray(res[j])){
//                 res[j] = `${res[j][0]}->${res[j][res[j].length-1]}`
//         }else{
//                 res[j]=`${res[j]}`
//         }
//     }
// return res
// };

// //  const nums = [0,1,2,4,5,7]
//  const nums = [0,2,3,4,6,8,9]

//  console.log(summaryRanges(nums))


// var maximumTime = function(time) {

//     var a = ["0->2","1->9","2->3","3->5","4->9"]
//     const arr = time.split('')
//     for(var i=0;i<arr.length;i++){
//         if(arr[i] === "?"){
//             if( i===3 || i===4){
//                 arr[i]=a[i].split("")[3]
//             }else{
//                 if(i===0){
//                    arr[1]>3 ? arr[i]='1' : arr[i]='2'

//                 }else{
//                     ['0','1'].includes(''+arr[0]) ? arr[i]='9' : arr[i]='3'
//                 }
//             }           
//         }
//     }
//      console.log(arr.join(""))
//     return arr.join("")

// };

// var time = "?4:03"
// // var time = "??:3?"
// // var time = "?3:02"
// console.log(maximumTime(time))


//Recursion

// Check if a number is Palindrome

// let n = 1234321;

// let k = n;

// function palindrome(k) {
//     if(k<1){

//     }
//     palindrome(k/n);
// }


// let str = "mad3am";
// let k = "";

// function checkPalindrome(i) {
//     if(i<0){
//         return k;
//     }

//     k = str[i] + checkPalindrome(i-1);
//     return k
// }

// const reverse = checkPalindrome(str.length-1)

// console.log("checkPalindrome",  str === reverse)


// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
// var containsNearbyDuplicate = function(nums, k) {
//     // nums=[1,2,3,3,4,1,1,1,6]
// //   const removeDuplictes = Array.from(new Set(nums));
//   const obj = new Map();
//   let result = false;
// //   var obj={} 

// nums.forEach((a,i)=>{
//     obj[a] = i;
//   })

// Object.keys(obj).forEach((a,i)=>{
//     var index = nums.indexOf(Number(a));
//     if(obj[a] !== index && Math.abs(obj[a]-index) <= k){
//         result = true;
//         return;
//     }
// })   

//   console.log("obj",  obj)

//   return result;

// };

// console.log("containsNearbyDuplicate",  containsNearbyDuplicate(nums = [1,2,3,1,2,3], k = 2))


// 3. Longest Substring Without Repeating Characters
// let s = "abcabcbb"
// Output: 3


// var lengthOfLongestSubstring = function (s) {

//     const arr = [];

//     for (let i = 0; i < s.length; i++) {
//         let result = '';
//         for (let j = i + 1; j < s.length; j++) {
//             if (i + 1 == j) {
//                 result += s[i];
//             }
//             if (!result.includes(s[j])) {
//                 result += s[j];
//                 continue;
//             }
//             break;
//         }
//         arr.push(result);
//     }

//     return arr.sort((a, b) => b.length - a.length)[0].length
// };

// console.log(lengthOfLongestSubstring(s));



// Sliding Window Concept:


// let left = 0;
// // let right = 1;
// let maxlength = 0;

// for (i = left; i < s.length; i++) {
//     let result = s[left];
//     let right = left + 1;
//     while (!result.includes(s[right]) && right < s.length) {
//         result = result + s[right];
//         right++;
//     }
//     left++;
//     maxlength = Math.max(result.length, maxlength)
// }
// console.log("maxlength", maxlength);


// var lengthOfLongestSubstring = function (s) {
//     let ans = 0;
//     const ss = new Set();
//     for (let i = 0, j = 0; j < s.length; ++j) {
//       while (ss.has(s[j])) {
//         ss.delete(s[i++]);
//       }
//       ss.add(s[j]);
//       ans = Math.max(ans, j - i + 1);
//     }
//     return ans;
//   };

// var lengthOfLongestSubstring = function (s) {
//     let longestStr = 0;
//     let set = new Set();

//     let left = 0, right = 0;

//     while (right < s.length) {
//         let letter = s[right];
//         if (!set.has(letter)) {
//             set.add(letter);
//             longestStr = Math.max(longestStr, set.size);
//             right++;
//         } else {
//             set.delete(s[left]);
//             left++;
//         }
//     }
//     return longestStr;
// };


let s = "abccccdd"
// Output: 7

let left = 0;
let right = 0;
let maxlength = 0;

for (i = right; i < s.length; i++) {
   
}
// console.log("maxlength", maxlength);

  console.log(lengthOfLongestSubstring(s));
