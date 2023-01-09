﻿NDSummary.OnToolTipsLoaded("File:dos_mapper.h",{822:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype822\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> DOSMapper_Init()</div></div><div class=\"TTSummary\">Initialize DOS extended BIOS</div></div>",823:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype823\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> DOS_VarTable* DOSMapper_GetVarTable()</div></div><div class=\"TTSummary\">Get Memory Mappers variable table</div></div>",824:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype824\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> DOSMapper_Alloc(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">type,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">slot,</td></tr><tr><td class=\"PType first\">DOS_Segment*&nbsp;</td><td class=\"PName last\">seg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Allocate a segment</div></div>",825:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype825\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> DOSMapper_Free(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">seg,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Free a segment</div></div>",826:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype826\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline bool</span> DOSMapper_FreeStruct(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">DOS_Segment*&nbsp;</td><td class=\"PName last\">seg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Free a segment</div></div>",827:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype827\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> DOSMapper_SetPage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">page,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">seg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Select a segment on the corresponding memory page at the specified address</div></div>",828:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype828\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> DOSMapper_SetPage0(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">seg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Select a segment on page 0 (0000h~3FFFh)</div></div>",829:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype829\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> DOSMapper_SetPage1(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">seg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Select a segment on page 1 (4000h~7FFFh)</div></div>",830:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype830\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> DOSMapper_SetPage2(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">seg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Select a segment on page 2 (8000h~BFFFh)</div></div>",831:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype831\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">u8 DOSMapper_GetPage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">page</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Get the selected segment number on the corresponding memory page at the specified address</div></div>",832:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype832\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">u8 DOSMapper_GetPage0()</div></div><div class=\"TTSummary\">Get the segment number on page 0 (0000h~3FFFh)</div></div>",833:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype833\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">u8 DOSMapper_GetPage1()</div></div><div class=\"TTSummary\">Get the segment number on page 1 (4000h~7FFFh)</div></div>",834:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype834\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">u8 DOSMapper_GetPage2()</div></div><div class=\"TTSummary\">Get the segment number on page 2 (8000h~BFFFh)</div></div>",835:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype835\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">u8 DOSMapper_GetPage3()</div></div><div class=\"TTSummary\">Get the segment number on page 3 (C000h~FFFFh)</div></div>"});