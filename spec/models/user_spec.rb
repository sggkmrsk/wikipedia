require 'rails_helper'
RSpec.describe User ,type: :model do
  describe '#create' do
    let(:user) {build_stubbed(:user)}
    context 'can save' do
      it "is valid with a name, email, password, password_confirmation" do
        expect(user).to be_valid
      end
    end
    it "is invalid without a name" do
      user.name = ""
      expect(user.errors[:name]).to include("can't be blank") if user.valid?
    end
    it "is invalid without a email" do
      user.email = ""
      expect(user.errors[:email]).to include("can't be blank") if user.valid?
    end
    it "is invalid without a password" do
      user.password = ""
      expect(user.errors[:password]).to include("can't be blank") if user.valid?
    end
    it "is invalid without a password_confirmation" do
      user.password_confirmation = ""
      expect(user.errors[:password_confirmation]).to include("doesn't match Password") if user.valid?
    end
    it "is invaild without match password to password_confirmation" do
      user.password_confirmation = "0000001"
      expect(user.errors[:password_confirmation]).to include("doesn't match Password") if user.valid?
    end
    it "is invalid with a duplicate email address" do
      user = create(:user)
      another_user = build(:user)
      expect(another_user.errors[:email]).to include("has already been taken") if another_user.valid?
    end
    it "is valid with a password that has more than 6 characters" do
      user.password = "000000" && user.password_confirmation = "000000"
      expect(user).to be_valid
    end
    it "is invalid with a password that has less than 6 characters" do
      user.password = "00000" && user.password_confirmation = "00000"
      expect(user.errors[:password]).to include("is too short (minimum is 6 characters)") if user.valid?
    end
  end
end