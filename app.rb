require 'sinatra'
require 'haml'
require 'sass'

get '/styles.css' do
  scss :styles
end

get '/' do
  haml :index
end