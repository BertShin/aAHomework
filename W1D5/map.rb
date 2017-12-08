class Map

  def initialize
    @map = []
  end

  def assign(key, value)
    pair_idx = @map.index { |pair| pair[0] == key }
    pair_idx ? @map[pair_idx][1] = value : @map.push([key, value])
    [key, value]
  end

  def lookup(key)
    @map.each { |pair| return pair[1] if pair[0] == key }
  end

  def remove(key)
    @map.reject! { |pair| pair[0] == key }
  end

  def show
    @map
  end

end
