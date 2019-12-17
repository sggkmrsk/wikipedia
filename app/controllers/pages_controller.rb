class PagesController < ApplicationController
  before_action :set_page ,only: :show

  def top
  end
  
  def index
    @pages = Page.all.order("created_at DESC")
  end

  def new
    @page = Page.new
  end

  def create
    Page.create(page_params)
  end

  def show
    @content = Content.new
    @contents = @page.contents
    # @comment = Comment.new
    # @comments = @page.comments
  end

  private
  def page_params
    params.require(:page).permit(:title,:summary).merge(user_id: current_user.id)
  end

  def set_page
    @page = Page.find(params[:id]) 
  end
end
