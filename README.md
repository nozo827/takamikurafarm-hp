# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## 🌐 デプロイ（Netlify）

- 本番URL: https://takamikurafarm.netlify.app
- 管理画面: https://app.netlify.com/projects/takamikurafarm
- `master` に push すると Netlify が自動でビルド・公開する（ビルド設定は `netlify.toml`）。

### お問い合わせフォーム

`src/pages/contact.astro` のフォームは [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) を使う。
デプロイ時に Netlify が HTML を解析してフォームを検出するため、以下は削除しないこと。

- `data-netlify="true"` と `name="contact"`
- 隠しフィールド `<input type="hidden" name="form-name" value="contact">`
- ハニーポット `netlify-honeypot="bot-field"` と対になる非表示の `bot-field` 入力

送信内容は管理画面の Forms に届く。送信後は `/contact/thanks/` に遷移する。

### 環境変数

microCMS を使う場合は Netlify の環境変数に `MICROCMS_SERVICE_DOMAIN` と `MICROCMS_API_KEY` を登録する。
未設定の間は `src/data/site.ts` の静的データにフォールバックする。
