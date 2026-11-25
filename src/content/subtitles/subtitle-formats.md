---
title: 字幕类型与格式选择
titleEn: Subtitle Formats and Selection
date: 2026-11-25
order: 1
---

字幕格式是决定制作复杂度的重要因素，先把字幕分成两类。

## 文本型字幕

常见格式：SRT、ASS/SSA，以及其他 DCP-o-matic 支持的文本字幕。

特点：

- 字幕内容是文本。
- 可以通过字体渲染生成字幕画面。
- 更容易调整字体、字号、位置、行距。
- 可以随时修改文本内容。
- 不需要解析每条字幕图像。

需要检查：编码、中文字体、换行、时间轴、字号位置、字体样式。

> 不要认为只要是 SRT 就一定能直接导入，要确认 DCP-o-matic 当前版本的支持情况。

## 图像型字幕

常见格式：PGS / SUP，以及其他图像字幕。

特点：

- 字幕不是文本，而是图像。
- 每个字幕事件可能包含不同图像内容。
- 需要读取图像、时间戳和显示信息。
- 字幕位置和缩放受原始字幕图像尺寸影响。

PGS 的处理通常比 SRT 更复杂。本次案例使用的就是 SUP / PGS 字幕，需要确认：是否成功封装进 MKV、DCP-o-matic 是否识别 PGS 轨道、Timed text 是否启用、Stream 是否选对、字幕是否正确显示、Position 是否合理。

## 选择原则

- 优先选择时间轴准确、内容完整的文本型字幕。
- 必须保留原始图像字幕效果时，用 PGS 等图像型字幕。
- 不要为了操作简单牺牲字幕质量。

如果影片已有 SUP、同时也能拿到对应 SRT，先比较时间轴、文本准确性、换行、位置、样式，再决定用哪种。

## English

- **Text subtitles** (SRT, ASS/SSA): easier — rendered from fonts, editable, adjustable; still check encoding, CJK font, line breaks, timing, size/position.
- **Image subtitles** (PGS/SUP): harder — stored as images, need stream/timed-text checks; position/scale depend on the source image size.
- **Rule of thumb**: prefer accurate, complete text subtitles; keep PGS only when the original look must be preserved. Compare timing, accuracy, wrapping, position and style before choosing.
