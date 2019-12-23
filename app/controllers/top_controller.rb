class TopController < ApplicationController
  def index
    @pages = Page.order("created_at desc").limit(5)
    @contents = Content.joins(:page).select("contents.topic,contents.updated_at,contents.page_id,pages.title").order("contents.updated_at desc").limit(5)
    @comments = Comment.joins(:page).select("comments.comment,comments.created_at,comments.page_id,pages.title").order("comments.created_at desc").limit(5)
  end
end