class LRUCache

  def initialize(cache = [], size)
    @cache = cache
    @size = size
  end

  def count
    cache.count
  end

  def add(el)
    if @cache.count == @size
      @cache.shift
      @cache << el
    else
      @cache << el
    end
  end

  def show
    @cache
  end

end
