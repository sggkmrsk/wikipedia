class ContentsController < ApplicationController
  before_action :set_page
  before_action :move_forward_sort ,only: :destroy
  before_action :move_backward_sort ,only: :create
  before_action :move_ajust_sort , only: :update

  def new
    if content = @page.contents.where(page_id: @page.id).order("sort desc").first
       sort = content.sort + 1
    else
      sort = 1
    end
      @content = Content.new(sort: sort)
  end

  def create
    Content.create(content_params)
    redirect_to page_path(@page.id)
  end

  def edit
    @content = @page.contents.find(params[:id])
  end

  def update
    content = Content.find(params[:id])
    content.update(content_params)
    redirect_to page_path(@page.id)
  end

  def destroy
    content = @page.contents.find(params[:id])
    content.destroy
    redirect_to page_path(@page.id)
  end

  private
  def content_params
    params.require(:content).permit(:topic,:body,:image,:sort).merge(user_id: current_user.id).merge(page_id: @page.id)
  end

  def set_page
    @page = Page.find(params[:page_id])
  end

  def move_forward_sort
    sort = @page.contents.find(params[:id]).sort
    @page.contents.where("sort > ?" ,sort).update_all("sort = sort - 1")
  end

  def move_backward_sort
    sort = Content.new(content_params).sort
    @page.contents.where("sort >= ?" ,sort).update_all("sort = sort + 1")
  end

  def move_ajust_sort
    sort_before = @page.contents.find(params[:id]).sort
    sort_after = Content.new(content_params).sort
    if sort_before > sort_after
      @page.contents.where("sort < ? and sort >= ?",sort_before,sort_after).update_all("sort = sort + 1")
    else
      @page.contents.where("sort > ? and sort <= ?",sort_before,sort_after).update_all("sort = sort - 1")
    end
  end
end