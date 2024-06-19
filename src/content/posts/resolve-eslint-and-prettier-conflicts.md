---
title: "解决 Eslint 和 Prettier 的冲突"
pubDate: 2024-03-05T16:16:47+08:00
tags: ["eslint", "prettier"]
draft: true
---

当项目同时使用 Eslint 和 Prettier 时，往往格式化时会有冲突，导致最终格式化效果不对。发现问这个问题的人还不少，所以这里记录一下解决办法，需要的时候发给人看。

其实解决方案很成熟，就是用到两个插件，[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier?tab=readme-ov-file#readme) 和 [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier#recommended-configuration)。

当你的项目已经安装了 eslint 和 prettier 后，也有了各自的配置文件后，安装以上两个插件：

```shell
pnpm add eslint-config-prettier eslint-plugin-prettier -D
```

然后在你的 eslint 配置文件中的 extends 中最后加上一个 `plugin:prettier/recommended`：

```json
{
  // ...
  "extends": [
    // 一些别的配置
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-essential",
    // 将这个添加到最后
    "plugin:prettier/recommended"
  ]
}
```

如果使用的是 vscode 编辑器，注意要安装这两个插件：

![vscode-plugin-eslint](https://img.jyan.wang/2024/vscode-plugin-eslint.jpg)
![vscode-plugin-prettier](https://img.jyan.wang/2024/vscode-plugin-prettier.jpg)

同时加上这一段配置，可以在项目中添加配置文件 `.vscode/settings.json`，文件内容如下：

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

此时重启编辑器，可以做到完美格式化代码。要注意的是，此时不要在 eslint 配置文件中加上代码风格相关的配置，这样可能又会跟 prettier 冲突。上面的配置可以做到让 eslint 检查代码错误，让 prettier 格式化。所以要改变代码风格，请到 prettier 中修改。
