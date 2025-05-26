import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "学生手册",
  description: "湖南大学机器人学院学生手册",

  theme,

  head: [
      [
          "script",
          {},
          `\
            // const articleList = document.getElementById("article-list");
            // if (articleList !== null) {
            //     const wrappers = articleList.getElementsByClassName("vp-article-wrapper");
            //     if (wrappers !== null) {
            //         Array.from(wrappers).forEach((wrapper) => {
            //             const categorys = wrapper.getElementsByClassName("page-category-info");
            //             if (categorys !== null) {
            //                 const category = categorys[0];
            //                 const content = category.querySelector("meta").getAttribute("content");
            //                 console.log(content);
            //                
            //                 if (content !== "目录") {
            //                     wrapper.classList.add("hidden");
            //                 }
            //             }
            //         });
            //     }
            // }
          `,
      ],
  ]

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
