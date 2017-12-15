# Phase 1:
# Write a function that iterates through the array and finds all
# sub-arrays using nested loops (O(n^2)). First make an array to hold
# all sub arrays, then find the sums of each sub-array and return the
# max


def sub_sum(array)
  sub_arrays = []

  array.each_index do |idx1|
    (idx1..array.length - 1).each do |idx2|
      sub_arrays << array[idx1..idx2]
    end
  end

  sub_arrays.map { |arr| arr.reduce(:+) }.max

end

# Since this method uses nested loops, it is O(n^2)
# because of the call to map at the bottom, it becomes
# O(n^3)? I'm not sure why it goes from
# O(n^2) -> O(n^3)
# Also why is it cubic space as well? is it because of
# the three arguments?

def sub_sum2(array)
  largest = array.first
  current = array.first

  return array.max if array.all? { |num| num < 0 }

  array.drop(1).each do |num|
    current = 0 if current < 0
    current += num
    largest = current if current > largest
  end

  largest

end


# I had a really hard time figuring out how to create a method that
# was in linear time. Im not sure as to why this is O(1) constant space.
# I will bring questions in with me tomorrow.
