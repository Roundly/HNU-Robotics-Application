import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "保研经验分享",
      icon: "book",
      prefix: "docs/保研经验分享/",
      children: "structure",
    },
    {
      text: "国际项目",
      icon: "book",
      prefix: "docs/国际项目/",
      children: "structure",
    },
    {
      text: "考研经验分享",
      icon: "book",
      prefix: "docs/考研经验分享/",
      children: "structure",
    },
  ],
});
