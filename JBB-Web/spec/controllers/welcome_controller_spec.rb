require 'rails_helper'

RSpec.describe WelcomeController, type: :controller do

  describe "GET #index" do
   it "returns http success" do
     get :index
     expect(response).to have_http_status(:success)
     expect(response).to render_template("welcome/index")
   end
 end

end
