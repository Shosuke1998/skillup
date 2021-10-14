# README

# アプリケーション名
skillup

## アプリでできること
英単語の特徴に注目して分野ごとに覚えていくことができる。また、未知の英単語に出会った時でもその英単語の特徴に注目することにより推測が可能になることがある。
##  App URL
http://52.192.251.239/

## 利用言語
HTML/CSS,Javascript,Ruby, 

Ruby on rails ,jQuery,AWS

## テストユーザー
ゲストユーザー設定あり


メールアドレス:p@p


パスワード:iiiiii6

## 利用方法
初めのページの暗記編の項目をクリックしその分野の暗記を開始します。そして暗記した分野に対応するテストをテスト編で行います。テストが終了したら点数を記入します。自分のページにいくことで各分野での自分点数を見ることができます。また、ランキングページの存在し各分野のテストの上位三人までが表示させています。

## 制作背景
私は浪人時代の先生の英語の授業が強く記憶に残っています。その授業に一部で英単語の特徴や、文章の構造に注目することにより未知の単語に出会っても推測ができるということでした。その時まではなんとなくで意味を考えていたのですが、注目点を変えることにより確信を持って意味を推測することができるようになりました。このようなことは、英単語を丸暗記しているだけでは絶対にできるようにならないと考えました。以上のことより、このような分野別で英単語を覚えていくアプリを作ろうと考えました。

## 洗い出した機能
- ユーザー登録機能
- マイページ機能、自分の点数の一覧を見ることができる
- ゲストユーザー機能
- 接頭辞がpre,proの単語の意味を覚える
- 前置詞の意味を答えて覚える
- 類義語暗記シートの空欄を見て何が入るのかを考える
- 反対語暗記シートの空欄を見て何が入るのかを考える
- 意外な意味を持つ英単語の意味を覚える
- 接頭辞がpre,proの単語の意味のテスト(18点満点,終了時に経過時間表示)
- 書かれている意味の前置詞を記述する(24点満点)
- 類義語の意味のテスト(40点満点)
- 英作文に使えるフレーズのテスト(19点満点)
- 意外な意味を持つ英単語のテスト(46点満点,終了時に経過時間表示)
- ランキングを閲覧する
- 前置詞のイメージを見ることができる
- 類義語の表を見ることができる
- 反対語の表を見ることができる
- 意外な意味を持つ英単語の表を見ることができる

## 苦労した点、工夫した点

- 接頭辞(pre,proなど)、類義語、意外な意味を持つ英単語のテストでは選択肢のシャッフルが行われています。ここではフィッシャーイェーツのアルゴリズムが使われています。
- 問題文を不正解の選択肢を考えるのが大変でした。
- ランキングを表示をする部分での同一順位を表現をif-else分で行ったこと


## 機能についての説明

[![Image from Gyazo](https://i.gyazo.com/766b19f64ac300aff91aff4601f0c519.gif)](https://gyazo.com/766b19f64ac300aff91aff4601f0c519)



単語の特徴に注目して暗記を進めていきます。そして覚えられたと思ったらテストに挑戦します。
[![Image from Gyazo](https://i.gyazo.com/afd6b713a670fcf3de3b726ce61473c4.gif)](https://gyazo.com/afd6b713a670fcf3de3b726ce61473c4)



終わったら点数を記入します。
[![Image from Gyazo](https://i.gyazo.com/2ff2b321ee7c2414325471f31cdd557b.gif)](https://gyazo.com/2ff2b321ee7c2414325471f31cdd557b)

類義語に関しては資料と暗記シートを活用して暗記をしていきます。
[![Image from Gyazo](https://i.gyazo.com/942f8b0b2487e8e56e267709cb928acf.gif)](https://gyazo.com/942f8b0b2487e8e56e267709cb928acf)
大体理解したと思ったら類義語暗記シートを見ます。意味が書いてある部分が空欄になっているので意味を想像、または紙に書きながら確認していきます。
[![Image from Gyazo](https://i.gyazo.com/4a0e6e19ecb8ffebd7cd9949ffd0d3b3.gif)](https://gyazo.com/4a0e6e19ecb8ffebd7cd9949ffd0d3b3)
覚えることができたと思ったらテストに行きます。
[![Image from Gyazo](https://i.gyazo.com/505b9612c2124a4f7605647dac2d9117.gif)](https://gyazo.com/505b9612c2124a4f7605647dac2d9117)
得点を記入していきます。
[![Image from Gyazo](https://i.gyazo.com/6bfe572e56d986025349487ab4cfb74a.gif)](https://gyazo.com/6bfe572e56d986025349487ab4cfb74a)
これを覚えるまで繰り返します。

次に反対語です。反対語も類義語と同様に暗記シートと資料を繰り返し用いて暗記路していきます。
[![Image from Gyazo](https://i.gyazo.com/fda61121b684b21f984ab6982ff3223b.gif)](https://gyazo.com/fda61121b684b21f984ab6982ff3223b)

[![Image from Gyazo](https://i.gyazo.com/b827da362024bd2cf8e583e8a3da4155.gif)](https://gyazo.com/b827da362024bd2cf8e583e8a3da4155)

英作文にも対応しています。英作文で使える論理関係を表す熟語もテストできます。

[![Image from Gyazo](https://i.gyazo.com/31339bb3745e530d9fdd9d7aeab85b49.gif)](https://gyazo.com/31339bb3745e530d9fdd9d7aeab85b49)
得点を記入していきます。

[![Image from Gyazo](https://i.gyazo.com/3e7a6305db092ee5b89f973da57a943b.gif)](https://gyazo.com/3e7a6305db092ee5b89f973da57a943b)

そして最後に意外な意味を持つ英単語をが記入することができます。

資料よりどんな単語がありそれがどんな意味なのかを把握します。

次に覚えているか確認していきます。
[![Image from Gyazo](https://i.gyazo.com/d19a1535074ff5744b2df7500e651ff6.gif)](https://gyazo.com/d19a1535074ff5744b2df7500e651ff6)

覚えられたと思ったらテストをしていきます。
[![Image from Gyazo](https://i.gyazo.com/5cd5fa32732be5f557005311eaa4a853.gif)](https://gyazo.com/5cd5fa32732be5f557005311eaa4a853)

　得点を記入していきます。
[![Image from Gyazo](https://i.gyazo.com/933051f9386f6aef2935c56b0bab080b.gif)](https://gyazo.com/933051f9386f6aef2935c56b0bab080b)

そして最後にランキング機能を見ます。他の人と比べて競争心を持っていただき学習に対する意欲を上げていきます。
[![Image from Gyazo](https://i.gyazo.com/bdfa2c6479010f2e90e3d681ada012af.gif)](https://gyazo.com/bdfa2c6479010f2e90e3d681ada012af)

満点をとっていると自分のページでその項目がmasterと表示されます。
[![Image from Gyazo](https://i.gyazo.com/6cf33289d6dbea46ef99526ba27750df.gif)](https://gyazo.com/6cf33289d6dbea46ef99526ba27750df)