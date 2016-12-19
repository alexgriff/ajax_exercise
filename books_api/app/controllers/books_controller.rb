class BooksController < ApplicationController

  def create
    # byebug
    @book = Book.create(title: params[:title], author: params[:author], page_count: params[:page_count])
    # byebug
    respond_to do |f|
      f.json {render json: @book}
    end
    # render json: @book
  end

  def index
    # byebug
    @books = Book.all
    render json: {books: @books}
  end


end
