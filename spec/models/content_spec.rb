require 'rails_helper'
RSpec.describe Content ,type: :model do
  describe '#create' do
    let(:content) {build_stubbed(:content)}
    context 'can save' do
      it "is valid with a title, summary, image, user_id,page_id ,sort" do
        expect(content).to be_valid
      end
      it "is valid without a body" do
        content.body = ""
        expect(content).to be_valid
      end
      it "is valid without a image" do
        content.image = ""
        expect(content).to be_valid
      end
    end
    context 'can not save' do
      it "is invalid without a topic" do
        content.topic = ""
        expect(content.errors[:topic]).to include("can't be blank") if content.valid?
      end
      it "is invalid without a user_id" do
        content.user_id = ""
        expect(content.errors[:user_id]).to include("can't be blank") if content.valid?
      end
      it "is invalid without a page_id" do
        content.page_id = ""
        expect(content.errors[:page_id]).to include("can't be blank") if content.valid?
      end
      it "is invalid without a sort" do
        content.sort = ""
        expect(content.errors[:sort]).to include("can't be blank") if content.valid?
      end
    end
  end
end