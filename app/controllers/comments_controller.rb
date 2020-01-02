class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_page ,only: [:create,:destroy]

  def index
  end

  def create
    Comment.create(comment_params)
    redirect_to page_path(@page.id)
  end

  def show
  end

  def destroy
    comment = @page.comments.find(params[:id])
    if comment.user_id == current_user.id
      comment.destroy
      redirect_to page_path(@page.id)
    else
      redirect_to page_path(@page.id)
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:comment).merge(user_id: current_user.id).merge(page_id: @page.id)
  end

  def set_page
    @page = Page.find(params[:page_id])
  end
end