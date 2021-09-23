require 'rails_helper'

RSpec.describe User, type: :model do
  before do
    @user = FactoryBot.build(:user)
  end
  describe 'ユーザー新規登録' do
    context '新規登録できる時' do
      it 'name,email,password,pre_scoreがあれば保存できる' do
        expect(@user).to be_valid
      end
    end
    context '新規登録できない時' do
      it 'nameが空では登録できない' do
        @user.name = ''
        @user.valid?
        expect(@user.errors.full_messages).to include("名前を入力してください")
      end
      it 'nameは7文字以上では登録できない' do
        @user.name = "aaaaaaa"
        @user.valid?
        expect(@user.errors.full_messages).to include("名前は6文字以内で入力してください")
      end
      it 'emailが空では登録できない' do
        @user.email = ""
        @user.valid?
        expect(@user.errors.full_messages).to include("Eメールを入力してください")
      end
      it 'emailは重複してはいけない' do
        @user.save
        another_user = FactoryBot.build(:user)
        another_user.email = @user.email
        another_user.valid?
        expect(another_user.errors.full_messages).to include("Eメールはすでに存在します")
      end
      it 'passwordが空では保存できない' do
        @user.password = ""
        @user.valid?
        expect(@user.errors.full_messages).to include("パスワードを入力してください")
      end
      it 'passwordは６文字以上でなければ保存できない' do
        @user.password = "aaaaa"
        @user.password_confirmation = "aaaaa"
        @user.valid?
        expect(@user.errors.full_messages).to include("パスワードは6文字以上で入力してください")
      end
      it 'passwordとpassword_confirmationは一致していなければいけない' do
        @user.password = "aaaaaa"
        @user.password_confirmation = "bbbbbb"
        @user.valid?
        expect(@user.errors.full_messages).to include("パスワード（確認用）とパスワードの入力が一致しません")
      end
      it 'pre_scoreが空だと保存できない' do
        @user.pre_score = ""
        @user.valid?
        expect(@user.errors.full_messages).to include("得点を入力してください")
      end
    end
  end
end
