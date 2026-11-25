---
title: PGS 字幕排查与位置调整
titleEn: PGS Subtitle Troubleshooting and Positioning
date: 2026-11-25
order: 2
---

## 问题：MKV 单独预览没有字幕

检查：

- PGS 是否成功封装。
- 是否识别字幕轨道。
- Use as 是否启用。
- 是否选择 Open subtitles。
- Stream 是否选择正确。
- 是否等待解析完成。
- 当前时间点是否存在字幕。

## 问题：MKV 单独预览正常，但 VF 中没有字幕

检查：

- VF 的 Refer to。
- MKV 的 Ignore video。
- Timed text 是否启用。
- 时间轴是否对齐。
- 是否处于字幕出现的时间点。
- 字幕 Position 是否超出画面。

## 问题：字幕位置不合适

不要直接复制其他项目的 Position 数值。逐步调整并检查：单行字幕、双行字幕、画面上方已有文字、画面下方已有文字、片头、片中、片尾。

本次案例在 DCP-o-matic 2 界面中，`Y = 9%` 让字幕向上移动，最终视觉效果比 `Y = 0%` 更合适。但这只是本次验证结果，不是固定标准。

## 字幕位置修改与重新生成

如果 VF 已经生成、但字幕位置不合适：

1. 打开原 VF 工程。
2. 调整字幕 Position。
3. 重新生成 VF。
4. 再次播放验证。

通常不需要重新制作 OV。因此要保存：OV 工程、VF 工程、OV 输出、VF 输出、使用的字幕源文件。

## English

- **No subtitle in MKV preview**: check PGS muxing, track recognition, `Use as`, `Open subtitles`, correct stream, parsing done, and whether a subtitle exists at the current time.
- **Shows in MKV but not in VF**: check VF `Refer to`, MKV `Ignore video`, `Timed text`, timing alignment, and subtitle position.
- **Position tuning**: don't copy values from other projects; test single/double lines and top/bottom overlays. In this case `Y = 9%` looked better than `Y = 0%` — a case-specific result, not a fixed rule.
- **Repositioning**: edit the VF project, regenerate the VF, re-verify. Usually no need to redo the OV. Keep both projects, both outputs, and the subtitle source.
