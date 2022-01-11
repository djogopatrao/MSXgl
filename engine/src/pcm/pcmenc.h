// __________________________
// ██▀█▀██▀▀▀█▀▀█▀█  ▄▄▄ ▄▄  │  ▄▄▄   ▄▄   ▄ ▄ ▄▄▄▄ ▄▄▄   ▄▄ 
// █  ▄ █▄ ▀██▄ ▀▄█ ██   ██  │  ██▄▀ ██ ▀ ██▀█ ██▄  ██▀█ ██ ▀
// █  █ █▀▀ ▄█  █ █ ▀█▄█ ██▄▄│  ██   ▀█▄▀ ██ █ ██▄▄ ██ █ ▀█▄▀
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀──────────┘  
//  PCM-Encoder replayer
//─────────────────────────────────────────────────────────────────────────────
#include "psg.h"

// Unique PCM-Encoder player
#if (PCMENC_FREQ == PCMENC_8K)
	#define PCM_Play PCM_Play_8K
#elif (PCMENC_FREQ == PCMENC_11K)
	#define PCM_Play PCM_Play_11K
#elif (PCMENC_FREQ == PCMENC_22K)
	#define PCM_Play PCM_Play_22K
#elif (PCMENC_FREQ == PCMENC_44K)
	#define PCM_Play PCM_Play_44K
#endif


#if (PCMENC_FREQ & PCMENC_8K)
/// Play a pcmenc sound at 8 KHz (synchronously)
void PCM_Play_8K(u16 addr, u16 len);
#endif

#if (PCMENC_FREQ & PCMENC_11K)
/// Play a pcmenc sound at 11 KHz (synchronously)
void PCM_Play_11K(u16 addr, u16 len);
#endif

#if (PCMENC_FREQ & PCMENC_22K)
/// Play a pcmenc sound at 22 KHz (synchronously)
void PCM_Play_22K(u16 addr, u16 len);
#endif

#if (PCMENC_FREQ & PCMENC_44K)
/// Play a pcmenc sound at 44 KHz (synchronously)
void PCM_Play_44K(u16 addr, u16 len);
#endif