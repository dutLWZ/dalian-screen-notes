---
title: OV / VF 制作流程
titleEn: OV/VF Authoring Workflow
date: 2026-11-25
order: 1
---

本文来自项目内的 `dcp-authoring` skill，记录用 DCP-o-matic 制作 OV 与 VF 的完整流程。

## OV 制作

OV（Original Version）是基础版本，一般包含 Picture（画面）与 Sound（声音）。

制作步骤：

1. 新建 DCP-o-matic 工程。
2. 导入原始 MKV。
3. 检查视频和音频。
4. 设置画幅、分辨率、帧率。
5. 设置音频语言。
6. 根据影片实际内容设置必要的标记。
7. 生成 DCP。
8. 保留完整 OV 文件夹。

> 不要在 OV 中添加本次准备通过 VF 添加的字幕。

## VF 制作

VF（Version File）是基于 OV 的版本文件，用于追加字幕等增量内容。

基本流程：

1. 新建工程。
2. 导入 OV DCP。
3. 导入字幕素材。
4. 设置 Version File。
5. 配置 Refer to。
6. 配置字幕轨道。
7. 调整字幕位置。
8. 生成 VF。

### Refer to 配置

如果 OV 已经包含画面和声音：

| 资源 | 设置 |
|---|---|
| Picture | 引用 OV |
| Sound | 引用 OV |
| Subtitles | 不引用本次新增字幕 |
| Closed captions | 根据项目需求决定 |

### 字幕 MKV

如果字幕封装在 MKV 中：

- 启用对应字幕轨道。
- 选择正确字幕类型。
- 忽略 MKV 的 Video。
- 确认没有意外使用 MKV 的 Audio。
- 确认字幕与 OV 时间轴对齐。

不需要为了添加字幕额外制作全黑视频。

### VF 与 OV 的关系

最终交付需要同时保留 OV 和 VF，不能只交 VF。

## 最终验证

使用 DCP-o-matic Player 检查：DCP 是否能读取、字幕是否显示与同步、字幕是否被裁切、位置是否正确、画面与声音是否正常。

然后使用影院的实际放映服务器进行最终验证。

> DCP-o-matic Player 能播放，不等于影院服务器一定支持所有相同功能。

## English

This article comes from the project `dcp-authoring` skill.

- **OV (Original Version)**: base version with Picture + Sound. Import the source MKV, set container/resolution/frame rate, generate and keep the full OV folder. Do not add subtitles that will go into the VF.
- **VF (Version File)**: references the OV and adds subtitles only. Configure `Refer to` (Picture/Sound refer to OV, Subtitles not referred), enable the right subtitle track, ignore the subtitle-MKV's video/audio, and align timing.
- **Delivery**: keep both OV and VF — never deliver a VF alone.
- **Verification**: check in DCP-o-matic Player first, then on the cinema's actual server. Player playback ≠ cinema-server support.
