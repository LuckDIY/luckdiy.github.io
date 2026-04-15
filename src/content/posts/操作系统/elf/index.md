---
title: "elf可执行文件"
published: 2026-01-01
draft: false
description: '操作系统中断的分类和处理机制。'
series: '操作系统'
tags: ['cpu', '中断']
---

### elf 是目标文件格式 就是可执行文件

+----------------------+  <-- 文件开头 (偏移 0)
| ELF Header (Ehdr)   |  <== Elf32_Ehdr 就在这里
+----------------------+
| Program Header Table |  (程序头表描述可加载的段)
+----------------------+
| Section Headers      |  (节头表描述链接器用的节)
+----------------------+
| 实际代码/数据等内容   |
+----------------------+

格式是 elf头, 段头和节头,实际程序代码

### elf 文件头
```c++
typedef struct
{
  /**
   * [0x7f,'E','L','F' 前4位是魔术,固定 
   * index:4 elf文件类型  5 编码格式大小端 6版本信息 7-15保留位
   * ]
  */
  unsigned char e_ident[EI_NIDENT];     /* Magic number and other info */
  Elf32_Half    e_type;                 /* Object file type 目标文件类型 2字节  */
  Elf32_Half    e_machine;              /* Architecture 指定在哪个平台运行 */
  Elf32_Word    e_version;              /* Object file version 版本信息*/
  Elf32_Addr    e_entry;                /* Entry point virtual address 运行程序的虚拟地址 */
  Elf32_Off     e_phoff;                /* Program header table file offset 用于指明程序头表*/
  Elf32_Off     e_shoff;                /* Section header table file offset 用于指明节头表 */
  Elf32_Word    e_flags;                /* Processor-specific flags 指明和处理器相关表示 */
  Elf32_Half    e_ehsize;               /* ELF header size in bytes 指明elf header的字节大小 */
  Elf32_Half    e_phentsize;            /* Program header table entry size 指明程序头表各个entry的字节大小 */
  Elf32_Half    e_phnum;                /* Program header table entry count 指明程序头表长度 */
  Elf32_Half    e_shentsize;            /* Section header table entry size 指明节头各entry的字节大小*/
  Elf32_Half    e_shnum;                /* Section header table entry count 节头长度 */
  Elf32_Half    e_shstrndx;             /* Section header string table index 用来指明string name table在节头表中的索引index */
} Elf32_Ehdr;

```

### elf 程序头结构体
```c++
typedef struct
{
  Elf32_Word    p_type;                 /* Segment type 段类型4字节*/
  Elf32_Off     p_offset;               /* Segment file offset 用于指明本段在文件内的起始偏移字节*/
  Elf32_Addr    p_vaddr;                /* Segment virtual address 用于指明本段在内存中的起始虚拟地址 */
  Elf32_Addr    p_paddr;                /* Segment physical address */
  Elf32_Word    p_filesz;               /* Segment size in file 本段在文件中的大小*/
  Elf32_Word    p_memsz;                /* Segment size in memory 本段在内存中的大小 */
  Elf32_Word    p_flags;                /* Segment flags 指明与本段相关的标志*/
  Elf32_Word    p_align;                /* Segment alignment 指明本段在文件和内存中的对齐方式 */
} Elf32_Phdr;
```

### elf文件示例
```asm
00000000: 7F 45 4C 46 (魔术elf) 01(32位) 01(小端) 01(当前版本) 00 00 00 00 00 00 00 00 00  .ELF............
00000010: 02 00(小端) 03 00(EM386 80386平台) 01 00 00 00(版本) 00 15 00 C0(程序的虚拟入口地址) 34 00 00 00(程序头表偏移量)  ............4...
00000020: 4C 21 00 00(节头表偏移位置)00 00 00 00(e_flag) 34 00(e_ehsize程序头位置) 20 00(段的结构体的大小) 06 00(程序头中段的个数) 28 00(节头表各个节的大小)  L!......4. ...(.
00000030: 08 00(8个节) 07 00(节头索引为7) (程序头表开始位置)01 00 00 00(可加载程序段) 00 00 00 00(本段在文件中的偏移量 0) 00 10 00 C0(本段加载到内存后的起始虚拟地址)  ................
00000040: 00 00 00 C0(0x0000c0) F4 00 00 00(0xf4本段在文件中的字节大小) F4 00 00 00(0xf400在内存中的大小) 04 00 00 00  ................
00000050: 00 10 00 00(1段) 01 00 00 00 00 05 00 00 00 15 00 C0  ................
00000060: 00 15 00 C0 18 00 00 00 18 00 00 00 05 00 00 00  ................
00000070: 00 10 00 00 01(2段) 00 00 00 00 10 00 00 00 20 00 C0  ............. ..
00000080: 00 20 00 C0 4C 00 00 00 4C 00 00 00 04 00 00 00  . ..L...L.......
00000090: 00 10 00 00 01 00(3段) 00 00 F4 1F 00 00 F4 3F 00 C0  .............?..
000000a0: F4 3F 00 C0 0C 00 00 00 0C 00 00 00 06 00 00 00  .?..............
000000b0: 00 10 00 00 51 E5 74(4段) 64 00 00 00 00 00 00 00 00  ....Q.td........
000000c0: 00 00 00 00 00 00 00 00 00 00 00 00 06 00 00 00  ................
000000d0: 10 00 00 00 52 E5 74(5段) 64 F4 1F 00 00 F4 3F 00 C0  ....R.td.....?..
000000e0: F4 3F 00 C0 0C 00 00 00 0C 00 00 00 04 00 00 00  .?..............
000000f0: 01 00 00 00 00 00 00 00(6段) 00 00 00 00 00 00 00 00  ................
00000100: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
00000110: 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00  ................
00000120: 00 00 00 00 00 00 00 00 00 00 00 00              ............
```

