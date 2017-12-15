# Be able to determine the time and space complexity of a method
# Be able to recognize when and how time or space complexity can be
# improved
# Be able to compare different methods and discuss how changing inputs
# affects each ones overall runtime.

# Phase 1
# Write a method called first_anagram that will generate and store
# all possible anagrams of the first str. Check if the second
# strring is one of these

def first_anagram(str1, str2)
  all_anagrams(str1).include?(str2)
end

def all_anagrams(str)
  return [str] if str.length <= 1
  prev_anas = all_anagrams(str[0...-1])
  new_anas = []

  prev_anas.each do |anagram|
    (0..anagram.length).each do |i|
      new_anas << anagram.dup.insert(i, str[-1])
    end
  end

  new_anas
end

# Phase 2
# write a method that iterates over both strings. As you find letters
# that appear in both words, delete them one at a time. They are
# anagrams if both the strings are empty at the end.

def second_anagram?(str1, str2)
  letters1 = str1.split('')
  letters2 = str2.split('')

  letters1.each do |letter|
    target = letters2.find_index(letter)
    return false unless target
    letters2.delete_at(target)
  end

  letters2.empty?
end


# Write a method #third_anagram? that solves the problem by sorting both
# strings alphabetically. The strings are then anagrams if and only if
# the sorted versions are the identical.
# What is the time complexity of this solution?
# Is it better or worse than #second_anagram??

def third_anagram?(str1, str2)
  letters1 = str1.chars.sort
  letters2 = str2.chars.sort
  return false if letters1 != letters2
  true
end

# Write one more method #fourth_anagram?. This time, use two Hashes to
# store the number of times each letter appears in both words.
# Compare the resulting hashes.
# What is the time complexity?
# Bonus: Do it with only one hash.

def fourth_anagram?(str1, str2)
  hash1 = Hash.new { |h, k| h[k] = 0 }
  hash2 = Hash.new { |h, k| h[k] = 0 }

  str1.chars.each do |char|
    hash1[char] += 1
  end

  str2.chars.each do |char|
    hash2[char] += 1
  end

  return true if hash1 == hash2
  false
end
