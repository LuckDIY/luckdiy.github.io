b 0x1500     //走到1500内存处停下来
s 1          //单步执行
n            //单步执行
show int    //开始中断跟踪
sba  17362299        //执行了多少调指令后停下来
print-stack      //打印栈


00017362300:

sba 17362299


| STACK 0xc009efb0 [0xc0004000]
| STACK 0xc009efb4 [0x00072000]
| STACK 0xc009efb8 [0xc009eff8]
| STACK 0xc009efbc [0xc009efd0]
| STACK 0xc009efc0 [0xc0003ff4]
| STACK 0xc009efc4 [0x00000000]
| STACK 0xc009efc8 [0xc0002027]
| STACK 0xc009efcc [0xc0002275]

| STACK 0xc009efd0 [0xc0000018]
| STACK 0xc009efd4 [0xc0000000]
| STACK 0xc009efd8 [0xc0090010]
| STACK 0xc009efdc [0xc0000010]
| STACK 0xc009efe0 [0x00000000]
| STACK 0xc009efe4 [0xc0001533]
| STACK 0xc009efe8 [0x00000008]
| STACK 0xc009efec [0x00000286]
| STACK 0xc009eff0 [0xc009f004]
| STACK 0xc009eff4 [0x000700f4]
| STACK 0xc009eff8 [0x00000000]
| STACK 0xc009effc [0x8ec031fa]


<bochs:24> r
eax: 0x00000020 32
ecx: 0xc0002027 -1073733593
edx: 0x00000000 0
ebx: 0xc0003ff4 -1073725452

esp: 0xc009efb0 -1073090640
ebp: 0xc009eff8 -1073090568

esi: 0x00072000 466944
edi: 0xc0004000 -1073725440
eip: 0xc00018f3
eflags 0x00000092: id vip vif ac vm rf nt IOPL=0 of df if tf SF zf AF pf cf

eax: 0xc0002275 -1073733003
ecx: 0xc0002027 -1073733593
edx: 0x00000000 0
ebx: 0xc0003ff4 -1073725452

esp: 0xc009efe0 -1073090592
ebp: 0xc009eff8 -1073090568

esi: 0x00072000 466944
edi: 0xc0004000 -1073725440
eip: 0xc00018fa
eflags 0x00000092: id vip vif ac vm rf nt IOPL=0 of df if tf SF zf AF pf cf

----------退回中断前------------

| STACK 0xc009efe4 [0xc0001533]
| STACK 0xc009efe8 [0x00000008]
| STACK 0xc009efec [0x00000286]


| STACK 0xc009eff0 [0xc009f004]
| STACK 0xc009eff4 [0x000700f4]
| STACK 0xc009eff8 [0x00000000]
| STACK 0xc009effc [0x8ec031fa]
| STACK 0xc009f000 [0x8ec031fa]
| STACK 0xc009f004 [0x10bb66d8]
| STACK 0xc009f008 [0x67000005]
| STACK 0xc009f00c [0x660b8b66]
| STACK 0xc009f010 [0x1274c985]
| STACK 0xc009f014 [0x438b6667]
| STACK 0xc009f018 [0x8b666704]
| STACK 0xc009f01c [0x300f0853]
| STACK 0xc009f020 [0x0cc38366]
| STACK 0xc009f024 [0xfff0e5eb]
| STACK 0xc009f028 [0xf4073c06]
| STACK 0xc009f02c [0x0000fdeb]
| STACK 0xc009f030 [0x00000000]


eax: 0xc0002275 -1073733003
ecx: 0xc0002027 -1073733593
edx: 0x00000000 0
ebx: 0xc0003ff4 -1073725452
esp: 0xc009efe4 -1073090588
ebp: 0xc009eff8 -1073090568
esi: 0x00072000 466944
edi: 0xc0004000 -1073725440
eip: 0xc00018fd
eflags 0x00000086: id vip vif ac vm rf nt IOPL=0 of df if tf SF zf af PF cf

es:0x0010, dh=0x00cf9300, dl=0x0000ffff, valid=1
Data segment, base=0x00000000, limit=0xffffffff, Read/Write, Accessed
cs:0x0008, dh=0x00cf9900, dl=0x0000ffff, valid=1
Code segment, base=0x00000000, limit=0xffffffff, Execute-Only, Non-Conforming, Accessed, 32-bit
ss:0x0010, dh=0x00cf9300, dl=0x0000ffff, valid=7
Data segment, base=0x00000000, limit=0xffffffff, Read/Write, Accessed
ds:0x0010, dh=0x00cf9300, dl=0x0000ffff, valid=1
Data segment, base=0x00000000, limit=0xffffffff, Read/Write, Accessed
fs:0x0000, dh=0x00001000, dl=0x00000000, valid=0
gs:0x0018, dh=0xc0c0930b, dl=0x80000007, valid=1
Data segment, base=0xc00b8000, limit=0x00007fff, Read/Write, Accessed
ldtr:0x0000, dh=0x00008200, dl=0x0000ffff, valid=1
tr:0x0000, dh=0x00008b00, dl=0x0000ffff, valid=1
gdtr:base=0xc0000903, limit=0x1f
idtr:base=0x00004320, limit=0x107

---------退回后--------------------
| STACK 0xc009eff0 [0xc009f004]
| STACK 0xc009eff4 [0x000700f4]
| STACK 0xc009eff8 [0x00000000]
| STACK 0xc009effc [0x8ec031fa]
| STACK 0xc009f000 [0x8ec031fa]
| STACK 0xc009f004 [0x10bb66d8]
| STACK 0xc009f008 [0x67000005]
| STACK 0xc009f00c [0x660b8b66]
| STACK 0xc009f010 [0x1274c985]
| STACK 0xc009f014 [0x438b6667]
| STACK 0xc009f018 [0x8b666704]
| STACK 0xc009f01c [0x300f0853]
| STACK 0xc009f020 [0x0cc38366]
| STACK 0xc009f024 [0xfff0e5eb]
| STACK 0xc009f028 [0xf4073c06]
| STACK 0xc009f02c [0x0000fdeb]
| STACK 0xc009f030 [0x00000000]
| STACK 0xc009f034 [0x00000000]
| STACK 0xc009f038 [0x00000000]
| STACK 0xc009f03c [0x00000000]

eax: 0xc0002275 -1073733003
ecx: 0xc0002027 -1073733593
edx: 0x00000000 0
ebx: 0xc0003ff4 -1073725452
esp: 0xc009eff0 -1073090576
ebp: 0xc009eff8 -1073090568
esi: 0x00072000 466944
edi: 0xc0004000 -1073725440
eip: 0xc0001533
eflags 0x00000286: id vip vif ac vm rf nt IOPL=0 of df IF tf SF zf af PF cf


