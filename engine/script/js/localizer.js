//-----------------------------------------------------------------------------
// Get the first non empty character (not space or tab)

//=============================================================================
// DEFINES
//=============================================================================

//-- Node.js libraries
const fs = require('fs');

//-- MSXgl JS libraries
const util = require("./util.js"); 


//-----------------------------------------------------------------------------
// Contants

const version = "1.0.0";

const lineTypeSection = 1;
const lineTypeText    = 2;

//-----------------------------------------------------------------------------
// Variables

var bVerbose = true;
var bComment = true;
// var outFilename = "./localization.h";
// var structName = "g_LocData";

//=============================================================================
// FUNCTIONS
//=============================================================================

//-----------------------------------------------------------------------------
//	Name:   Map from MSX Japanese (video) character set to Unicode
//	Date:   2019 September 25
//	Author: Rebecca Bettencourt <support@kreativekorp.com>
const MapJPtoMSX = {
	0x0000: [ 0x00 ],	// NULL
	0x6708: [ 0x01 ],	// CJK UNIFIED IDEOGRAPH-6708 (Monday, month)
	0x706B: [ 0x02 ],	// CJK UNIFIED IDEOGRAPH-706B (Tuesday, fire)
	0x6C34: [ 0x03 ],	// CJK UNIFIED IDEOGRAPH-6C34 (Wednesday, water)
	0x6728: [ 0x04 ],	// CJK UNIFIED IDEOGRAPH-6728 (Thursday, wood)
	0x91D1: [ 0x05 ],	// CJK UNIFIED IDEOGRAPH-91D1 (Friday, metal)
	0x571F: [ 0x06 ],	// CJK UNIFIED IDEOGRAPH-571F (Saturday, earth)
	0x65E5: [ 0x07 ],	// CJK UNIFIED IDEOGRAPH-65E5 (Sunday, day)
	0x5E74: [ 0x08 ],	// CJK UNIFIED IDEOGRAPH-5E74 (year)
	0x5186: [ 0x09 ],	// CJK UNIFIED IDEOGRAPH-5186 (yen)
	0x6642: [ 0x0A ],	// CJK UNIFIED IDEOGRAPH-6642 (hour, time)
	0x5206: [ 0x0B ],	// CJK UNIFIED IDEOGRAPH-5206 (minute)
	0x79D2: [ 0x0C ],	// CJK UNIFIED IDEOGRAPH-79D2 (second)
	0x767E: [ 0x0D ],	// CJK UNIFIED IDEOGRAPH-767E (hundred)
	0x5343: [ 0x0E ],	// CJK UNIFIED IDEOGRAPH-5343 (thousand)
	0x4E07: [ 0x0F ],	// CJK UNIFIED IDEOGRAPH-4E07 (ten thousand)
	0x03C0: [ 0x10 ],	// GREEK SMALL LETTER PI
	0x2534: [ 0x11 ],	// BOX DRAWINGS LIGHT UP AND HORIZONTAL
	0x252C: [ 0x12 ],	// BOX DRAWINGS LIGHT DOWN AND HORIZONTAL
	0x2524: [ 0x13 ],	// BOX DRAWINGS LIGHT VERTICAL AND LEFT
	0x251C: [ 0x14 ],	// BOX DRAWINGS LIGHT VERTICAL AND RIGHT
	0x253C: [ 0x15 ],	// BOX DRAWINGS LIGHT VERTICAL AND HORIZONTAL
	0x2502: [ 0x16 ],	// BOX DRAWINGS LIGHT VERTICAL
	0x2500: [ 0x17 ],	// BOX DRAWINGS LIGHT HORIZONTAL
	0x250C: [ 0x18 ],	// BOX DRAWINGS LIGHT DOWN AND RIGHT
	0x2510: [ 0x19 ],	// BOX DRAWINGS LIGHT DOWN AND LEFT
	0x2514: [ 0x1A ],	// BOX DRAWINGS LIGHT UP AND RIGHT
	0x2518: [ 0x1B ],	// BOX DRAWINGS LIGHT UP AND LEFT
	0x2573: [ 0x1C ],	// BOX DRAWINGS LIGHT DIAGONAL CROSS
	0x5927: [ 0x1D ],	// CJK UNIFIED IDEOGRAPH-5927 (big)
	0x4E2D: [ 0x1E ],	// CJK UNIFIED IDEOGRAPH-4E2D (middle)
	0x5C0F: [ 0x1F ],	// CJK UNIFIED IDEOGRAPH-5C0F (small)
	// 0x0020: [ 0x20 ],	// SPACE
	// 0x0021: [ 0x21 ],	// EXCLAMATION MARK
	// 0x0022: [ 0x22 ],	// QUOTATION MARK
	// 0x0023: [ 0x23 ],	// NUMBER SIGN
	// 0x0024: [ 0x24 ],	// DOLLAR SIGN
	// 0x0025: [ 0x25 ],	// PERCENT SIGN
	// 0x0026: [ 0x26 ],	// AMPERSAND
	// 0x0027: [ 0x27 ],	// APOSTROPHE
	// 0x0028: [ 0x28 ],	// LEFT PARENTHESIS
	// 0x0029: [ 0x29 ],	// RIGHT PARENTHESIS
	// 0x002A: [ 0x2A ],	// ASTERISK
	// 0x002B: [ 0x2B ],	// PLUS SIGN
	// 0x002C: [ 0x2C ],	// COMMA
	// 0x002D: [ 0x2D ],	// HYPHEN-MINUS
	// 0x002E: [ 0x2E ],	// FULL STOP
	// 0x002F: [ 0x2F ],	// SOLIDUS
	// 0x0030: [ 0x30 ],	// DIGIT ZERO
	// 0x0031: [ 0x31 ],	// DIGIT ONE
	// 0x0032: [ 0x32 ],	// DIGIT TWO
	// 0x0033: [ 0x33 ],	// DIGIT THREE
	// 0x0034: [ 0x34 ],	// DIGIT FOUR
	// 0x0035: [ 0x35 ],	// DIGIT FIVE
	// 0x0036: [ 0x36 ],	// DIGIT SIX
	// 0x0037: [ 0x37 ],	// DIGIT SEVEN
	// 0x0038: [ 0x38 ],	// DIGIT EIGHT
	// 0x0039: [ 0x39 ],	// DIGIT NINE
	// 0x003A: [ 0x3A ],	// COLON
	// 0x003B: [ 0x3B ],	// SEMICOLON
	// 0x003C: [ 0x3C ],	// LESS-THAN SIGN
	// 0x003D: [ 0x3D ],	// EQUALS SIGN
	// 0x003E: [ 0x3E ],	// GREATER-THAN SIGN
	// 0x003F: [ 0x3F ],	// QUESTION MARK
	// 0x0040: [ 0x40 ],	// COMMERCIAL AT
	// 0x0041: [ 0x41 ],	// LATIN CAPITAL LETTER A
	// 0x0042: [ 0x42 ],	// LATIN CAPITAL LETTER B
	// 0x0043: [ 0x43 ],	// LATIN CAPITAL LETTER C
	// 0x0044: [ 0x44 ],	// LATIN CAPITAL LETTER D
	// 0x0045: [ 0x45 ],	// LATIN CAPITAL LETTER E
	// 0x0046: [ 0x46 ],	// LATIN CAPITAL LETTER F
	// 0x0047: [ 0x47 ],	// LATIN CAPITAL LETTER G
	// 0x0048: [ 0x48 ],	// LATIN CAPITAL LETTER H
	// 0x0049: [ 0x49 ],	// LATIN CAPITAL LETTER I
	// 0x004A: [ 0x4A ],	// LATIN CAPITAL LETTER J
	// 0x004B: [ 0x4B ],	// LATIN CAPITAL LETTER K
	// 0x004C: [ 0x4C ],	// LATIN CAPITAL LETTER L
	// 0x004D: [ 0x4D ],	// LATIN CAPITAL LETTER M
	// 0x004E: [ 0x4E ],	// LATIN CAPITAL LETTER N
	// 0x004F: [ 0x4F ],	// LATIN CAPITAL LETTER O
	// 0x0050: [ 0x50 ],	// LATIN CAPITAL LETTER P
	// 0x0051: [ 0x51 ],	// LATIN CAPITAL LETTER Q
	// 0x0052: [ 0x52 ],	// LATIN CAPITAL LETTER R
	// 0x0053: [ 0x53 ],	// LATIN CAPITAL LETTER S
	// 0x0054: [ 0x54 ],	// LATIN CAPITAL LETTER T
	// 0x0055: [ 0x55 ],	// LATIN CAPITAL LETTER U
	// 0x0056: [ 0x56 ],	// LATIN CAPITAL LETTER V
	// 0x0057: [ 0x57 ],	// LATIN CAPITAL LETTER W
	// 0x0058: [ 0x58 ],	// LATIN CAPITAL LETTER X
	// 0x0059: [ 0x59 ],	// LATIN CAPITAL LETTER Y
	// 0x005A: [ 0x5A ],	// LATIN CAPITAL LETTER Z
	// 0x005B: [ 0x5B ],	// LEFT SQUARE BRACKET
	// 0x00A5: [ 0x5C ],	// YEN SIGN
	// 0x005D: [ 0x5D ],	// RIGHT SQUARE BRACKET
	// 0x005E: [ 0x5E ],	// CIRCUMFLEX ACCENT
	// 0x005F: [ 0x5F ],	// LOW LINE
	// 0x0060: [ 0x60 ],	// GRAVE ACCENT
	// 0x0061: [ 0x61 ],	// LATIN SMALL LETTER A
	// 0x0062: [ 0x62 ],	// LATIN SMALL LETTER B
	// 0x0063: [ 0x63 ],	// LATIN SMALL LETTER C
	// 0x0064: [ 0x64 ],	// LATIN SMALL LETTER D
	// 0x0065: [ 0x65 ],	// LATIN SMALL LETTER E
	// 0x0066: [ 0x66 ],	// LATIN SMALL LETTER F
	// 0x0067: [ 0x67 ],	// LATIN SMALL LETTER G
	// 0x0068: [ 0x68 ],	// LATIN SMALL LETTER H
	// 0x0069: [ 0x69 ],	// LATIN SMALL LETTER I
	// 0x006A: [ 0x6A ],	// LATIN SMALL LETTER J
	// 0x006B: [ 0x6B ],	// LATIN SMALL LETTER K
	// 0x006C: [ 0x6C ],	// LATIN SMALL LETTER L
	// 0x006D: [ 0x6D ],	// LATIN SMALL LETTER M
	// 0x006E: [ 0x6E ],	// LATIN SMALL LETTER N
	// 0x006F: [ 0x6F ],	// LATIN SMALL LETTER O
	// 0x0070: [ 0x70 ],	// LATIN SMALL LETTER P
	// 0x0071: [ 0x71 ],	// LATIN SMALL LETTER Q
	// 0x0072: [ 0x72 ],	// LATIN SMALL LETTER R
	// 0x0073: [ 0x73 ],	// LATIN SMALL LETTER S
	// 0x0074: [ 0x74 ],	// LATIN SMALL LETTER T
	// 0x0075: [ 0x75 ],	// LATIN SMALL LETTER U
	// 0x0076: [ 0x76 ],	// LATIN SMALL LETTER V
	// 0x0077: [ 0x77 ],	// LATIN SMALL LETTER W
	// 0x0078: [ 0x78 ],	// LATIN SMALL LETTER X
	// 0x0079: [ 0x79 ],	// LATIN SMALL LETTER Y
	// 0x007A: [ 0x7A ],	// LATIN SMALL LETTER Z
	// 0x007B: [ 0x7B ],	// LEFT CURLY BRACKET
	// 0x007C: [ 0x7C ],	// VERTICAL LINE
	// 0x007D: [ 0x7D ],	// RIGHT CURLY BRACKET
	// 0x007E: [ 0x7E ],	// TILDE
	0x2660: [ 0x80 ],	// BLACK SPADE SUIT
	0x2665: [ 0x81 ],	// BLACK HEART SUIT
	0x2663: [ 0x82 ],	// BLACK CLUB SUIT
	0x2666: [ 0x83 ],	// BLACK DIAMOND SUIT
	0x25CB: [ 0x84 ],	// WHITE CIRCLE
	0x25CF: [ 0x85 ],	// BLACK CIRCLE
	0x3092: [ 0x86 ],	// HIRAGANA LETTER WO
	0x3041: [ 0x87 ],	// HIRAGANA LETTER SMALL A
	0x3043: [ 0x88 ],	// HIRAGANA LETTER SMALL I
	0x3045: [ 0x89 ],	// HIRAGANA LETTER SMALL U
	0x3047: [ 0x8A ],	// HIRAGANA LETTER SMALL E
	0x3049: [ 0x8B ],	// HIRAGANA LETTER SMALL O
	0x3083: [ 0x8C ],	// HIRAGANA LETTER SMALL YA
	0x3085: [ 0x8D ],	// HIRAGANA LETTER SMALL YU
	0x3087: [ 0x8E ],	// HIRAGANA LETTER SMALL YO
	0x3063: [ 0x8F ],	// HIRAGANA LETTER SMALL TU
	0x3042: [ 0x91 ],	// HIRAGANA LETTER A
	0x3044: [ 0x92 ],	// HIRAGANA LETTER I
	0x3046: [ 0x93 ],	// HIRAGANA LETTER U
	0x3048: [ 0x94 ],	// HIRAGANA LETTER E
	0x304A: [ 0x95 ],	// HIRAGANA LETTER O
	0x304B: [ 0x96 ],	// HIRAGANA LETTER KA
	0x304D: [ 0x97 ],	// HIRAGANA LETTER KI
	0x304F: [ 0x98 ],	// HIRAGANA LETTER KU
	0x3051: [ 0x99 ],	// HIRAGANA LETTER KE
	0x3053: [ 0x9A ],	// HIRAGANA LETTER KO
	0x3055: [ 0x9B ],	// HIRAGANA LETTER SA
	0x3057: [ 0x9C ],	// HIRAGANA LETTER SI
	0x3059: [ 0x9D ],	// HIRAGANA LETTER SU
	0x305B: [ 0x9E ],	// HIRAGANA LETTER SE
	0x305D: [ 0x9F ],	// HIRAGANA LETTER SO
	0x3000: [ 0xA0 ],	// IDEOGRAPHIC SPACE
	0x3002: [ 0xA1 ],	// IDEOGRAPHIC FULL STOP
	0x300C: [ 0xA2 ],	// LEFT CORNER BRACKET
	0x300D: [ 0xA3 ],	// RIGHT CORNER BRACKET
	0x3001: [ 0xA4 ],	// IDEOGRAPHIC COMMA
	0x30FB: [ 0xA5 ],	// KATAKANA MIDDLE DOT
	0x30F2: [ 0xA6 ],	// KATAKANA LETTER WO
	0x30A1: [ 0xA7 ],	// KATAKANA LETTER SMALL A
	0x30A3: [ 0xA8 ],	// KATAKANA LETTER SMALL I
	0x30A5: [ 0xA9 ],	// KATAKANA LETTER SMALL U
	0x30A7: [ 0xAA ],	// KATAKANA LETTER SMALL E
	0x30A9: [ 0xAB ],	// KATAKANA LETTER SMALL O
	0x30E3: [ 0xAC ],	// KATAKANA LETTER SMALL YA
	0x30E5: [ 0xAD ],	// KATAKANA LETTER SMALL YU
	0x30E7: [ 0xAE ],	// KATAKANA LETTER SMALL YO
	0x30C3: [ 0xAF ],	// KATAKANA LETTER SMALL TU
	0x30FC: [ 0xB0 ],	// KATAKANA-HIRAGANA PROLONGED SOUND MARK
	0x30A2: [ 0xB1 ],	// KATAKANA LETTER A
	0x30A4: [ 0xB2 ],	// KATAKANA LETTER I
	0x30A6: [ 0xB3 ],	// KATAKANA LETTER U
	0x30A8: [ 0xB4 ],	// KATAKANA LETTER E
	0x30AA: [ 0xB5 ],	// KATAKANA LETTER O
	0x30AB: [ 0xB6 ],	// KATAKANA LETTER KA
	0x30AD: [ 0xB7 ],	// KATAKANA LETTER KI
	0x30AF: [ 0xB8 ],	// KATAKANA LETTER KU
	0x30B1: [ 0xB9 ],	// KATAKANA LETTER KE
	0x30B3: [ 0xBA ],	// KATAKANA LETTER KO
	0x30B5: [ 0xBB ],	// KATAKANA LETTER SA
	0x30B7: [ 0xBC ],	// KATAKANA LETTER SI
	0x30B9: [ 0xBD ],	// KATAKANA LETTER SU
	0x30BB: [ 0xBE ],	// KATAKANA LETTER SE
	0x30BD: [ 0xBF ],	// KATAKANA LETTER SO
	0x30BF: [ 0xC0 ],	// KATAKANA LETTER TA
	0x30C1: [ 0xC1 ],	// KATAKANA LETTER TI
	0x30C4: [ 0xC2 ],	// KATAKANA LETTER TU
	0x30C6: [ 0xC3 ],	// KATAKANA LETTER TE
	0x30C8: [ 0xC4 ],	// KATAKANA LETTER TO
	0x30CA: [ 0xC5 ],	// KATAKANA LETTER NA
	0x30CB: [ 0xC6 ],	// KATAKANA LETTER NI
	0x30CC: [ 0xC7 ],	// KATAKANA LETTER NU
	0x30CD: [ 0xC8 ],	// KATAKANA LETTER NE
	0x30CE: [ 0xC9 ],	// KATAKANA LETTER NO
	0x30CF: [ 0xCA ],	// KATAKANA LETTER HA
	0x30D2: [ 0xCB ],	// KATAKANA LETTER HI
	0x30D5: [ 0xCC ],	// KATAKANA LETTER HU
	0x30D8: [ 0xCD ],	// KATAKANA LETTER HE
	0x30DB: [ 0xCE ],	// KATAKANA LETTER HO
	0x30DE: [ 0xCF ],	// KATAKANA LETTER MA
	0x30DF: [ 0xD0 ],	// KATAKANA LETTER MI
	0x30E0: [ 0xD1 ],	// KATAKANA LETTER MU
	0x30E1: [ 0xD2 ],	// KATAKANA LETTER ME
	0x30E2: [ 0xD3 ],	// KATAKANA LETTER MO
	0x30E4: [ 0xD4 ],	// KATAKANA LETTER YA
	0x30E6: [ 0xD5 ],	// KATAKANA LETTER YU
	0x30E8: [ 0xD6 ],	// KATAKANA LETTER YO
	0x30E9: [ 0xD7 ],	// KATAKANA LETTER RA
	0x30EA: [ 0xD8 ],	// KATAKANA LETTER RI
	0x30EB: [ 0xD9 ],	// KATAKANA LETTER RU
	0x30EC: [ 0xDA ],	// KATAKANA LETTER RE
	0x30ED: [ 0xDB ],	// KATAKANA LETTER RO
	0x30EF: [ 0xDC ],	// KATAKANA LETTER WA
	0x30F3: [ 0xDD ],	// KATAKANA LETTER N
	0x309B: [ 0xDE ],	// KATAKANA-HIRAGANA VOICED SOUND MARK
	0x309C: [ 0xDF ],	// KATAKANA-HIRAGANA SEMI-VOICED SOUND MARK
	0x305F: [ 0xE0 ],	// HIRAGANA LETTER TA
	0x3061: [ 0xE1 ],	// HIRAGANA LETTER TI
	0x3064: [ 0xE2 ],	// HIRAGANA LETTER TU
	0x3066: [ 0xE3 ],	// HIRAGANA LETTER TE
	0x3068: [ 0xE4 ],	// HIRAGANA LETTER TO
	0x306A: [ 0xE5 ],	// HIRAGANA LETTER NA
	0x306B: [ 0xE6 ],	// HIRAGANA LETTER NI
	0x306C: [ 0xE7 ],	// HIRAGANA LETTER NU
	0x306D: [ 0xE8 ],	// HIRAGANA LETTER NE
	0x306E: [ 0xE9 ],	// HIRAGANA LETTER NO
	0x306F: [ 0xEA ],	// HIRAGANA LETTER HA
	0x3072: [ 0xEB ],	// HIRAGANA LETTER HI
	0x3075: [ 0xEC ],	// HIRAGANA LETTER HU
	0x3078: [ 0xED ],	// HIRAGANA LETTER HE
	0x307B: [ 0xEE ],	// HIRAGANA LETTER HO
	0x307E: [ 0xEF ],	// HIRAGANA LETTER MA
	0x307F: [ 0xF0 ],	// HIRAGANA LETTER MI
	0x3080: [ 0xF1 ],	// HIRAGANA LETTER MU
	0x3081: [ 0xF2 ],	// HIRAGANA LETTER ME
	0x3082: [ 0xF3 ],	// HIRAGANA LETTER MO
	0x3084: [ 0xF4 ],	// HIRAGANA LETTER YA
	0x3086: [ 0xF5 ],	// HIRAGANA LETTER YU
	0x3088: [ 0xF6 ],	// HIRAGANA LETTER YO
	0x3089: [ 0xF7 ],	// HIRAGANA LETTER RA
	0x308A: [ 0xF8 ],	// HIRAGANA LETTER RI
	0x308B: [ 0xF9 ],	// HIRAGANA LETTER RU
	0x308C: [ 0xFA ],	// HIRAGANA LETTER RE
	0x308D: [ 0xFB ],	// HIRAGANA LETTER RO
	0x308F: [ 0xFC ],	// HIRAGANA LETTER WA
	0x3093: [ 0xFD ],	// HIRAGANA LETTER N

	0x304C: [ 0x96, 0xDE ],	// HIRAGANA LETTER GA
	0x304E: [ 0x97, 0xDE ],	// HIRAGANA LETTER GI
	0x3050: [ 0x98, 0xDE ], // HIRAGANA LETTER GU
	0x3052: [ 0x99, 0xDE ], // HIRAGANA LETTER GE
	0x3054: [ 0x9A, 0xDE ], // HIRAGANA LETTER GO
	0x3056: [ 0x9B, 0xDE ], // HIRAGANA LETTER ZA
	0x3058: [ 0x9C, 0xDE ], // HIRAGANA LETTER ZI
	0x305A: [ 0x9D, 0xDE ], // HIRAGANA LETTER ZU
	0x305C: [ 0x9E, 0xDE ], // HIRAGANA LETTER ZE
	0x305E: [ 0x9F, 0xDE ], // HIRAGANA LETTER ZO
	0x3060: [ 0xE0, 0xDE ], // HIRAGANA LETTER DA
	0x3062: [ 0xE1, 0xDE ], // HIRAGANA LETTER DI
	0x3065: [ 0xE2, 0xDE ], // HIRAGANA LETTER DU
	0x3067: [ 0xE3, 0xDE ], // HIRAGANA LETTER DE
	0x3069: [ 0xE4, 0xDE ], // HIRAGANA LETTER DO
	0x3070: [ 0xEA, 0xDE ], // HIRAGANA LETTER BA
	0x3071: [ 0xEA, 0xDF ], // HIRAGANA LETTER PA
	0x3073: [ 0xEB, 0xDE ], // HIRAGANA LETTER BI
	0x3074: [ 0xEB, 0xDF ], // HIRAGANA LETTER PI
	0x3076: [ 0xEC, 0xDE ], // HIRAGANA LETTER BU
	0x3077: [ 0xEC, 0xDF ], // HIRAGANA LETTER PU
	0x3079: [ 0xED, 0xDE ], // HIRAGANA LETTER BE
	0x307A: [ 0xED, 0xDF ], // HIRAGANA LETTER PE
	0x307C: [ 0xEE, 0xDE ], // HIRAGANA LETTER BO
	0x307D: [ 0xEE, 0xDF ], // HIRAGANA LETTER PO
	0x3094: [ 0x93, 0xDE ], // HIRAGANA LETTER VU

	0x30AC: [ 0xB6, 0xDE ],	// KATAKANA LETTER GA
	0x30AE: [ 0xB7, 0xDE ],	// KATAKANA LETTER GI
	0x30B0: [ 0xB8, 0xDE ],	// KATAKANA LETTER GU
	0x30B2: [ 0xB9, 0xDE ],	// KATAKANA LETTER GE
	0x30B4: [ 0xBA, 0xDE ],	// KATAKANA LETTER GO
	0x30B6: [ 0xBB, 0xDE ],	// KATAKANA LETTER ZA
	0x30B8: [ 0xBC, 0xDE ],	// KATAKANA LETTER ZI
	0x30BA: [ 0xBD, 0xDE ],	// KATAKANA LETTER ZU
	0x30BC: [ 0xBE, 0xDE ],	// KATAKANA LETTER ZE
	0x30BE: [ 0xBF, 0xDE ],	// KATAKANA LETTER ZO
	0x30C0: [ 0xC0, 0xDE ],	// KATAKANA LETTER DA
	0x30C2: [ 0xC1, 0xDE ],	// KATAKANA LETTER DI
	0x30C5: [ 0xC2, 0xDE ],	// KATAKANA LETTER DU
	0x30C7: [ 0xC3, 0xDE ],	// KATAKANA LETTER DE
	0x30C9: [ 0xC4, 0xDE ],	// KATAKANA LETTER DO
	0x30D0: [ 0xCA, 0xDE ],	// KATAKANA LETTER BA
	0x30D1: [ 0xCA, 0xDF ],	// KATAKANA LETTER PA
	0x30D3: [ 0xCB, 0xDE ],	// KATAKANA LETTER BI
	0x30D4: [ 0xCB, 0xDF ],	// KATAKANA LETTER PI
	0x30D6: [ 0xCC, 0xDE ],	// KATAKANA LETTER BU
	0x30D7: [ 0xCC, 0xDF ],	// KATAKANA LETTER PU
	0x30D9: [ 0xCD, 0xDE ],	// KATAKANA LETTER BE
	0x30DA: [ 0xCD, 0xDF ],	// KATAKANA LETTER PE
	0x30DC: [ 0xCE, 0xDE ],	// KATAKANA LETTER BO
	0x30DD: [ 0xCE, 0xDF ],	// KATAKANA LETTER PO
	0x30F4: [ 0xB3, 0xDE ],	// KATAKANA LETTER VU
	0x30F7: [ 0xDC, 0xDE ],	// KATAKANA LETTER VA
	0x30FA: [ 0xA6, 0xDE ],	// KATAKANA LETTER VO
};

//-----------------------------------------------------------------------------
// 
function INTtoMSX(str)
{
	return str;
}

//-----------------------------------------------------------------------------
// 
function JAPtoMSX(str)
{
	var ret = "";
	for(var i = 0; i < str.length; i++)
	{
		var chr = str[i];
		var code = str[i].charCodeAt(0);
		var map = MapJPtoMSX[code];
		if(map != null)
		{
			chr = "";
			for(var j = 0; j < map.length; j++)
				chr += "\\x" + map[j].toString(16).padStart(2, '0').toUpperCase();
		}
		ret += chr;
	}

	return ret;
}

//-----------------------------------------------------------------------------
// 
function log(str)
{
	if(bVerbose)
		console.log(str);
}

//-----------------------------------------------------------------------------
// Get the first non empty character (not space or tab)
function getFirstChar(str)
{
	for (var i = 0; i < str.length; i++)
		if((str[i] != ' ') && (str[i] != '\t'))
			return str[i];

	return 0;
}

//-----------------------------------------------------------------------------
// Parse a line and return a descriptor according to line type
function getLineType(str)
{
	var obj = {};
	const chr = getFirstChar(str);
	if(chr == '[')
	{
		const reg = /\[[ \t]*(?<section>[a-zA-Z0-9]+)[ \t]*\]/;
		const res = str.match(reg);
		if(res == null)
		{
			console.log(`Error: Invalid section! ${str}`);
			return null;
		}
		obj['type'] = lineTypeSection;
		obj['value'] = res.groups.section.toUpperCase();
	}
	else if(chr != 0)
	{
		const reg = /[ \t]*(?<key>[a-zA-Z0-9]+)[ \t]*\=[ \t]*"(?<value>[^"]+)"/;
		const res = str.match(reg);
		if(res == null)
		{
			console.log(`Error: Invalid text! ${str}`);
			return null;
		}
		obj['type'] = lineTypeText;
		obj['key'] = res.groups.key.toUpperCase();
		obj['value'] = res.groups.value;
	}
	else
		return null;

	return obj;
}

//-----------------------------------------------------------------------------
// Parse a localisation file
function parseLocFile(filename, locTable)
{
	log("Parsing " + filename + "...");

	var lang = null;
	const fileData = fs.readFileSync(filename, 'utf8');
	const lines = fileData.split('\n');
	for (var line = 0; line < lines.length; line++)
	{
		const obj = getLineType(lines[line]);
		if(obj != null)
		{
			switch(obj.type)
			{
				case lineTypeSection:
					if(obj.value != lang)
					{
						lang = obj.value;
					}
					break;

				case lineTypeText:
					if(locTable[lang] == null)
						locTable[lang] = [];

					if(locTable[lang][obj.key] != null)
						console.log(`Warning: Text ID '${obj.key}' already defined for langage '${lang}'`);
					else
					{
						switch(lang)
						{
						case "EN":
						case "FR":
							locTable[lang][obj.key] = INTtoMSX(obj.value);
							break;

						case "JA":
						case "JP":
								locTable[lang][obj.key] = JAPtoMSX(obj.value);
							break;

						default:
							locTable[lang][obj.key] = obj.value;
						}
					}
					break;
			}
		}
	}
}

//=============================================================================
// Main programm
//=============================================================================

module.exports.generate = function (inputFiles, outFilename, structName)
{
	//-----------------------------------------------------------------------------
	// Parse the input file
	var locTable = [];
	for(var i = 0; i < inputFiles.length; i++)
		parseLocFile(inputFiles[i], locTable);
	// log(locTable);

	//-----------------------------------------------------------------------------
	// Analyze localisation data
	var langIDs = [];
	var textIDs = [];
	var langKeys = Object.keys(locTable);
	for(var i = 0; i < langKeys.length; i++)
	{
		langIDs.push(langKeys[i]);
		var textKeys = Object.keys(locTable[langKeys[i]]);
		for(var j = 0; j < textKeys.length; j++)
			if(!textIDs.includes(textKeys[j]))
				textIDs.push(textKeys[j]);
	}
	// log(langIDs);
	// log(textIDs);

	//-----------------------------------------------------------------------------
	// Generate header file
	var i;
	var headContent = `// Generated by MSXgl on ${util.getDateString()}\n`
	headContent += `#pragma once\n#include "core.h"\n\n`;

	headContent += "// Langage definition\n";
	for(i = 0; i < langIDs.length; i++)
		headContent += `#define LANG_${langIDs[i]} ${i}\n`;
	headContent += `#define LANG_MAX ${i}\n\n`;

	headContent += "// Text ID definition\n";
	for(i = 0; i < textIDs.length; i++)
		headContent += `#define TEXT_${textIDs[i]} ${i}\n`;
	headContent += `#define TEXT_MAX ${i}\n\n`;

	headContent += "// Localization data table\n";
	headContent += `const c8* const ${structName}[LANG_MAX][TEXT_MAX] =\n{\n`;

	var langKeys = Object.keys(locTable);
	for(var i = 0; i < langKeys.length; i++)
	{
		headContent += `\t// ${langKeys[i]}\n\t{\n`;
		for(var j = 0; j < textIDs.length; j++)
		{
			if(locTable[langKeys[i]][textIDs[j]] == null)
			{
				headContent += `\t\tNULL,`;
				log(`Warning: Text ID '${textIDs[j]}' not defined for langage '${langKeys[i]}'`);
			}
			else
				headContent += `\t\t"${locTable[langKeys[i]][textIDs[j]]}",`;
			if(bComment)
				headContent += ` // TEXT_${textIDs[j]}`;
			headContent += "\n";
		}
		headContent += `\t},\n`;
	}

	headContent += `};`;

	// log(headContent);
	fs.writeFileSync(outFilename, headContent);
}