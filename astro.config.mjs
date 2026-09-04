// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://takamikurafarm.com',

	// 旧サイトの URL をそのまま引き継ぐため、出力を「ファイル形式」にする。
	// これにより about.astro → /about.html、shop.astro → /shop.html となり、
	// 既存の被リンクや検索結果を壊さずに移行できる。
	// （既定の 'directory' だと /about/ になってしまう）
	build: {
		format: 'file',
	},

	vite: {
		plugins: [tailwindcss()],
	},
});
