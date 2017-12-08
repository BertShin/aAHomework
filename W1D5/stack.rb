class Stack

  def initialize
    @stack = []
  end

  def add(el)
    @stack << el
  end

  def remove
    raise "Your stack is empty!" if @stack.empty?
    @stack.pop
  end

  def empty?
    @stack == []
  end

  def show
    @stack
  end

end
