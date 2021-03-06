// Print 1-255
// Print1To255()
// Print all the integers from 1 to 255. 
// -------------
function print255(){
	for(var x=1; x<=255; x++){
  console.log(x);
	}	
}
// print255();
//----------------
// Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far. 
function intsAndSum(){
	var sum=0;

	for(var x=0; x<=255; x++){
		sum+=x;
		console.log(x);
		console.log(sum);
	}
}
// intsAndSum();
//-----------------
// Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print its largest element. 
function PrintMaxOfArray(arr){
	for(var x=0; x<arr.length; x++){
		var max=arr[x];
		if(arr[x]>max){
			max=arr[x];
		}
	}
	console.log(max)
}
//PrintMaxOfArray([0,3,5,6]);
// Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).  
function ReturnOddsArray1To255(){
	var oddArr=[];
	for(var x=1; x<=255; x++){
		if(x%2 != 0){
			oddArr.push(x);
		}
	}
	return oddArr;
}
// var y=ReturnOddsArray1To255();
// console.log(y);
// Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y. 
function ReturnArrayCountGreaterThanY(arr,y){
	var count=0;
	for(var x=0; x<arr.length; x++){
		if (arr[x] > y){
			count+=1;
		}
	}
	console.log(count);
}
//ReturnArrayCountGreaterThanY([1,10,3],2);

// Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr){
	var max=arr[0];
	var min=arr[0];
	var avg=0;
	var avg_sum=0;

	for(var x=0; x<arr.length; x++){
		//find max
		if(arr[x]>max){
			max=arr[x];
		}
		if(arr[x]<min){
			min=arr[x];
		}
		avg_sum+=arr[x];
	}
	avg=avg_sum/arr.length;
	console.log(max, min, avg);
}
//PrintMaxMinAverageArrayVals([1,2,3]);

// Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringforArrayNegativeVals(arr){
	for(var x=0; x<arr.length; x++){
		if(arr[x] < 0){
			arr[x] = 'Dojo'
		}
	}
	console.log(arr);
}
//SwapStringforArrayNegativeVals([-1, -1, 3,5])

// Print Odds 1-255
// PrintOdds1To255()
// Print all odd integers from 1 to 255.  
function PrintOdds1To255(){
	for(var x=1; x<=255; x++){
		if(x%2 != 0){
			console.log(x);
		}
	}
	
}
//PrintOdds1To255();


// Iterate and Print Array
// PrintArrayVals(arr)
// Iterate through a given array, printing each value. 
function PrintArrayVals(arr){
	for(var x=0; x<arr.length; x++){
		console.log(arr[x]);
	}
}
//PrintArrayVals([1,2,3]);

// Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average. 
function PrintAverageOfArray(arr){
	var sum=0;
	var avg=0;
	for(var x=0; x<arr.length; x++){
		sum+=arr[x];
	}
	avg=sum/arr.length;
	console.log(avg);
}
//PrintAverageOfArray([0,1,2,3]);
// Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values. 
function SquareArrayVals(arr){
	for(var x=0; x<arr.length; x++){
		arr[x]=arr[x]*arr[x];
	}
	return arr;
}
//console.log(SquareArrayVals([1,2,3]));

// Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero. 
function ZeroOutArrayNegativeVals(arr){
	for(var x=0; x<arr.length; x++){
		if(arr[x]<0){
			arr[x] = 0;
		}
	}
	return arr;
}
//console.log(ZeroOutArrayNegativeVals([-1,0,3]));
// Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (z
function ShiftArrayValsLeft(arr){
	for(var x=0; x<arr.length; x++){
		arr[x]=arr[x+1];
	}
	return arr;
}
//console.log(ShiftArrayValsLeft([1,2,3]));