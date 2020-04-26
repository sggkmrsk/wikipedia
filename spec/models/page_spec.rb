require 'rails_helper'
RSpec.describe Page ,type: :model do
  describe '#create' do
    let(:page) {build_stubbed(:page)}
    context 'can save' do
      it "is valid with a title, summary, image, user_id" do
        expect(page).to be_valid
      end
      it "is valid without a image" do
        page.image = ""
        expect(page).to be_valid
      end
    end
    context 'can not save' do
      it "is invalid without a title" do
        page.title = ""
        expect(page.errors[:title]).to include("can't be blank") if page.valid?
      end
      it "is invalid without a summary" do
        page.summary = ""
        expect(page.errors[:summary]).to include("can't be blank") if page.valid?
      end
      it "is invalid without a user_id" do
        page.user_id = ""
        expect(page.errors[:user_id]).to include("can't be blank") if page.valid?
      end
      it "is invalid with a duplicate title" do
        page = create(:page)
        another_page = build(:page)
        expect(another_page.errors[:title]).to include("has already been taken") if another_page.valid?
      end
    end
  end
end