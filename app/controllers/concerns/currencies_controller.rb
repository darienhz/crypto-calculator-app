class CurrenciesController < ApplicationController
  def index

  end

  def search
    @currencies = Currency.where('LOWER(name) LIKE ?', "%#{params[:search].downcase}%")
    render json: { currencies: @currencies }
  end

  # Takes in currency id and amount owned
  # Returns final calculation
  def calculate

  end

  private

  def currency
    @currency ||= Currency.find(params[:id])
  end
end
