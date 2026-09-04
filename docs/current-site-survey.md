# 現行サイトの調査結果

新サイト移行にあたり、現在公開中の `takamikurafarm.com` の構成と、その制作
プロジェクトの所在を調査した記録。

調査日: 2026-09-04

---

## 1. プロジェクトの所在

`takamikura` を含むファイル・ディレクトリを、到達可能な機器すべてで探索した結果。

| 探索先 | 結果 |
|---|---|
| Mac (takahiro-mac) | なし（スポンサーロゴ画像のみ） |
| Lab PC (ussy-HP-ProDesk) | なし |
| Nextcloud (nas.nociws.jp) | なし（別団体 Nociws の領域。スポンサーロゴのみ） |
| 研究室NAS (labnas1, 21TB) | なし（`NociwsHP/public/images/sponsors/` にロゴ 1 点のみ） |
| winlab (DESKTOP-GBL3CND) | **写真素材 142 点** |
| **winmine (DESKTOP-U0NHGEA)** | **プロジェクト本体を発見** |

### 発見したプロジェクト

```
C:\Users\ussy\PycharmProjects\takamikurassh     1,632 ファイル / 59.5MB / 最終更新 2022-08-08
C:\Users\ussy\PycharmProjects\takamikurafarm      103 ファイル / 26.3MB / 最終更新 2021-10-17
```

- **`takamikurassh` が現行サイトの本体**。名前のとおり SSH でサーバーへ反映していたと思われる
- `takamikurafarm` はそれ以前の版（`hurusato.html` を含まない、`index_old` / `index_test` が残る）

`takamikurassh` の構成:

```
├── index.html / about.html / contact.html / shop.html / hurusato.html / takenohana.html
├── css/  images/  takamikura/
├── blog/          ← WordPress 一式（.php 796 個はほぼこれ）
└── .htaccess
```

「基本は HTML と CSS、お知らせなど一部が WordPress」という認識どおりの構成だった。

### 写真素材（winlab）

```
C:\Users\seppyo-kagaku_5\Dropbox\picture\202608_たかみくらファーム                    98 点
C:\Users\seppyo-kagaku_5\Dropbox\picture\202608_たかみくらファーム_アマカメラマンさん  44 点
```

後者が `DSC076xx`〜`DSC077xx` の連番で、**新サイトで使用中の写真の原本**。
新サイトのリポジトリには 4 点しか取り込んでいないため、未使用の素材が 40 点以上ある。

---

## 2. 現行サイトの構成（サーバーに接続して確認済み）

ロリポップ！へ SSH 接続し、公開ディレクトリ `~/web` を直接確認した結果、
**1 台のサーバーに 3 つのサイトが同居している**ことが判明した。

| 公開 URL | 実体 | 中身 | 状態 |
|---|---|---|---|
| `takamikurafarm.com` | `~/web/` | 静的 HTML | 現役 |
| `news.takamikurafarm.com` | `~/web/news/` | **WordPress 7.1**「たかみくらファーム お知らせ」 | **現役** |
| `takamikurafarm.com/blog/` | `~/web/blog/` | WordPress 5.5.20「みんなのレシピ集」 | 稼働中だがメニュー非表示 |
| `shop.takamikurafarm.com` | 外部 | BASE（通販） | 現役 |

### 静的 HTML 部分

| URL | ページタイトル | サーバー上の更新日 |
|---|---|---|
| `/` `/index.html` | たかみくらファーム | 2025-05-20 |
| `/about.html` | たかみくらファームとは | 2024-02-26 |
| `/contact.html` | お問い合わせ | 2024-02-26 |
| `/shop.html` | お取り扱い店 | 2025-10-08 |
| `/hurusato.html` | ふるさと納税 | 2024-02-26 |

`takenohana.html`（隠れ家カフェ『竹のはな』）はサーバー上に存在せず、
メニューでもコメントアウトされている。移行対象外。

### メニュー構成（サーバー上の現物）

表示中: トップ / たかみくらファームとは / STORE LIST / オンラインショップ /
ふるさと納税 / お問い合わせ

コメントアウトで非表示: みんなのレシピ集 / ブログ / 隠れ家カフェ『竹のはな』

メニューは 1 ページに 3 箇所（PC 用ナビ・モバイル用ナビ・サイドバー）重複しており、
5 ページ合計で 17 箇所ある。1 項目追加するだけでも 17 箇所の編集が必要。

なおトップページには `https://news.takamikurafarm.com/` へのリンクがある。

### お知らせ（news.takamikurafarm.com）

WordPress 7.1、テーマは Cocoon。プラグインは akismet / google-site-kit /
siteguard / whats-new-genarator / wp-multibyte-patch。
`wp-content/uploads` には 2022〜2026 年のファイルがある。公開記事は 4 件。

| 日付 | タイトル |
|---|---|
| 2025-11-02 | いちじくと生ハムとブルーチーズのサラダ |
| 2024-02-27 | 神戸新聞社の記事として掲載していただきました。 |
| 2024-02-24 | 神戸新聞広告掲載のお知らせ |
| 2022-07-29 | ひょうご産業SDGｓ推進宣言事業 |

新聞掲載や SDGs 宣言事業といった実績の記録であり、価値が高い。
**新サイトの「お知らせ」セクションおよび microCMS 導入計画と正面から重複する**ため、
方針の決定が必要（下記 4 章）。

### レシピブログ（/blog/）

WordPress 5.5.20。サイト名「みんなのレシピ集」。記事 4 件（パプリカ料理 3 件、
発芽玄米グラノーラ 1 件）。メニューからは外されており、実質的に休止状態。

### サーバー設定の注意点

`~/web/.htaccess` に以下がある。

```
<FilesMatch "\.html$">
  AddType application/x-httpd-php .html
</FilesMatch>
```

**`.html` ファイルを PHP として実行する設定**。ただし `index.html` を確認したところ
PHP コードは 1 つも含まれていなかったため、現状で実害はない。
新サイトへ移行する際は、この設定を引き継ぐ必要はない。

## 3. リダイレクト対応表（案）

新サイトは `/`・`/news`・`/contact` の 3 経路しかないため、旧 URL からの誘導が必要。

| 旧 URL | 新 URL | 備考 |
|---|---|---|
| `/index.html` | `/` | |
| `/about.html` | `/#concept` | コンセプトのセクションへ |
| `/contact.html` | `/contact` | |
| `/shop.html` | 要判断 | 「お取り扱い店」。新サイトに該当ページなし |
| `/hurusato.html` | 要判断 | 「ふるさと納税」。新サイトに該当ページなし |
| `/blog/` | `/news` | |
| `/blog/YYYY/MM/DD/...` | 要判断 | レシピ記事 4 件の扱い |

---

## 4. 判断が必要な事項

1. **「お取り扱い店」をどうするか** — 実店舗での取り扱い情報。新サイトに項目がない。
   セクションとして復活させるか、通販サイト（BASE）へ寄せるか
2. **「ふるさと納税」をどうするか** — 同上。自治体の返礼品として扱われているなら、
   検索流入が見込めるページのため、廃止すると機会損失になる可能性がある
3. **レシピ記事 4 件をどうするか** — 新サイトの「お知らせ」とは性格が異なる。
   microCMS に移すか、レシピ用の枠を新設するか、廃止するか

---

## 5. 注意事項

### WordPress のバージョンについて

`/blog/` は 5.5.20 と 3 世代前の系列だが、サーバー上のファイル更新日を見ると
自動更新が機能しており、5.5 系へのセキュリティバックポートは適用されている。
「放置された脆弱な状態」ではない。ただし機能面では古く、`wp-login.php` は
外部公開されている。

`news.takamikurafarm.com` は 7.1 で最新。SiteGuard プラグインも導入済み。

移行後、`/blog/` は休止状態のまま残す意味が薄いため、削除または非公開化を推奨。

### wp-config.php の取り扱い

発見したローカルプロジェクトには `blog/wp-config.php` が含まれる。これには
**データベースの接続情報（ユーザー名・パスワード）が平文で記載されている**。
このプロジェクトを Git リポジトリに取り込む場合は、必ず除外すること。

### ロリポップ！の契約は解約できない

ドメインのメール（`info@takamikurafarm.com`）が `mx01.lolipop.jp` で運用されている。
サイトを Netlify へ移しても、**メールのためにロリポップの契約は維持が必要**。

---

## 6. 環境に関する記録

- Windows 機（winlab / winmine）は SSH の既定シェルが `cmd.exe`。日本語を含む
  コマンドはそのままでは文字化けして失敗する。PowerShell の `-EncodedCommand` に
  UTF-16LE の Base64 で渡せば正しく動作する
- 出力も既定では Shift-JIS になるため、スクリプト冒頭で
  `[Console]::OutputEncoding=[Text.Encoding]::UTF8` を指定する
