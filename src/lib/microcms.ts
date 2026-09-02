import { createClient } from 'microcms-js-sdk';

const serviceDomain = import.meta.env.MICROCMS_SERVICE_DOMAIN;
const apiKey = import.meta.env.MICROCMS_API_KEY;

// microCMS が未設定の間は null を返し、各ページは静的データにフォールバックする。
// 管理画面を用意したら .env に MICROCMS_SERVICE_DOMAIN / MICROCMS_API_KEY を設定すれば
// 自動的に CMS からのデータ取得に切り替わる。
export const microcms =
	serviceDomain && apiKey ? createClient({ serviceDomain, apiKey }) : null;

export type MicroCMSImage = {
	url: string;
	width: number;
	height: number;
};

export type NewsItem = {
	id: string;
	title: string;
	publishedAt: string;
	url?: string;
	image?: MicroCMSImage;
	content?: string;
};

export type Product = {
	id: string;
	name: string;
	category: string;
	description?: string;
	image?: MicroCMSImage;
};

export async function getNews(limit = 3): Promise<NewsItem[]> {
	if (!microcms) return [];
	try {
		const res = await microcms.get({
			endpoint: 'news',
			queries: { limit, orders: '-publishedAt' },
		});
		return res.contents;
	} catch (error) {
		console.error('microCMS: failed to fetch news', error);
		return [];
	}
}

export async function getProducts(limit = 8): Promise<Product[]> {
	if (!microcms) return [];
	try {
		const res = await microcms.get({
			endpoint: 'products',
			queries: { limit },
		});
		return res.contents;
	} catch (error) {
		console.error('microCMS: failed to fetch products', error);
		return [];
	}
}
