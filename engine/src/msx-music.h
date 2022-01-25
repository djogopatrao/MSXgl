// ____________________________ 
// ██▀▀█▀▀██▀▀▀▀▀▀▀█▀▀█        │   ▄ ▄  ▄▄▄ ▄▄ ▄     ▄ ▄           ▄
// ██  ▀  █▄  ▀██▄ ▀ ▄█ ▄▀▀ █  │  ██▀█ ▀█▄  ▀█▄▀ ▄▄ ██▀█ ██ █  ██▀ ▄  ▄█▀▀
// █  █ █  ▀▀  ▄█  █  █ ▀▄█ █▄ │  ██ █ ▄▄█▀ ██ █    ██ █ ▀█▄█ ▄██  ██ ▀█▄▄
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀────────┘
//  by Guillaume 'Aoineko' Blanchard under CC-BY-AS license
//─────────────────────────────────────────────────────────────────────────────
// MSX-Music (YM2413) handler module
//
// References:
//  - YM2413 FM Operator Type-LL (OPLL) Application Manual
//     https://www.smspower.org/maxim/Documents/YM2413ApplicationManual
//  - MSX-MUSIC programming
//     https://www.msx.org/wiki/MSX-MUSIC_programming
//─────────────────────────────────────────────────────────────────────────────
#pragma once

#include "core.h"
#include "msx-music_reg.h"

//=============================================================================
// DEFINES
//=============================================================================

// Detection result
enum MSXMUS_DETECTION
{
	MSXMUS_NOTFOUND = 0, // No MSX-Music found
	MSXMUS_INTERNAL = 1, // Internal MSX-Music device found
	MSXMUS_EXTERNAL = 2, // External MSX-Music device found (FM-PAC)
};

//=============================================================================
// PROTOTYPE
//=============================================================================

// Function: MSXMusic_Initialize
// Initialize MSX-Music module
void MSXMusic_Initialize();

// Function: MSXMusic_Detect
// Search for MSX-Music (YM2413) chip
u8 MSXMusic_Detect();

// Function: MSXMusic_SetRegister
// Set MSX-Music register value
void MSXMusic_SetRegister(u8 reg, u8 value);

// Function: MSXMusic_GetRegister
// Get MSX-Music register value
u8 MSXMusic_GetRegister(u8 reg);

// Function: MSXMusic_Mute
// Mute MSX-Music sound
void MSXMusic_Mute();
