import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://blog.lca.de5.net/",
    title: "路宸的博客",
    description: "记录技术、学习与生活。",
    author: "路宸",
    profile: "https://satna.ing",
    ogImage: "default-og.jpg",
    lang: "zh-cn",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/luchen022/astro/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/luchen022/astro" },
    { name: "x",        url: "" },
    { name: "linkedin", url: "" },
    { name: "mail",     url: "mailto:3108169667@qq.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "" },
    { name: "facebook", url: "" },
    { name: "x",        url: "" },
    { name: "telegram", url: "" },
    { name: "pinterest", url: "" },
    { name: "mail",     url: "" },
  ],
});
