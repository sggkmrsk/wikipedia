FactoryBot.define do

  factory :comment do
    comment    {"aaa"}
    association :user
    association :page
  end

end