import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告内容
	content: "欢迎来到 VA11-HALLA酒馆！这里将持续分享计算机图形学、GPU 编程、实时渲染等相关内容。点一杯特调，一起体验图形学的魅力~",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
