import { defineConfig } from "vitepress";

const sharedTheme = {
  siteTitle: "DataFoundry",
  socialLinks: [{ icon: "github", link: "https://github.com/datagallery-lab/DataFoundry" }],
  search: {
    provider: "local" as const
  },
  footer: {
    message: "Apache-2.0 Licensed",
    copyright: "Copyright © DataGallery Lab"
  }
};

export default defineConfig({
  title: "DataFoundry",
  description: "AI workbench documentation for data analysis",
  base: "/DataFoundry/",
  srcDir: ".",
  srcExclude: ["README.md", "assets/**"],
  cleanUrls: false,
  locales: {
    root: {
      label: "Home",
      lang: "en-US",
      title: "DataFoundry",
      description: "AI workbench documentation for data analysis",
      themeConfig: {
        ...sharedTheme,
        nav: [
          { text: "English", link: "/en/" },
          { text: "简体中文", link: "/zh/" },
          { text: "GitHub", link: "https://github.com/datagallery-lab/DataFoundry" }
        ]
      }
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      title: "DataFoundry",
      description: "AI workbench documentation for data analysis",
      themeConfig: {
        ...sharedTheme,
        nav: [
          { text: "Overview", link: "/en/overview" },
          { text: "Quick start", link: "/en/quick-start" },
          { text: "GitHub", link: "https://github.com/datagallery-lab/DataFoundry" }
        ],
        sidebar: [
          {
            text: "Getting started",
            items: [
              { text: "Docs home", link: "/en/" },
              { text: "Product overview", link: "/en/overview" },
              { text: "Quick start", link: "/en/quick-start" },
              { text: "Capabilities", link: "/en/capabilities" }
            ]
          },
          {
            text: "Guides",
            items: [
              { text: "Web workbench", link: "/en/guides/web-workbench" },
              { text: "TUI", link: "/en/guides/tui" },
              { text: "Data sources", link: "/en/guides/data-sources" }
            ]
          },
          {
            text: "Reference",
            items: [
              { text: "Supported data sources", link: "/en/reference/supported-datasources" },
              { text: "REST API", link: "/en/reference/rest-api" },
              { text: "Configuration API", link: "/en/reference/configuration-api" },
              { text: "Agent Runtime", link: "/en/reference/agent-runtime" }
            ]
          },
          {
            text: "Architecture & security",
            items: [
              { text: "Architecture overview", link: "/en/architecture/overview" },
              { text: "Security", link: "/en/security" }
            ]
          }
        ]
      }
    },
    zh: {
      label: "简体中文",
      lang: "zh-CN",
      link: "/zh/",
      title: "DataFoundry",
      description: "面向数据分析场景的 AI 工作台文档",
      themeConfig: {
        ...sharedTheme,
        nav: [
          { text: "产品概览", link: "/zh/overview" },
          { text: "快速开始", link: "/zh/quick-start" },
          { text: "GitHub", link: "https://github.com/datagallery-lab/DataFoundry" }
        ],
        sidebar: [
          {
            text: "入门",
            items: [
              { text: "文档首页", link: "/zh/" },
              { text: "产品概览", link: "/zh/overview" },
              { text: "快速开始", link: "/zh/quick-start" },
              { text: "能力全览", link: "/zh/capabilities" }
            ]
          },
          {
            text: "使用指南",
            items: [
              { text: "Web 工作台", link: "/zh/guides/web-workbench" },
              { text: "TUI", link: "/zh/guides/tui" },
              { text: "数据源", link: "/zh/guides/data-sources" }
            ]
          },
          {
            text: "参考",
            items: [
              { text: "支持的数据源", link: "/zh/reference/supported-datasources" },
              { text: "REST API", link: "/zh/reference/rest-api" },
              { text: "配置 API", link: "/zh/reference/configuration-api" },
              { text: "Agent Runtime", link: "/zh/reference/agent-runtime" }
            ]
          },
          {
            text: "架构与安全",
            items: [
              { text: "架构概览", link: "/zh/architecture/overview" },
              { text: "安全说明", link: "/zh/security" }
            ]
          }
        ]
      }
    }
  }
});
