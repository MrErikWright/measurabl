require "./base"

module Measurabl
  class Users < Measurabl::Base
    attr_accessor :ages, :names

    def initialize
      @ages = fetch_ages
      @names = fetch_names
    end

    def combined_ages_and_names
      [@names, @ages]
        .flatten
        .group_by { |user| user["id"] }
        .values
        .map { |hash| hash.reduce(&:merge) }
    end

    def fetch_ages
      perform_get("/ages")
    end

    def fetch_names
      perform_get("/names")
    end

    def print_table_html
      html = "<table>
        <thead>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
        </thead>
        <tbody>"

      combined_ages_and_names.each do |data|
        html += "<tr>
          <td>#{data['id'] || '-'}</td>
          <td>#{data['firstName'] || '-'}</td>
          <td>#{data['lastName'] || '-'}</td>
          <td>#{data['age'] || '-'}</td>
        </tr>"
      end

      html += "</tbody>
        </table>"
      html
    end
  end
end

users = Measurabl::Users.new
puts users.print_table_html
