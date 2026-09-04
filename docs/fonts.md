# フォントの調査結果

ローカル環境（`localhost:4321`）でトップページのフォントが効かない件の調査と、
サイト全体で使われているフォントの一覧。

調査日: 2026-09-04

---

## 1. 結論：ローカルで効かないのは正常な挙動

ご指摘の 4 箇所はすべて `.sakurakeisetsu` というクラスで、
**TypeSquare（モリサワ）の「さくらぎ蛍雪」** が指定されています。

| 引用された箇所 | クラス |
|---|---|
| 自然と人にやさしい／風、土、太陽の力を… | `sakurakeisetsu font1` |
| 農薬に頼らない自然の力で育てた… | `sakurakeisetsu article2` |
| ※自社農園の野菜・果物に限り… | `sakurakeisetsu article2` |
| お知らせ／たかみくらファームからの最新情報 | `sakurakeisetsu font2` / `article2` |

**TypeSquare と Adobe Fonts は、いずれも契約したドメインでしか配信されません。**
`localhost:4321` や `～.netlify.app` は契約ドメインではないため、フォントが
配信されず、ブラウザの既定フォントで表示されます。

TypeSquare の配信スクリプトには `apiCheckReferrer` という関数があり、
リファラ（アクセス元ドメイン）を照合してから配信する作りになっている。

```
apiCheckReferrer → "//{referrerCheckUrl}/{language}/ts?{distributionKey}&ttl={...}"
```

### 移植による欠落ではない

念のため確認したが、移植後の `dist/index.html` には TypeSquare と
Adobe Fonts の読み込みが元サイトと同数（各 1 箇所）残っている。
`OldLayout.astro` で `is:inline` を付けて記述順ごと維持しているため、
スクリプトが失われたわけではない。

### 傍証：新デザイン側のフォントは同じローカル環境で動く

新デザイン（`/about.html` など）は Google Fonts の Noto Sans JP / Noto Serif JP を
使っており、これはドメイン制限がないため localhost でも表示される。
同じ環境で一方だけ効かないことは、「読み込みの失敗」ではなく
「ドメイン制限」が原因であることを裏づけている。

### 確定させる方法

ブラウザで **公開中の https://takamikurafarm.com/ を開いて見比べる**のが最も確実。

- 公開サイトでは正しいフォント → ドメイン制限が原因。**本番切替後は直る**
- 公開サイトでも既定フォント → TypeSquare の契約失効など別の原因。要確認

---

## 2. 使用フォント一覧

### 旧デザイン（`/`, `/shop.html`, `/hurusato.html`）

| フォント | 提供元 | 指定クラス | 使用箇所 |
|---|---|---|---|
| **FOT-クレー Pro**<br>`fot-klee-pro` | Adobe Fonts<br>(kit `dzp2fow`) | `.fontb` | 130 |
| 同上 | 同上 | `.fontb-b` | 41 |
| 同上 | 同上 | `article.wp-article > h3, > p` | お知らせ一覧 |
| **さくらぎ蛍雪**<br>`SakuraKeisetsu` | TypeSquare<br>(モリサワ) | `.sakurakeisetsu` | 39 |
| **FOT-筑紫Aオールド明朝**<br>`fot-tsukuaoldmin-pr6n` | Adobe Fonts | `.tsukushiA` | **0（未使用）** |

読み込み箇所は [OldLayout.astro](../src/layouts/OldLayout.astro)。

```html
<!-- TypeSquare（さくらぎ蛍雪） -->
<script src="//typesquare.com/3/tsst/script/ja/typesquare.js?6145f5…"></script>

<!-- Adobe Fonts（FOT-クレー Pro） kitId: dzp2fow -->
```

### 新デザイン（`/about.html`, `/contact.html`, `/news.html`）

| フォント | 提供元 | 用途 |
|---|---|---|
| **Noto Serif JP** | Google Fonts | 見出し（`font-serif`） |
| **Noto Sans JP** | Google Fonts | 本文（`font-sans`、既定） |

定義は [global.css](../src/styles/global.css)、読み込みは [Layout.astro](../src/layouts/Layout.astro)。
**ドメイン制限がなく、無料で、どの環境でも表示される。**

---

## 3. 調査中に見つかった既存の問題

いずれも移植で生じたものではなく、公開中のサイトに元からある。

### `.tenmincho` にフォント指定がない

サイドバーのメニュー項目などで **62 箇所**使われているが、
`style.css` に `.tenmincho` の定義が存在しない（`grep` で 0 件）。
現状はブラウザの既定フォントで表示されている。

原因はおそらく次項。

### `css/humberger.css` が存在しない

各ページが読み込んでいるが、サーバー上に実体がなく **404** を返す。

```
https://takamikurafarm.com/css/humberger.css → 404
```

`.tenmincho` はこのファイルに定義されていた可能性が高い。
移植版ではこの読み込み自体を削除した（404 になるだけのため）。

**復旧するなら、旧プロジェクトのバックアップから `humberger.css` を探す必要がある。**
`~/projects/side/takamikurafarm-old-site/` にも見当たらなかった。

### `.tsukushiA` が未使用

FOT-筑紫Aオールド明朝の指定が `style.css` に残っているが、
どのページからも使われていない。Adobe Fonts のキットから外せば
読み込みを軽くできる。

---

## 4. 本番公開にあたっての注意

**Netlify の仮 URL（`～.netlify.app`）で確認するとき、旧デザインのページは
フォントが違って見える。これは想定どおりで、異常ではない。**
CSS を直そうとしないこと。

正しいフォントで確認したい場合は、次のいずれか。

1. DNS を切り替えて `takamikurafarm.com` で確認する（最も確実）
2. Adobe Fonts の管理画面で、キット `dzp2fow` の許可ドメインに
   `localhost` と Netlify の仮ドメインを追加する（キット設定で自由に追加可能）
3. TypeSquare は契約ドメイン単位のため、モリサワ側の設定確認が必要
