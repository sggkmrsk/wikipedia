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
        expect(page).to be_invalid
      end
      it "is invalid without a title" do
        page.summary = ""
        expect(page).to be_invalid
      end
      it "is invalid without a title" do
        page.user_id = ""
        expect(page).to be_invalid
      end
    end
  end
end