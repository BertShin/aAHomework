list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# my_min(list) => 5

def my_min(list)
  min = list.first
  idx1 = 0
  while idx1 < list.length - 1
    idx2 = idx1 + 1
    while idx2 < list.length
      if list[idx1] < min
        min = list[idx1]
      elsif list[idx2] < min
        min = list[idx2]
      end

      idx2 += 1
    end

    idx1 += 1
  end

  min
end

# The time complexity for this function is O(n^2) because
# of the nested while loop

def my_min2(list)
  min = list.first

  list.each do |num|
    if num < min
      min = num
    end
  end

  min
end

# The time complexity for this function is O(2n)
# Because of the one each loop along with the if conditional
