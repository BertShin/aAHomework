fish = ['fish', 'fiiish', 'fiiiiish', 'fiiiish',
  'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']

tiles_array = ["up", "right-up", "right", "right-down",
   "down", "left-down", "left",  "left-up" ]


class Array

  def longest_fish
    longest_fish = nil

    (0...self.length-1).each do |fish1|
      (fish1+1...self.length).each do |fish2|
        if self[fish2].length > self[fish1].length
          longest_fish = self[fish2]
        end
      end
    end

    longest_fish
  end

  def merge_sort(&prc)
    prc ||= Proc.new { |x, y| y.length <=> x.length }
    return self if length <= 1
    middle = length / 2

    sorted_left = self.dup.take(middle).merge_sort(&prc)
    sorted_right = self.dup.drop(middle).merge_sort(&prc)

    Array.merge(sorted_left, sorted_right, &prc)
  end

  def self.merge(left, right, &prc)
    merge = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merge << left.shift
      when 0
        merge << left.shift
      when 1
        merge << right.shift
      end
    end

    merge.concat(left).concat(right)
    merge

  end

  def clever_octopus
    longest_fish = self.first

    self.each do |fish|
      if fish.length > longest_fish.length
        longest_fish = fish
      end
    end

    longest_fish
  end

  def slow_dance(direction)

    self.each_with_index do |tile, index|
      return index if tile == direction
    end
  end
end

tiles_hash = {
    "up" => 0,
    "right-up" => 1,
    "right"=> 2,
    "right-down" => 3,
    "down" => 4,
    "left-down" => 5,
    "left" => 6,
    "left-up" => 7
  }

def fast_dance(direction, tiles_hash)
  tiles_hash[direction]
end
