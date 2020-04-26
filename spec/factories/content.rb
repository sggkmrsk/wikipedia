FactoryBot.define do

  factory :content do
    topic    {"aaa"}
    body  {"aaa"}
    image    { Rack::Test::UploadedFile.new(File.join(Rails.root, 'spec/fixtures/test.jpg'))}
    sort {1}
    association :user
    association :page
  end

end