const fs = require("fs");
const readline = require("readline");
const path = require("path");

// 创建逐行读取接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 提示用户输入文件名
rl.question("请输入文件名（包括扩展名）: ", (fileName) => {
  // 提示用户输入标题
  rl.question("请输入文章标题: ", (title) => {
    // 获取当前日期
    const pubDate = new Date().toISOString();

    // 构建 Frontmatter
    const frontmatter = `---
title: ${title}
pubDate: ${pubDate}
---\n`;

    // 构建文件内容
    const content = `${frontmatter}\n这里是你的内容。\n`;

    // 定义文件路径
    const filePath = path.join(__dirname, "src", "content", "posts", fileName);

    // 写入文件
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        console.error("生成文件时出错:", err);
      } else {
        console.log("Markdown 文件已生成");
      }
      // 关闭读取接口
      rl.close();
    });
  });
});
