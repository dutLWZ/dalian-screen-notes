# 投稿指南 · Contributing

欢迎投稿！本项目是一个开放的社区站点，代码与内容都欢迎你的参与。

Welcome! This is an open community site. Both code and content contributions are welcome.

## 内容许可 · License

- 代码（`src/`、配置等）：MIT License，见 `LICENSE`。
- 内容（`src/content/` 下的文章、记录）：[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)，署名且非商业使用。

Code is MIT (`LICENSE`). Content is [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/).

## 隐私红线 · Privacy rules

**不要在内容里公开任何联系方式**：电话、手机、微信号、详细门牌地址、邮箱都不要写。

- 商户/影院一律写「在大众点评搜 **XX** 即可电话联系」。
- 个人分享只代表个人观点，请附免责语气。

Do **not** publish contact info (phone, WeChat ID, address, email). For venues, write “search **XX** on Dianping to call them” instead.

## 两种投稿方式 · Two ways to contribute

### 方式一：直接在网页上改（推荐，不需要会 Git）

1. 打开对应目录，找到想新增/修改的文件。
2. 点 GitHub 右上角 ✏️（Edit this file）。
3. 按模板填写（见 `templates/`）。
4. 保存时选择 “Create a new branch and start a pull request”。

### 方式二：提 Issue（不会改文件也没关系）

到 Issues 页选对应模板，把素材填进去，维护者会帮你整理成文章。

## 栏目与目录对应 · Sections

| 栏目 | 目录 | 模板 |
|---|---|---|
| 验证记录 | `src/content/tests/` | `templates/test-report.md` |
| DCP 制作 | `src/content/dcp/` | `templates/guide.md` |
| 字幕工作流 | `src/content/subtitles/` | `templates/guide.md` |
| 大连影院 | `src/content/dalian-cinemas/` | `templates/guide.md` |
| 大连社区 | `src/content/dalian-community/` | `templates/share.md` |
| 个人分享 | `src/content/shares/` | `templates/share.md` |

## 语言 · Language

- 中文为主（必填），英文为可选项（`titleEn`、正文英文段落）。
- 尽量中英双语；只有中文也可以，维护者会帮忙补英文。

## 本地开发 · Local dev

```bash
npm install
npm run dev
```
