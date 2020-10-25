#Function

In the language of programming, a function is a set of instructions that perform a specific type of work. For example, "Show ()" is a function whose function is to display text on the output console. In the same way you can write a function for any task you want. 

#why needed?

Suppose you have to write a large program where you have to average a few numbers over and over again. To get the average, we add up the given numbers and divide by the total number we get to get the average. But it is a hassle and a waste of time to write the same type of code over and over again every time you have to average out the program. And if you write in this way, the code structure of the program becomes quite messy.
We can solve this problem by simply writing a function to find the mean. Once we write the function, we will decide at once how to calculate the average and then we can call this function wherever we go to find the average and get the average easily. At the same time the code of our program will be quite tidy because we will not write the same type of code again and again.

#Syntax

```
// Define functions using the 'function' keyword

Function function_name (parameter).

  ....

  Function body

  ....

  Return value

}
```

#Function_name 

Here we have to enter the name of the function. The name of the function must be meaningful so that the idea of what the function will do can be deduced from the name. For example, if we write a function to find the largest number between two numbers, we can name it "largest" or "large_number".

#Parameters

Here we will give the data required for the function to work. As we show the data in the () function, the program outputs that data. Such as: show ("hello"); Again, when writing a function to find the largest number, you have to tell which of the numbers is the largest number. We can send that data to that function through parameters. If you don't want to send anything again, you can leave it blank.

#Function body 

The body needs to be told how the function will work. What else does it mean to write code.

#Return value

When the function finishes working, it returns to the place from which it was called. We can send any value on return. For example, in the "largest ()" function we want to find the largest number. So you have to find the biggest number and send it back? If the value of the largest number is "a", then we return a; I will return its value with the statement.

```
Function age (): // Function name is age and there is no code in the function body

   Return 20; // If you call the function, it will get 20 as return.

 }

 Show (age ()); // 20 will be printed on the output console
 ```
 #Example
 #Determine the largest number
 ```
 / * * Largest number determination function * / Function largest (a, b) {// parameters a and b If (a is greater than b). Return b; Otherwise Return a; } } Hold big_number = largest (12,45); // A = 12, B = 45 Show ("The largest number is:" + large_number);
 ```
 
 #References

http://c.howtocode.com.bd/functions.html

http://cpbook.subeen.com/2011/09/function-programming-book.html
