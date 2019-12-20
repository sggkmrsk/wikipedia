class PagesController < ApplicationController
  before_action :set_page ,only: [:show,:edit]
  
  def index
    @pages = Page.all.order("title")
  end

  def new
    @page = Page.new
  end

  def create
    Page.create(page_params)
  end

  def show
    @content = Content.new
    @contents = @page.contents.order("sort asc")
    # @comment = Comment.new
    # @comments = @page.comments
  end

  def edit
    @content = Content.new
    @contents = @page.contents.order("sort asc")
  end

  def update
    Page.update(page_params)
    redirect_to page_path
  end

  private
  def page_params
    params.require(:page).permit(:title,:summary).merge(user_id: current_user.id)
  end

  def set_page
    @page = Page.find(params[:id]) 
  end
end
