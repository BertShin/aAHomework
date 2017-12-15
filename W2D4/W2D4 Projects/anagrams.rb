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
