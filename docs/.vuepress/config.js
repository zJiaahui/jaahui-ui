module.exports = {
  title: "🛴 jiaahui-ui",
  base: "/jiaahui-ui/",
  description: "Vue简单易用UI框架",
  head: [["link", { rel: "icon", href: "/" }]],
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/components/button" },
      { text: "关于", link: "/about/" },
      { text: "GitHub", link: "https://github.com/zJiaahui/jiaahui-ui" },
    ],
    sidebar: [
      {
        title: "开始体验",
        collapsable: false,
        sidebarDepth: 1,
        children: ["/about/", "/get-started/"],
      },
      {
        title: "组件",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          "/components/button",
          "/components/input",
          "/components/toast",
          "/components/dialog",
          "/components/switch",
          "/components/pager",
          "/components/carousel",
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: false,
  },
};
