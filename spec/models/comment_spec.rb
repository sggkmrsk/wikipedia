require 'rails_helper'
RSpec.describe Comment ,type: :model do
  describe '#create' do
    let(:comment) {build_stubbed(:comment)}
    context 'can save' do
      it "is valid with a comment, user_id,page_id" do
        expect(comment).to be_valid
      end
    end
    context 'can not save' do
      it "is invalid without a comment" do
        comment.comment = ""
        expect(comment.errors[:comment]).to include("can't be blank") if comment.valid?
      end
      it "is invalid without a user_id" do
        comment.user_id = ""
        expect(comment.errors[:user_id]).to include("can't be blank") if comment.valid?
      end
      it "is invalid without a page_id" do
        comment.page_id = ""
        expect(comment.errors[:page_id]).to include("can't be blank") if comment.valid?
      end
    end
  end
end