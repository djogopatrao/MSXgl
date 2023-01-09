﻿NDSummary.OnToolTipsLoaded("File:bios.h",{389:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype389\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_Exit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">ret</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Handle clean exit form Basic or MSX-DOS environment</div></div>",478:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype478\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Bios_SetKeyClick(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Enable or disable key click</div></div>",539:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype539\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> u8 Bios_GetMSXVersion()</div></div><div class=\"TTSummary\">Get MSX generation version</div></div>",304:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype304\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_Startup()</div></div><div class=\"TTSummary\">Tests RAM and sets RAM slot for the system.&nbsp; Wrapper for CHKRAM routine.</div></div>",308:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype308\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">u8 Bios_InterSlotRead(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">slot,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads the value of an address in another slot.&nbsp; Wrapper for RDSLT routine.</div></div>",309:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype309\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_InterSlotWrite(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">slot,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes a value to an address in another slot.&nbsp; Wrapper for WRSLT routine.</div></div>",310:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype310\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_InterSlotCall(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">slot,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Executes inter-slot call.&nbsp; Wrapper for CALSLT routine.</div></div>",386:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype386\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_SwitchSlot(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">page,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">slot</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Switches indicated slot at indicated page on perpetual.&nbsp; Wrapper for ENASLT routine.</div></div>",586:"<div class=\"NDToolTip TMacro LC\"><div class=\"TTSummary\">Executes an interslot call.&nbsp; Wrapper for CALLF routine.</div></div>",492:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype492\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_DisableScreen()</div></div><div class=\"TTSummary\">Inhibits the screen display. Wrapper for DISSCR routine.</div></div>",493:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype493\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_EnableScreen()</div></div><div class=\"TTSummary\">Displays the screen. Wrapper for ENASCR routine.</div></div>",494:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype494\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_WriteVDP(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">reg,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Write data in the VDP-register. Wrapper for WRTVDP routine.</div></div>",495:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype495\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> u8 Bios_ReadVRAM(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads the content of VRAM. Wrapper for RDVRM routine.</div></div>",496:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype496\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_WriteVRAM(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes data in VRAM. Wrapper for WRTVRM routine.</div></div>",497:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype497\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Bios_SetAddressForRead(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Enable VDP to read. Wrapper for SETRD routine.</div></div>",498:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype498\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Bios_SetAddressForWrite(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">addr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Enable VDP to write. Wrapper for SETWRT routine.</div></div>",499:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype499\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_FillVRAM(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">addr,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">length,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Fill VRAM with value. Wrapper for FILVRM routine.</div></div>",500:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype500\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_TransfertVRAMtoRAM(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">vram,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">ram,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Block transfer to memory from VRAM. Wrapper for LDIRMV routine.</div></div>",501:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype501\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_TransfertRAMtoVRAM(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">ram,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">vram,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">length</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Block transfer to VRAM from memory. Wrapper for LDIRVM routine.</div></div>",502:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype502\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Bios_ChangeMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">screen</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Switches to given screenmode. Wrapper for CHGMOD routine.</div></div>",503:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype503\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_ChangeColor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">text,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">back,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">border</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Changes the screencolors. Wrapper for CHGCLR routine.</div></div>",504:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype504\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_InitScreen0()</div></div><div class=\"TTSummary\">Switches to SCREEN 0 (text screen with 40*24 characters). Wrapper for INITXT routine.</div></div>",505:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype505\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_InitScreen0Ex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">pnt,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">pgt,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">width,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">text,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">bg,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">border</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Switches to SCREEN 0 (text screen with 40*24 characters). Wrapper for INITXT routine.</div></div>",506:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype506\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_InitScreen1()</div></div><div class=\"TTSummary\">Switches to SCREEN 1 (text screen with 32*24 characters). Wrapper for INIT32 routine.</div></div>",507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype507\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_InitScreen1Ex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">pnt,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">ct,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">pgt,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">sat,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">sgt,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">text,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">bg,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">border</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Switches to SCREEN 1 (text screen with 32*24 characters). Wrapper for INIT32 routine.</div></div>",508:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype508\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_InitScreen2()</div></div><div class=\"TTSummary\">Switches to SCREEN 2 (high resolution screen with 256*192 pixels). Wrapper for INIGRP routine.</div></div>",509:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype509\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_InitScreen2Ex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">pnt,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">ct,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">pgt,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">sat,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">sgt,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">text,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">bg,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">border</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Switches to SCREEN 2 (high resolution screen with 256*192 pixels). Wrapper for INIGRP routine.</div></div>",510:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype510\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_InitScreen3()</div></div><div class=\"TTSummary\">Switches to SCREEN 3 (multi-color screen 64*48 pixels). Wrapper for INIMLT routine.</div></div>",511:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype511\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_InitScreen3Ex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">pnt,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">ct,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">pgt,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">sat,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">sgt,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">text,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">bg,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">border</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Switches to SCREEN 3 (multi-color screen 64*48 pixels). Wrapper for INIMLT routine.</div></div>",512:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype512\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_SetScreen0()</div></div><div class=\"TTSummary\">Switches VDP in SCREEN 0 mode. Wrapper for SETTXT routine.</div></div>",513:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype513\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_SetScreen1()</div></div><div class=\"TTSummary\">Switches VDP in SCREEN 1 mode. Wrapper for SETT32 routine.</div></div>",514:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype514\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_SetScreen2()</div></div><div class=\"TTSummary\">Switches VDP to SCREEN 2 mode. Wrapper for SETGRP routine.</div></div>",515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype515\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_SetScreen3()</div></div><div class=\"TTSummary\">Switches VDP to SCREEN 3 mode. Wrapper for SETMLT routine.</div></div>",516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype516\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">u16 Bios_GetPatternTableAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">) __FASTCALL</td></tr></table></div></div><div class=\"TTSummary\">Returns the address of the sprite pattern table. Wrapper for CALPAT routine.</div></div>",517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype517\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">u16 Bios_GetAttributeTableAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">) __FASTCALL</td></tr></table></div></div><div class=\"TTSummary\">Returns the address of the sprite attribute table. Wrapper for CALATR routine.</div></div>",518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype518\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> u8 Bios_GetSpriteSize()</div></div><div class=\"TTSummary\">Returns current sprite size. Wrapper for GSPSIZ routine.</div></div>",519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype519\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Bios_GraphPrintChar(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">chr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Displays a character on the graphic screen. Wrapper for GRPPRT routine.</div></div>",520:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype520\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_GraphPrintCharEx(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">chr,</td></tr><tr><td class=\"PType first\">u16&nbsp;</td><td class=\"PName last\">x,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">y,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">op</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Displays a character on the graphic screen. Wrapper for GRPPRT routine.</div></div>",540:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype540\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline bool</span> Bios_IsSpriteCollision()</div></div><div class=\"TTSummary\">Returns FALSE if no collision occured during the previous frame, otherwise returns S00_C.&nbsp; This function use value of VDP status register S#0 that BIOS backup in RAM (STATFL).</div></div>",547:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype547\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline bool</span> Bios_IsSpriteOverScan()</div></div><div class=\"TTSummary\">Returns FALSE if no over-scan occured during the previous frame (more than 4/8 sprites on the same line), otherwise returns S00_5S.&nbsp; This function use value of VDP status register S#0 that BIOS backup in RAM (STATFL).</div></div>",550:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype550\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> u8 Bios_GetSpriteOverScanId()</div></div><div class=\"TTSummary\">Returns index of the over-scaned sprite (5th/8th sprite on line). Value is in 0-31 range.&nbsp; This function use value of VDP status register S#0 that BIOS backup in RAM (STATFL).</div></div>",521:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype521\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_InitPSG()</div></div><div class=\"TTSummary\">Initialises PSG and sets initial value for the PLAY statement. Wrapper for GICINI routine.</div></div>",522:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype522\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_WritePSG(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">reg,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Writes data to PSG-register. Wrapper for WRTPSG routine.</div></div>",523:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype523\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> u8 Bios_ReadPSG(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">reg</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Reads value from PSG-register. Wrapper for RDPSG routine.</div></div>",524:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype524\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_PlayPSG()</div></div><div class=\"TTSummary\">Tests whether the PLAY statement is being executed as a background task. Wrapper for STRTMS routine.</div></div>",525:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype525\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> u8 Bios_GetCharacter()</div></div><div class=\"TTSummary\">One character input (waiting). Wrapper for CHGET routine.</div></div>",526:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype526\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Bios_TextPrintChar(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">chr</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Displays one character. Wrapper for CHPUT routine.</div></div>",136:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype136\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline void</span> Bios_Beep()</div></div><div class=\"TTSummary\">Generates beep. Wrapper for BEEP routine.</div></div>",146:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype146\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> Bios_ClearScreen()</div></div><div class=\"TTSummary\">Clears the screen. Wrapper for CLS routine.</div></div>",529:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype529\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Bios_SetCursorPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">X,</td></tr><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">Y</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Moves cursor to the specified position. Wrapper for POSIT routine.</div></div>",530:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype530\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> u8 Bios_GetJoystickDirection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">port</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns the joystick status. Wrapper for GTSTCK routine.</div></div>",531:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype531\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline bool</span> Bios_GetJoystickTrigger(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">trigger</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns current trigger status. Wrapper for GTTRIG routine.</div></div>",532:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype532\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> u8 Bios_GetKeyboardMatrix(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">line</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Returns the value of the specified line from the keyboard matrix. Wrapper for SNSMAT routine.</div></div>",533:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype533\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline bool</span> Bios_IsKeyPressed(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">key</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Check if the given key is pressed</div></div>",534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype534\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline void</span> Bios_SetCPUMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">u8&nbsp;</td><td class=\"PName last\">mode</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Changes CPU mode. Wrapper for CHGCPU routine.</div></div>",535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype535\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">inline</span> u8 Bios_GetCPUMode()</div></div><div class=\"TTSummary\">Returns current CPU mode. Wrapper for GETCPU routine.</div></div>"});