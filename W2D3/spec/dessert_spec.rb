require 'rspec'
require 'dessert'

describe Dessert do
  let(:chef) { double("chef", name: "Albert") }
  let(:donut) { Dessert.new("donut", 12, chef) }

  describe "#initialize" do

    it "sets a type" do
      expect(donut.type).to eq("donut")
    end

    it "sets a quantity" do
      expect(donut.quantity).to eq(12)
    end

    it "starts ingredients as an empty array" do
      expect(donut.ingredients).to be_empty
    end


    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("cake", "one", "Bert") }.to raise_error(ArgumentError)
    end

  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      donut.add_ingredient("flour")
      expect(donut.ingredients).to eq(["flour"])
    end

  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
      donut.add_ingredient("sugar")
      expect(donut.ingredients).to eq(donut.ingredients.shuffle)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      donut.eat(1)
      expect(donut.quantity).to eq(11)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect { donut.eat(14) }.to raise_error("not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and_return("Albert")
      expect(donut.serve).to eq("Albert has made 12 donuts!")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(donut)
      donut.make_more
    end

  end
end
