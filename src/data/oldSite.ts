// 旧デザイン（Bootstrap 版）ページで共有するナビゲーション定義。
// 以前は 1 ページに 3 箇所（PC / スマホ / フッタ）× 5 ページ＝17 箇所に
// 同じメニューが重複していたが、ここ 1 箇所に集約した。
//
// 新デザイン側（Tailwind 版: /about.html, /contact.html, /news.html）の
// ヘッダも、この同じ項目を表示する。見た目は異なるが行き先は完全に一致させる。

export const mainNav = [
	{ label: 'トップ', href: '/' },
	{ label: '和土滋味', href: '/about.html' },
	{ label: 'STORE LIST', href: '/shop.html' },
	{ label: 'オンラインショップ', href: 'https://shop.takamikurafarm.com/' },
	{ label: 'ふるさと納税', href: '/hurusato.html' },
	{ label: 'お知らせ', href: '/news.html' },
	{ label: 'お問い合わせ', href: '/contact.html' },
] as const;

export const oldSiteMeta = {
	title: 'たかみくらファーム',
	description:
		'高御位山の麓にある畑で昔ながらの土作りをしながら季節の様々な野菜を一年中育てています。また、野菜を使った加工品もつくっています。こだわりの土で育てた野菜たちの雑味のない爽やかな風味をどうぞご堪能ください。',
	keywords:
		'たかみくらファーム,玄米グラノーラ,グラノーラ,ドライフルーツ,兵庫県,加古川,加古川市,野菜,たかみくら,高御位,イチジク,いちじく',
	siteUrl: 'https://takamikurafarm.com',
	ogImage: 'https://takamikurafarm.com/images/logo1.png',
};
