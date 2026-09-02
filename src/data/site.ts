// サイト全体で使う静的コンテンツ。
// 将来 microCMS 側にスキーマを用意したら、各セクションの Astro コンポーネント内で
// `getProducts()` / `getNews()`(src/lib/microcms.ts)の結果に差し替えていく想定。

import newsSampleImage from '../assets/photos/DSC07783.jpg';
import zyamuPhoto from '../assets/photos/zyamu.jpg';
import powderPhoto from '../assets/photos/powder.jpg';
import tyaPhoto from '../assets/photos/tya.png';
import mintoPhoto from '../assets/photos/minto.jpg';
import ichiPhoto from '../assets/photos/ichi.jpg';
import guraPhoto from '../assets/photos/gura.jpg';
import otherPhoto from '../assets/photos/other.jpg';

export const site = {
	name: 'たかみくらファーム',
	brand: 'WADO-ZIMI',
	brandJa: '和土滋味',
	description:
		'兵庫県加古川市、高御位山の麓で「和土滋味」の信念のもと野菜・果実・加工品を育てるたかみくらファームの公式サイト。',
	onlineShopUrl: 'https://shop.takamikurafarm.com/',
};

export const nav = [
	{ label: 'お知らせ', href: '/#news' },
	{ label: 'コンセプト', href: '/#concept' },
	{ label: '商品', href: '/#products' },
	{ label: 'アクセス', href: '/#access' },
	{ label: 'お問い合わせ', href: '/contact' },
] as const;

// お知らせ(フォールバック用の静的データ)。
// microCMS の news エンドポイントが用意でき次第、News セクションが自動でそちらを使う。
export const newsFallback = [
	{
		id: 'sample-1',
		title: 'ウェブサイトをリニューアルしました。',
		publishedAt: new Date().toISOString(),
		image: {
			url: newsSampleImage.src,
			width: newsSampleImage.width,
			height: newsSampleImage.height,
		},
		content:
			'たかみくらファームの公式ウェブサイトをリニューアルいたしました。今後は農園の様子や商品情報、最新のお知らせなどをこちらで発信してまいります。今後ともたかみくらファームをよろしくお願いいたします。',
	},
];

export const hero = {
	catchLead: '「和土」調和した土壌。',
	catchSub: '「滋味」身体に染み入る栄養と深い味わい。',
	catchMain: '「和土滋味（わどじみ）」',
	catchTail: '循環する大地が醸す、生命の旋律。',
	lead: '私たちは加古川の霊峰・高御位山の麓にて、「和土滋味」という信念のもと、野菜、果実、そしてその生命を凝縮した加工品を育んでおります。',
};

export const intro = {
	catch: '土の匂い、実りの静寂。',
	lines: [
		'夜露に濡れた葉のきらめき。',
		'土に指を沈めた時の、ひんやりとした感触。',
		'陽が昇るごとに色を変える畑と、',
		'風にそよぐ稲穂の音。',
	],
	closing: 'そのすべてを吸い込みながら、高御位山の麓は、今日も静かに実りを紡いでいく。',
};

export const soil = {
	number: '01',
	id: 'soil',
	title: '「和土（わど）」が育む、揺るぎない骨格',
	body: '私たちの小さな農園の根幹にあるのは、土地の循環です。地域の落ち葉や手作りの天然肥料を使い、何年もかけて醸成した土は、微生物が調和した「和土」へと進化を遂げました。この健やかな土壌で育つ作物は、細胞ひとつひとつが緻密で、過剰な水分や肥料に頼らない、素材本来の「揺るぎない骨格」を持っています。',
};

export const taste = {
	number: '02',
	id: 'taste',
	title: '身体の奥に響く「滋味（じみ）」の深度',
	lead: 'たかみくらファームが求めるのは、単なる「味」ではなく、五感の先にある「滋味」です。',
	items: [
		{
			heading: '野菜・果実',
			body: 'パプリカやイチジクなど、完熟の絶頂で収穫される一粒一粒には、大地から授けられるミネラルが凝縮されています。口に含んだ瞬間に広がるのは、派手な甘さではなく、身体に静かに染み渡るような深く、清らかな余韻です。',
		},
		{
			heading: '加工品',
			body: '私たちが手塩にかけて育てた、大地の恵みをありのままに。飾りのないありのままの風味、素材が持つ深遠な香りと本来の滋味をそのまま凝縮しました。果実やハーブ、野菜の息吹を凝縮したドライプロダクトや手詰めの果実ペースト、それらを贅沢に練り込んだ焼き菓子まで。心と身体を優しく満たす、飾らない贅沢をお届けします。',
		},
	],
};

export const partner = {
	number: '03',
	id: 'partner',
	title: '料理人の感性と共鳴するパートナーとして',
	body: '私たちが目指す雑味のない純粋な食材は、引き算の料理においても、大胆な構成の料理においても、その存在感を失いません。火を入れた瞬間の香りの立ち方、ナイフを入れた時の手応え、そしてプレートの上での色彩の品格。私たちは、単なる供給者ではなく、シェフが描く「美食の理想郷」を共に創り上げるパートナーでありたいと願っております。',
	closing: '高御位山が育んだ「和土」の恵みと、そこに宿る「滋味」。',
};

// 商品カテゴリ(フォールバック用の静的データ)。
// microCMS の products エンドポイントが用意でき次第、Products セクションが自動でそちらを使う。
// image に src/assets 配下の写真を import して指定すると、カテゴリカードに写真が表示される。
export const productCategories: Array<{
	name: string;
	count: number;
	image?: ImageMetadata;
}> = [
	{ name: 'ベジタブルソース・ジャム', count: 9, image: zyamuPhoto },
	{ name: 'ベジタブルスパイス', count: 3, image: powderPhoto },
	{ name: 'お茶', count: 2, image: tyaPhoto },
	{ name: 'ドライベジタブル', count: 2, image: mintoPhoto },
	{ name: 'ドライフルーツ', count: 3, image: ichiPhoto },
	{ name: 'グラノーラ', count: 5, image: guraPhoto },
	{ name: 'その他', count: 2, image: otherPhoto },
];

export const access = {
	title: '高御位山の麓へ',
	body: '兵庫県加古川市、霊峰・高御位山の麓。豊かな自然と循環する大地に抱かれたこの場所で、たかみくらファームは野菜と果実を育てています。',
	area: '兵庫県加古川市（高御位山 麓）',
};

export const contact = {
	note: '下記のお問合わせ先もしくはお問い合わせフォームから、お気軽にお問合わせください。',
	companyName: '株式会社　たかみくらファーム',
	postalCode: '675-0332',
	address: '兵庫県加古川市志方町横大路381-1',
	tel: '079-452-1000',
	fax: '079-441-7258',
	email: 'info@takamikurafarm.com',
	sns: [
		{ label: 'Instagram', href: 'https://www.instagram.com/takamikurafarm' },
		{ label: 'Facebook', href: 'https://www.facebook.com/%E3%81%9F%E3%81%8B%E3%81%BF%E3%81%8F%E3%82%89%E3%83%95%E3%82%A1%E3%83%BC%E3%83%A0-100304322547506' },
	],
};
