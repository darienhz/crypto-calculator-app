# class Currency < ApplicationRecord
#   def current_price
#     url = 'https://api.coinmarketcap.com/v1/ticker/'
#     request = HTTParty.get(url + self.slug)
#     response = JSON.parse(request.body)
#   end
# end

class Currency < ApplicationRecord
  def current_price
    api_key = '26e005a9-3955-4825-8fdc-2b932148a436'
    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest'
    symbol = self.currency_symbol
    query = {
      'symbol' => symbol
    }
    headers = {
      'X-CMC_PRO_API_KEY' => api_key,
      'Accepts' => 'application/json'
    }
    request = HTTParty.get(url, headers: headers, query: query)
    puts request
    response = JSON.parse(request.body)['data'][symbol]['quote']['USD']['price']
  end
end
