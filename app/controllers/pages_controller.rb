class PagesController < ApplicationController
  before_action :set_page ,only: [:show,:edit]
  
  def index
    @pages = Page.all.order("title")
  end

  def new
    @page = Page.new
  end

  def create
    if Page.create(page_params).save
      page = Page.order("id desc").first
      redirect_to page_path(page.id)
    else
      redirect_to new_page_path
    end
  end

  def show
    @content = Content.new
    @contents = @page.contents.order("sort asc").includes(:user)
    @comment = Comment.new
    @comments = @page.comments.includes(:user)
  end

  def edit
    respond_to do |format|
      format.html
      format.json
    end
  end

  def update
    page = Page.find(params[:id])
    page.update(page_params)
    redirect_to page_path(page.id)
  end

  private
  def page_params
    params.require(:page).permit(:title,:summary,:image).merge(user_id: current_user.id)
  end

  def set_page
    @page = Page.find(params[:id])
  end
  
  def set_last_page
    
  end

end
