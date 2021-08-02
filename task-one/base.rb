require "json"
require "net/http"
require "uri"

module Measurabl
  class Base
    @@base_api = "https://5c37c33f7820ff0014d927c5.mockapi.io/msr"

    def initialize
    end

    def perform_get(endpoint)
      begin
        raise "No endpoint provided" if endpoint.empty?

        uri = URI("#{@@base_api}#{endpoint}")
        res = Net::HTTP.get_response(uri)
      rescue => exception
        puts "Error: #{exception.message}"
        puts exception.inspect
      end

      JSON.parse(res.body) if res.is_a?(Net::HTTPSuccess)
    end
  end
end
