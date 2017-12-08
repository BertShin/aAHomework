class Queue

  def initialize
    @queue = []
  end

  def enqueue(el)
    @queue << el
  end

  def dequeue
    raise "Your Queue is Empty!" if empty?
    @queue.shift
  end

  def empty?
    @queue == []
  end

  def show
    @queue
  end

end
