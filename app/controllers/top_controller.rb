class TopController < ApplicationController
  def index
    @contents = Content.joins(:page).select("contents.topic,contents.updated_at,contents.page_id,pages.title").order("contents.updated_at desc").limit(5)
    # binding.pry
  end
end