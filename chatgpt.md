// \* i want to make a backend in nodejs and js
// it is a backend of a game where there are 5 categories
A,B,C,D,E
in every category there is 0,1,2,3,4,small,even,5,6,7,8,9,big,odd
where 0,2,4,6,8 are even
1,3,5,7,9 are odd
1,2,3,4 are small and
5,6,7,8 are big
so logic of the game is many users places bets on any of values (0,1,2,3,4,small,even,5,6,7,8,9,big,odd) from any of the category A,B,C,D,E
if any user paces bet on 0,1,2,3,4,5,6,7,8,9, the amount is multiplies by 9
if any user paces bet on small,even,big,odd the amount is multiplies by 1.98
since 0,2,4, are even and small so sum of even and small is also added to it and
since 1,3 are odd and small so sum of odd and small is also added to it and
since 6,8, are even and big so sum of even and big is also added to it and
since 5,7,9 are odd and big so sum of odd and big is also added to it and
as given in the excel sheet that i have uploaded
then we need to find the possible sums outcomes from
00000 to 99999
for example we need to sum the values of 0s of all the 5 A,B,C,D,E categories , then
we need to sum the values of 00001 of all the 5 A,B,C,D,E categories , then
we need to sum the values of 00002 of all the 5 A,B,C,D,E categories , then
it goes up to till it reaches 99999
and amount all the 00000-99999 values we need to find the smallest of all and show it
read the excel sheet carefully to understand and take the data from the excel sheet for
categories and write the whole backend code for it and also code it in the way so that
we can back test it as well
code step by step with clear comments and console logs.
take the time but do iy perfectly.

//

{
CATEGORY_A: [
{
'0': 22327.38,
'1': 9992.880000000001,
'2': 34459.380000000005,
'3': 11927.880000000001,
'4': 25468.38,
'5': 34631.46,
'6': 35076.96,
'7': 22499.46,
'8': 38208.96,
'9': 25424.46,
small: 2639.34,
even: 15638.039999999999,
big: 15154.92,
odd: 4203.54
}
],
CATEGORY_B: [
{
'0': 62783.1,
'1': 85855.68000000001,
'2': 20996.100000000002,
'3': 93280.68000000001,
'4': 90080.1,
'5': 70437.24,
'6': 43350.66,
'7': 65739.24,
'8': 54582.66,
'9': 63237.240000000005,
small: 3265.02,
even: 15733.08,
big: 9842.58,
odd: 11121.66
}
],
CATEGORY_C: [
{
'0': 117507.06,
'1': 71180.1,
'2': 77574.06,
'3': 69101.1,
'4': 104619.06,
'5': 286211.34,
'6': 29976.3,
'7': 41771.340000000004,
'8': 36780.3,
'9': 34724.340000000004,
small: 15640.02,
even: 12965.039999999999,
big: 15814.26,
odd: 11278.08
}
],
CATEGORY_D: [
{
'0': 50971.5,
'1': 74397.06,
'2': 108355.5,
'3': 59214.06,
'4': 59935.5,
'5': 46095.840000000004,
'6': 38618.280000000006,
'7': 85110.84,
'8': 71828.28,
'9': 73797.84,
small: 312.84,
even: 19437.66,
big: 5086.62,
odd: 9680.22
}
],
CATEGORY_E: [
{
'0': 91168.38,
'1': 38965.5,
'2': 27016.379999999997,
'3': 91462.5,
'4': 46582.38,
'5': 102362.76,
'6': 517562.64,
'7': 79520.76,
'8': 104759.64,
'9': 69413.76,
small: 5264.82,
even: 9844.56,
big: 15733.08,
odd: 14683.68
}
]
}

this is the response now for 6 digits from 000000 to 999999
there are how many combinations ?

000000 to 999999

000000 to 999999

now create all the combinations as keys in an array
and suppose the first element of the combination key is 0 than take 0 th value from category a
and suppose the second element of the combination key is 3 than take 3 th value from category b
and suppose the third element of the combination key is 4 than take 4 th value from category c
and suppose the fourth element of the combination key is 5 than take 5 th value from category d
and suppose the fifth element of the combination key is 9 than take 9 th value from category e
now add the keys digit suppose if key is 00000 sum is 0
if key is 08367 sum 24

because 24 is even so take SUMs even value
and 24 is from 23-45 so take the SUMs big value

// small is from 0-22
// big is from 23-45

const SUM ={
sum_even:9024.84,
sum_odd:9024.84,
sum_small:9024.84,
sum_big:9024.84,
}

now sum (add) all the values
and suppose the first element of the combination key is 0 than take 0 th value from category a
and suppose the second element of the combination key is 3 than take 3 th value from category b
and suppose the third element of the combination key is 4 than take 4 th value from category c
and suppose the fourth element of the combination key is 5 than take 5 th value from category d
and suppose the fifth element of the combination key is 9 than take 9 th value from category e
because 24 is even so take SUMs even value
and 24 is from 23-45 so take the SUMs big value

all these values and add to the key 08367
in these way get all the key values pairs console log it and
