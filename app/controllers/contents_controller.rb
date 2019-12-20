class ContentsController < ApplicationController
  before_action :set_page ,only: :index

  def index
  end
 
  def create
    Content.create(content_params)
  end

  def edit
  end

  def update
  end

  private
  def content_params
    params.require(:content).permit(:topic,:body,:image).merge(user_id: current_user.id).merge(page_id: @page.id)
  end

  def set_page
    @page = Page.find(params[:page_id])
  end

end
