<script>

// sum

const arr = [1,3,4,9,23,50];

function arif(arr){

	let sum = 0;
	
	for (let i=0; i<arr.length; i++){
	
		sum = sum + arr[i];
	} 
	return sum;

}

console.log(arif(arr))

// sum using reduce

const output = arr.reduce((acc,cur)=>{
	
	acc = acc + cur;
	
	return acc

},0)


console.log(output)

// find maxmium num


function findMax(arr){

	let maxi = 0;
	
	for(let i=0; i < arr.length ; i++ ){
	
		if(arr[i]>maxi){
		maxs = arr[i]
		}
	}
	
	return maxs;

}

console.log(findMax(arr))


// find max number

const arrs = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const max = Math.max(...arrs)
console.log(max)


// find mimum num

const numbers = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
function mimm(numbers) {
  let smallestNum = numbers[0];
for(let i = 1; i < numbers.length; i++) {
    if(numbers[i] < smallestNum) {
      smallestNumss = numbers[i];   
    }
  }
return smallestNumss;
};

console.log(mimm(numbers));


// find mimimu number

const arrss = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
const min = Math.min(...arrss)
console.log(min)




// remove duplicate in array

let a = [2,3,4,5,5,4];
var myarray = a.filter(function(value, index)
{ 
return a.indexOf(value) == index 
}
);

console.log(myarray);

let c = [2,3,4,5,5,4];
var myarrayy = c.filter(function(value, index)
{ 
return c.indexOf(value) == index 
}
);

console.log(myarrayy);


let b = [2,3,4,5,5,4];
var myarrays = b.filter(function(value, index)
{ 
return b.indexOf(value) !== index 
}
);

console.log(myarrays);




var actualArr = ['Apple', 'Apple', 'Apple' , 'Banana', 'Mango', 'Strawberry', 'Banana'];

console.log('Actual Array: ' + actualArr);

var filteredArr = actualArr.filter(function(item, index) {
  if (actualArr.indexOf(item) == index)
    return item;
});

console.log('Filtered Array: ' + filteredArr);


const mmm = [1,2,2,2,3,4,4,5,4,0,0,0,9]

let aaaa = mmm.filter((value,index)=>{
	
	return mmm.indexOf(value) == index
	

})

console.log(aaaa)


var nums = [1,2,34,54,55,34,32,11,19,17,54,66,13];
var evens = [];
var odds = [];

var evenNumbers = function(nums) {
    for (var i = 0; i < nums.length; i++) {

        if ((nums[i] % 2) != 1) {
            evens.push(nums[i]);
                console.log(evens);
        }
        else {
            odds.push(nums[i]);
                console.log(odds);
        }
    }

};

evenNumbers(nums);
alert(evens);
alert(odds);


</script>
