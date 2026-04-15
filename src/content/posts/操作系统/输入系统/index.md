---
title: "输入系统"
published: 2026-01-01
draft: false
description: '操作系统中断的分类和处理机制。'
series: '操作系统'
tags: ['cpu', '中断']
---

```text
键盘操作，当按键按下后,键盘内8048芯片通过ps/2协议发送按键码给主板上的8042芯片,8042负责触发中断,让cpu读取数据
```