// Problem 1: Let’s play a mind game

// A JS program to perform arithmetic operations using Functions

function mindGame(posNumber) {
    if (isNaN(posNumber)) {
        return "You should input a number";
    } else {
        // posNumber*=3;
        // posNumber+=10;
        // posNumber/=2;
        // posNumber-=5;
        posNumber = (((posNumber * 3) + 10) / 2) - 5;
        return posNumber;
    }
}

// --------------------------------------------------------------

// Problem 2: Finding even or odd

// A JS program to find whether the length of a given string is even or odd

is_string = function (input) {
    if (Object.prototype.toString.call(input) === '[object String]')
        return true;
    else
        return false;
};

function evenOdd(number) {
    if (is_string(number) == false)
        return "You Should provide a string";
    else {
        if (number.length % 2 == 0) {
            return "even";
        } else {
            return "odd";
        }
    }
}

// --------------------------------------------------------------

// Problem 3: Is Less or Greater than seven

// A Function to generate less/greater than 7 and print subtraction / multiplication result

function isLGSeven(number) {
    if (isNaN(number)) {
        return "You should input a number";
    }
    else {
        if ((number - 7) < 7) {
            return number - 7;
        } else {
            return 2 * number;
        }
    }
}

// --------------------------------------------------------------

// Problem 4: Finding Bad data

// A JS program to count negative numbers from the given array

let is_array = function (input) {
    if (toString.call(input) === "[object Array]")
        return true;
    else
        return false;
};
function findingBadData(number) {
    if (is_array(number) == false)
        return "You should input an array";
    else {
        let negNumber = 0;
        for (const num in number) {
            if (number[num] < 0)
                negNumber++;
        }
        return negNumber;
    }
}

// --------------------------------------------------------------

// Problem 5: Convert your gems into diamond

// A JS Program to generate a simple conversion from gems to diamond

function gemsToDiamond(friend1, friend2, friend3) {
    if (typeof (friend1) != "undefined" && typeof (friend2) != "undefined" && typeof (friend3) != "undefined") {
        if (isNaN(friend1) || isNaN(friend2) || isNaN(friend3)) {
            return "You should input numbers";
        }
        else {
            let totalDiamond = friend1 * 21 + friend2 * 32 + friend3 * 43;
            if (totalDiamond > 2000) {
                return totalDiamond - 2000;
            } else {
                return totalDiamond;
            }
        }
    }
    else {
        return "Input the correct number of parameters";
    }
}