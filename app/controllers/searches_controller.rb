class SearchesController < ApplicationController
  def index
    @searches_pages = Page.search(params[:keyword])
    @searches_contents = Content.includes(:page).search(params[:keyword])
    @searches_comments = Comment.includes(:page).search(params[:keyword])
  end
end
