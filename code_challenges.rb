# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN - Matz is nice and so we are nice *bows*

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# Psuedo Code (I don't think it's required for this part but I'm not about to get points taken off for not having it)
# Declare a method that takes in a single integer
# conditional if input is not an integer, log error
# else if integer is divisible by 2, log integer is even
# else log integer is odd
# double end for if statement and method


num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

def is_even int
    if int.class != Integer
        p 'Please enter a whole number'
    elsif int % 2 == 0
        p "#{int} is even."
    else
        p "#{int} is odd."
    end
end

is_even num1
is_even num2
is_even num3
is_even 'spaghetti'


# I'm a little confused on how to make this method only take in integers... I'm messing around trying to get back an error when no numbers are given but it seems to be converting them somehow? Like it's trying to tell me spaghetti is even... Even if it converted the string to a number equal to the number of characters spaghetti would be odd...
# NEVERMIND I MADE IT WORK HOW I WANTED IT TO!!! I switched my edge-case to the first if instead of the catch-all else and now it works! Hehe!



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

# Declare a method that takes in a string
# Log string with .delete to filter out all vowels using "aeiouAEIOU" (Gotta catch em all amirite)
# end method

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def no_vowels str
    p str.delete "aeiouAEIOU"
end

no_vowels album1
no_vowels album2
no_vowels album3
no_vowels 'ThE qUiCk BrOwN fOx JuMpS oVeR tHe LaZy DoG'



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

# Declare a method that takes in a string
# Conditional if str.downcase equals str.downcase.reverse
# Log str is a palindrome
# Else log str is not a palindrome
# double end if statement and method

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def is_palindrome str
    if str.downcase == str.downcase.reverse
        puts "#{str} is a palindrome!"
    else 
        puts "#{str} is not a palindrome!"
    end
end

is_palindrome is_palindrome1
is_palindrome is_palindrome2
is_palindrome is_palindrome3
is_palindrome 'Tacocat'
is_palindrome 'Watashi wa rubi ga sukidesu'