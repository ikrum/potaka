# Variable
variable is a container or box where you can put value or data. You can change the value of variable at any time. Every variable have a name(identifier), whenever you will call that variable by it's name it will give you it's value. To learn more about variable visit [link1](https://theshahzada.blogspot.com/2015/04/what-is-variable.html), [link2](http://tech.priyo.com/tutorial/2014/9/30/260a67.html).

In potaka you can use <b>"ধরি"</b> keyword for declaring variable. The name of variable will start with any bangla vowel or consonant without any space in middle, at that case you can use underscore(_) instead of space.

### Syntax
```
ধরি ভ্যারিয়েবলের_নাম = ভ্যারিয়েবলের_মান; // Example: ধরি ক = ১০;
```

## Data Type
There are many types of variables, like: number, string or boolean. Example: To save your age requires number, name or address requires string. Potaka supports 4 types of data type:

1. Number, Example: ১,৩৪,৭৫৪, etc.
2. String, Example: “হ্যালো”
3. Boolean, Example: সত্য, মিথ্যা
4. Object, Example: { নাম: “পতাকা”, বয়স: “০” }

## Array / Set
Array is a speacial variable, which can hold more than one value at a time in a set. If you want to store 5 fruit name in variables you can write it like this:

```
ধরি ফল_১ = "আম";
ধরি ফল_২ = "জাম";
ধরি ফল_৩ = "কলা";
ধরি ফল_৪ = "কাঁঠাল";
ধরি ফল_৫ = "তরমুজ";

দেখাও( ফল_৪ ); // কাঁঠাল
```

We can store those 5 fruit name in only one variable. In that case we will write them inside of third bracket and the values will be seperated by comma. Array starts from index 0. So the first value stays at position 0, second value stays at position 1, so on...

```
ধরি নাম_সমূহ = ["আম", "জাম", "কলা", "কাঁঠাল", "তরমুজ"];
দেখাও( নাম_সমূহ[০] ); // আম
দেখাও( নাম_সমূহ[১] ); // জাম
দেখাও( নাম_সমূহ[২] ); // কলা
দেখাও( নাম_সমূহ[৩] ); // কাঁঠাল
দেখাও( নাম_সমূহ[৪] ); // তরমুজ
```

## Reserve Keyword
We cannot use reserve keyword as variable name, reserve keywords are given below:

|  ধরি  |   যদি  | নাহলে | এবং |   অথবা  |  সত্য  | মিথ্যা | চলবে |
|:-----:|:------:|:-----:|:---:|:-------:|:-----:|:-----:|:----:|
| ফাংশন | রিটার্ন |  অসীম | বার | _ইন্ডেক্স |  নাল  |   হয়  | থাকে |
|  হতে  |  থেকে  |  চেয়ে | হ্যা |    না   | দেখাও |  ইনপুট | টাইপ |

## Example
```
ধরি ক = ১০;
ধরি খ = ২০;
দেখাও( ক+খ ); // ৩০

ধরি মেসেজ = "আমি একজন গর্বিত বাঙ্গালি";
দেখাও( মেসেজ );

ধরি মানুষ = {

}
```
