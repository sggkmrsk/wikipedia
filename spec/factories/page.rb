FactoryBot.define do

  factory :page do
    title    {"aaa"}
    summary  {"aaa"}
    image    { Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/test.jpg'))}
    association :user
  end

end