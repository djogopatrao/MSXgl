; Autogenerated Arkos LW player for MSX-GL library 
; On 11/04/2022 et 23:25:30, 22    
PLY_LW_STOP_SOUNDS = .+1
PLY_LW_REGISTERS_OFFSETVOLUME = .+1
PLY_LW_DATA_OFFSETTRANSPOSITION = .+1
PLY_LW_SOUNDEFFECTDATA_OFFSETINVERTEDVOLUME = .+2
PLY_LW_DATA_OFFSETBASENOTE = .+2
PLY_LW_START:
_PLY_LW_INITSOUNDEFFECTS::
PLY_LW_INITSOUNDEFFECTS:
PLY_LW_USE_HOOKS:
PLY_LW_DATA_OFFSETWAITEMPTYCELL:
	ld (PLY_LW_DATA_OFFSETPTTRACK), hl
PLY_LW_DATA_OFFSETINSTRUMENTCURRENTSTEP:
PLY_LW_SOUNDEFFECTDATA_OFFSETCURRENTSTEP:
	ret 
_PLY_LW_PLAYSOUNDEFFECT::
PLY_LW_PLAYSOUNDEFFECT:
PLY_LW_SOUNDEFFECTDATA_OFFSETSPEED:
PLY_LW_DATA_OFFSETINSTRUMENTSPEED:
	dec a
PLY_LW_DATA_OFFSETPTTRACK = .+1
PLY_LW_SE_PTSOUNDEFFECTTABLE:
PLY_LW_DATA_OFFSETTRACKINVERTEDVOLUME:
PLY_LW_REGISTERS_OFFSETSOFTWAREPERIODLSB:
	ld hl, #0x0
PLY_LW_DATA_OFFSETPTINSTRUMENT:
PLY_LW_CHANNEL_SOUNDEFFECTDATASIZE:
	ld e, a
PLY_LW_DATA_OFFSETPTBASEINSTRUMENT = .+1
PLY_LW_REGISTERS_OFFSETSOFTWAREPERIODMSB:
	ld d, #0x0
    add hl, de
PLY_LW_DATA_OFFSETISPITCHUPDOWNUSED:
	add hl, de
PLY_LW_DATA_OFFSETTRACKPITCHDECIMAL:
	ld e, (hl)
PLY_LW_DATA_OFFSETTRACKPITCHSPEED:
	inc hl
    ld d, (hl)
PLY_LW_DATA_OFFSETTRACKPITCHINTEGER:
	ld a, (de)
    inc de
PLY_LW_DATA_OFFSETISARPEGGIOTABLEUSED:
	ex af, af'
PLY_LW_DATA_OFFSETPTARPEGGIOOFFSET:
	ld a, b
PLY_LW_DATA_OFFSETPTARPEGGIOTABLE = .+1
PLY_LW_DATA_OFFSETCURRENTARPEGGIOVALUE:
	ld hl, #PLY_LW_CHANNEL1_SOUNDEFFECTDATA
PLY_LW_DATA_OFFSETPTPITCHOFFSET = .+1
PLY_LW_DATA_OFFSETISPITCHTABLEUSED:
	ld b, #0x0
PLY_LW_DATA_OFFSETCURRENTPITCHTABLEVALUE:
	sla c
PLY_LW_DATA_OFFSETPTPITCHTABLE:
	sla c
PLY_LW_TRACK1_DATA_SIZE:
	sla c
    add hl, bc
    ld (hl), e
    inc hl
    ld (hl), d
    inc hl
    ld (hl), a
    inc hl
    ld (hl), #0x0
    inc hl
    ex af, af'
    ld (hl), a
    ret 
_PLY_LW_STOPSOUNDEFFECTFROMCHANNEL::
PLY_LW_STOPSOUNDEFFECTFROMCHANNEL:
	add a, a
    add a, a
    add a, a
    ld e, a
    ld d, #0x0
    ld hl, #PLY_LW_CHANNEL1_SOUNDEFFECTDATA
    add hl, de
    ld (hl), d
    inc hl
    ld (hl), d
    ret 
PLY_LW_PLAYSOUNDEFFECTSSTREAM:
	rla 
    rla 
    ld ix, #PLY_LW_CHANNEL1_SOUNDEFFECTDATA
    ld iy, #PLY_LW_TRACK3_DATA_END
    ld c, a
    call PLY_LW_PSES_PLAY
    ld ix, #PLY_LW_CHANNEL2_SOUNDEFFECTDATA
    ld iy, #PLY_LW_TRACK2_REGISTERS
    srl c
    call PLY_LW_PSES_PLAY
    ld ix, #PLY_LW_CHANNEL3_SOUNDEFFECTDATA
    ld iy, #PLY_LW_TRACK3_REGISTERS
    scf
    rr c
    call PLY_LW_PSES_PLAY
    ld a, c
    ld (PLY_LW_MIXERREGISTER), a
    ret 
PLY_LW_PSES_PLAY:
	ld l, +0(ix)
    ld h, +1(ix)
    ld a, l
    or h
    ret z
PLY_LW_PSES_READFIRSTBYTE:
	ld a, (hl)
    inc hl
    ld b, a
    rra 
    jr c, PLY_LW_PSES_SOFTWAREORSOFTWAREANDHARDWARE
    rra 
    jr c, PLY_LW_PSES_HARDWAREONLY
    rra 
    jr c, PLY_LW_PSES_S_ENDORLOOP
    call PLY_LW_PSES_MANAGEVOLUMEFROMA_FILTER4BITS
    rl b
    call PLY_LW_PSES_READNOISEIFNEEDEDANDOPENORCLOSENOISECHANNEL
    set 2, c
    jr PLY_LW_PSES_SAVEPOINTERANDEXIT
PLY_LW_PSES_S_ENDORLOOP:
	rra 
    jr c, PLY_LW_PSES_S_LOOP
    xor a
    ld +0(ix), a
    ld +1(ix), a
    ret 
PLY_LW_PSES_S_LOOP:
	ld a, (hl)
    inc hl
    ld h, (hl)
    ld l, a
    jr PLY_LW_PSES_READFIRSTBYTE
PLY_LW_PSES_SAVEPOINTERANDEXIT:
	ld a, +3(ix)
    cp +4(ix)
    jr c, PLY_LW_PSES_NOTREACHED
    ld +3(ix), #0x0
    .db 0xdd
    .db 0x75
    .db 0x0
    .db 0xdd
    .db 0x74
    .db 0x1
    ret 
PLY_LW_PSES_NOTREACHED:
	inc +3(ix)
    ret 
PLY_LW_PSES_HARDWAREONLY:
	call PLY_LW_PSES_SHARED_READRETRIGHARDWAREENVPERIODNOISE
    set 2, c
    jr PLY_LW_PSES_SAVEPOINTERANDEXIT
PLY_LW_PSES_SOFTWAREORSOFTWAREANDHARDWARE:
	rra 
    jr c, PLY_LW_PSES_SOFTWAREANDHARDWARE
    call PLY_LW_PSES_MANAGEVOLUMEFROMA_FILTER4BITS
    rl b
    call PLY_LW_PSES_READNOISEIFNEEDEDANDOPENORCLOSENOISECHANNEL
    res 2, c
    call PLY_LW_PSES_READSOFTWAREPERIOD
    jr PLY_LW_PSES_SAVEPOINTERANDEXIT
PLY_LW_PSES_SOFTWAREANDHARDWARE:
	call PLY_LW_PSES_SHARED_READRETRIGHARDWAREENVPERIODNOISE
    call PLY_LW_PSES_READSOFTWAREPERIOD
    res 2, c
    jr PLY_LW_PSES_SAVEPOINTERANDEXIT
PLY_LW_PSES_SHARED_READRETRIGHARDWAREENVPERIODNOISE:
	rra 
    jr nc, PLY_LW_PSES_H_AFTERRETRIG
    ld d, a
    ld a, #0xff
    ld (PLY_LW_SETREG13OLD+1), a
    ld a, d
PLY_LW_PSES_H_AFTERRETRIG:
	and #0x7
    add a, #0x8
    ld (PLY_LW_SENDPSGREGISTERR13+1), a
    rl b
    call PLY_LW_PSES_READNOISEIFNEEDEDANDOPENORCLOSENOISECHANNEL
    call PLY_LW_PSES_READHARDWAREPERIOD
    ld a, #0x10
    jp PLY_LW_PSES_MANAGEVOLUMEFROMA_HARD
PLY_LW_PSES_READNOISEIFNEEDEDANDOPENORCLOSENOISECHANNEL:
	jr c, PLY_LW_PSES_READNOISEANDOPENNOISECHANNEL_OPENNOISE
    set 5, c
    ret 
PLY_LW_PSES_READNOISEANDOPENNOISECHANNEL_OPENNOISE:
	ld a, (hl)
    ld (PLY_LW_NOISEREGISTER), a
    inc hl
    res 5, c
    ret 
PLY_LW_PSES_READHARDWAREPERIOD:
	ld a, (hl)
    ld (PLY_LW_REG11), a
    inc hl
    ld a, (hl)
    ld (PLY_LW_REG12), a
    inc hl
    ret 
PLY_LW_PSES_READSOFTWAREPERIOD:
	ld a, (hl)
    ld +5(iy), a
    inc hl
    ld a, (hl)
    ld +9(iy), a
    inc hl
    ret 
PLY_LW_PSES_MANAGEVOLUMEFROMA_FILTER4BITS:
	and #0xf
PLY_LW_PSES_MANAGEVOLUMEFROMA_HARD:
	sub +2(ix)
    jr nc, PLY_LW_PSES_MVFA_NOOVERFLOW
    xor a
PLY_LW_PSES_MVFA_NOOVERFLOW:
	ld +1(iy), a
    ret 
PLY_LW_CHANNEL1_SOUNDEFFECTDATA:
	.dw 0x0
PLY_LW_CHANNEL1_SOUNDEFFECTINVERTEDVOLUME:
	.db 0x0
PLY_LW_CHANNEL1_SOUNDEFFECTCURRENTSTEP:
	.db 0x0
PLY_LW_CHANNEL1_SOUNDEFFECTSPEED:
	.db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
PLY_LW_CHANNEL2_SOUNDEFFECTDATA:
	.db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
PLY_LW_CHANNEL3_SOUNDEFFECTDATA:
	.db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
_PLY_LW_INIT::
PLY_LW_INIT:
	ld de, #0x5
    add hl, de
    ld de, #PLY_LW_READLINE+1
    ldi
    ldi
    ld de, #PLY_LW_PTARPEGGIOS+1
    ldi
    ldi
    ld de, #PLY_LW_PTPITCHES+1
    ldi
    ldi
    ld e, a
    ld d, #0x0
    add hl, de
    add hl, de
    ld e, (hl)
    inc hl
    ld d, (hl)
    ld a, (de)
    inc de
    ld (PLY_LW_LINKER+1), de
    ld (PLY_LW_SPEED+1), a
    dec a
    ld (PLY_LW_TICKCOUNTER+1), a
    xor a
    ld (PLY_LW_PATTERNREMAININGHEIGHT+1), a
    ld hl, #PLY_LW_TRACK1_DATA
    ld de, #PLY_LW_TRACK1_TRANSPOSITION
    ld bc, #0x1c
    ld (hl), #0x0
    ldir
    ld hl, (PLY_LW_READLINE+1)
    ld e, (hl)
    inc hl
    ld d, (hl)
    inc de
    ld (PLY_LW_TRACK1_PTINSTRUMENT), de
    ld (PLY_LW_TRACK2_PTINSTRUMENT), de
    ld (PLY_LW_TRACK3_PTINSTRUMENT), de
    ret 
_PLY_LW_STOP::
PLY_LW_STOP:
	ld (PLY_LW_SENDPSGREGISTEREND+1), sp
    xor a
    ld (PLY_LW_TRACK1_VOLUME), a
    ld (PLY_LW_TRACK2_VOLUME), a
    ld (PLY_LW_TRACK3_VOLUME), a
    ld a, #0xbf
    ld (PLY_LW_MIXERREGISTER), a
    jp PLY_LW_SENDPSG
_PLY_LW_PLAY::
PLY_LW_PLAY:
	ld (PLY_LW_SENDPSGREGISTEREND+1), sp
PLY_LW_TICKCOUNTER:
	ld a, #0x0
    inc a
PLY_LW_SPEED:
	cp #0x1
    jp nz, PLY_LW_TICKCOUNTERMANAGED
PLY_LW_PATTERNREMAININGHEIGHT:
	ld a, #0x0
    sub #0x1
    jr c, PLY_LW_LINKER
    ld (PLY_LW_PATTERNREMAININGHEIGHT+1), a
    jr PLY_LW_READLINE
PLY_LW_LINKER:
	ld hl, #0x0
PLY_LW_LINKERPOSTPT:
	xor a
    ld (PLY_LW_TRACK1_DATA), a
    ld (PLY_LW_TRACK1_DATA_END), a
    ld (PLY_LW_TRACK2_DATA_END), a
    ld a, (hl)
    inc hl
    rra 
    jr c, PLY_LW_LINKERNOTENDOFSONGOK
    ld a, (hl)
    inc hl
    ld h, (hl)
    ld l, a
    jr PLY_LW_LINKERPOSTPT
PLY_LW_LINKERNOTENDOFSONGOK:
	rra 
    ld b, a
    jr nc, PLY_LW_LINKERAFTERSPEED
    ld a, (hl)
    inc hl
    ld (PLY_LW_SPEED+1), a
PLY_LW_LINKERAFTERSPEED:
	rr b
    jr nc, PLY_LW_LINKERUSEPREVIOUSHEIGHT
    ld a, (hl)
    inc hl
    ld (PLY_LW_LINKERUSEPREVIOUSHEIGHT+1), a
    jr PLY_LW_LINKERSETREMAININGHEIGHT
PLY_LW_LINKERUSEPREVIOUSHEIGHT:
PLY_LW_LINKERPREVIOUSREMAININGHEIGHT:
	ld a, #0x0
PLY_LW_LINKERSETREMAININGHEIGHT:
	ld (PLY_LW_PATTERNREMAININGHEIGHT+1), a
    rr b
    jr nc, PLY_LW_LINKERAFTERNEWTRANSPOSITIONS
    ld de, #PLY_LW_TRACK1_TRANSPOSITION
    ldi
    ld de, #PLY_LW_TRACK2_TRANSPOSITION
    ldi
    ld de, #PLY_LW_TRACK3_TRANSPOSITION
    ldi
PLY_LW_LINKERAFTERNEWTRANSPOSITIONS:
	ld de, #PLY_LW_TRACK1_PTTRACK
    ldi
    ldi
    ld de, #PLY_LW_TRACK2_PTTRACK
    ldi
    ldi
    ld de, #PLY_LW_TRACK3_PTTRACK
    ldi
    ldi
    ld (PLY_LW_LINKER+1), hl
PLY_LW_READLINE:
PLY_LW_PTINSTRUMENTS:
	ld de, #0x0
    exx
    ld ix, #PLY_LW_TRACK1_DATA
    call PLY_LW_READTRACK
    ld ix, #PLY_LW_TRACK1_DATA_END
    call PLY_LW_READTRACK
    ld ix, #PLY_LW_TRACK2_DATA_END
    call PLY_LW_READTRACK
    xor a
PLY_LW_TICKCOUNTERMANAGED:
	ld (PLY_LW_TICKCOUNTER+1), a
    ld de, #PLY_LW_PERIODTABLE
    exx
    ld c, #0xe0
    ld ix, #PLY_LW_TRACK1_DATA
    call PLY_LW_MANAGEEFFECTS
    ld iy, #PLY_LW_TRACK3_DATA_END
    call PLY_LW_PLAYSOUNDSTREAM
    srl c
    ld ix, #PLY_LW_TRACK1_DATA_END
    call PLY_LW_MANAGEEFFECTS
    ld iy, #PLY_LW_TRACK2_REGISTERS
    call PLY_LW_PLAYSOUNDSTREAM
    scf
    rr c
    ld ix, #PLY_LW_TRACK2_DATA_END
    call PLY_LW_MANAGEEFFECTS
    ld iy, #PLY_LW_TRACK3_REGISTERS
    call PLY_LW_PLAYSOUNDSTREAM
    ld a, c
    call PLY_LW_PLAYSOUNDEFFECTSSTREAM
PLY_LW_SENDPSG:
	ld sp, #PLY_LW_TRACK3_DATA_END
PLY_LW_SENDPSGREGISTER:
	pop hl
PLY_LW_SENDPSGREGISTERAFTERPOP:
	ld a, l
    out (0xa0), a
    ld a, h
    out (0xa1), a
    ret 
PLY_LW_SENDPSGREGISTERR13:
PLY_LW_SETREG13:
	ld a, #0x0
PLY_LW_SETREG13OLD:
	cp #0x0
    jr z, PLY_LW_SENDPSGREGISTEREND
    ld (PLY_LW_SETREG13OLD+1), a
    ld h, a
    ld l, #0xd
    ret 
PLY_LW_SENDPSGREGISTEREND:
PLY_LW_SAVESP:
	ld sp, #0x0
    ret 
PLY_LW_READTRACK:
	ld a, +0(ix)
    sub #0x1
    jr c, PLY_LW_RT_NOEMPTYCELL
    ld +0(ix), a
    ret 
PLY_LW_RT_NOEMPTYCELL:
	ld l, +6(ix)
    ld h, +6(ix)
    ld a, (hl)
    inc hl
    ld b, a
    and #0x3f
    sub #0x3c
    jr c, PLY_LW_RT_NOTEMAYBEEFFECT
    jr z, PLY_LW_RT_READEFFECT
    dec a
    jr z, PLY_LW_RT_WAITLONG
    dec a
    jr z, PLY_LW_RT_WAITSHORT
    ld a, (hl)
    inc hl
    jr PLY_LW_RT_NMB_AFTEROCTAVECOMPENSATION
PLY_LW_RT_NOTEMAYBEEFFECT:
	add a, #0x54
PLY_LW_RT_NMB_AFTEROCTAVECOMPENSATION:
	add a, +1(ix)
    ld +2(ix), a
    rl b
    jr c, PLY_LW_RT_NME_NEWINSTRUMENT
    ld a, +10(ix)
    ld +8(ix), a
    ld a, +10(ix)
    ld +8(ix), a
    jr PLY_LW_RT_NME_AFTERINSTRUMENT
PLY_LW_RT_NME_NEWINSTRUMENT:
	ld a, (hl)
    inc hl
    exx
    ld l, a
    ld h, #0x0
    add hl, de
    ld c, (hl)
    inc hl
    ld b, (hl)
    ld a, (bc)
    ld +4(ix), a
    inc bc
    .db 0xdd
    .db 0x71
    .db 0x8
    .db 0xdd
    .db 0x70
    .db 0x8
    .db 0xdd
    .db 0x71
    .db 0xa
    .db 0xdd
    .db 0x70
    .db 0xa
    exx
PLY_LW_RT_NME_AFTERINSTRUMENT:
	ld +3(ix), #0x0
    xor a
    ld +12(ix), a
    ld +16(ix), a
    ld +16(ix), a
    ld +19(ix), a
    ld +24(ix), a
    rl b
    jr nc, PLY_LW_RT_CELLREAD
PLY_LW_RT_READEFFECT:
	ld a, (hl)
    inc hl
    ld b, a
    exx
    rra 
    rra 
    rra 
    rra 
    and #0xe
    ld iy, #PLY_LW_EFFECTTABLE
    ld c, a
    ld b, #0x0
    add iy, bc
    exx
    jp (iy)
PLY_LW_RT_WAITLONG:
	ld a, (hl)
    inc hl
    ld +0(ix), a
    jr PLY_LW_RT_CELLREAD
PLY_LW_RT_WAITSHORT:
	ld a, b
    rla 
    rla 
    rla 
    and #0x3
    ld +0(ix), a
PLY_LW_RT_CELLREAD:
	.db 0xdd
    .db 0x75
    .db 0x6
    .db 0xdd
    .db 0x74
    .db 0x6
    ret 
PLY_LW_MANAGEEFFECTS:
	ld a, +12(ix)
    or a
    jr z, PLY_LW_ME_PITCHUPDOWNFINISHED
    ld l, +13(ix)
    ld h, +16(ix)
    ld e, +14(ix)
    ld d, +14(ix)
    ld a, +16(ix)
    bit 7, d
    jr nz, PLY_LW_ME_PITCHUPDOWN_NEGATIVESPEED
PLY_LW_ME_PITCHUPDOWN_POSITIVESPEED:
	add hl, de
    adc a, #0x0
    jr PLY_LW_ME_PITCHUPDOWN_SAVE
PLY_LW_ME_PITCHUPDOWN_NEGATIVESPEED:
	res 7, d
    or a
    sbc hl, de
    sbc a, #0x0
PLY_LW_ME_PITCHUPDOWN_SAVE:
	ld +16(ix), a
    .db 0xdd
    .db 0x75
    .db 0xd
    .db 0xdd
    .db 0x74
    .db 0x10
PLY_LW_ME_PITCHUPDOWNFINISHED:
	ld a, +18(ix)
    or a
    jr z, PLY_LW_ME_ARPEGGIOTABLEFINISHED
    ld e, +21(ix)
    ld d, +21(ix)
    ld l, +19(ix)
PLY_LW_ME_ARPEGGIOTABLEREADAGAIN:
	ld h, #0x0
    add hl, de
    ld a, (hl)
    sra a
    jr nc, PLY_LW_ME_ARPEGGIOTABLEENDNOTREACHED
    ld l, a
    ld +19(ix), a
    jr PLY_LW_ME_ARPEGGIOTABLEREADAGAIN
PLY_LW_ME_ARPEGGIOTABLEENDNOTREACHED:
	ld +20(ix), a
    inc +19(ix)
PLY_LW_ME_ARPEGGIOTABLEFINISHED:
	ld a, +23(ix)
    or a
    ret z
    ld e, +27(ix)
    ld d, +27(ix)
    ld l, +24(ix)
PLY_LW_ME_PITCHTABLEREADAGAIN:
	ld h, #0x0
    add hl, de
    ld a, (hl)
    sra a
    jr nc, PLY_LW_ME_PITCHTABLEENDNOTREACHED
    ld l, a
    ld +24(ix), a
    jr PLY_LW_ME_PITCHTABLEREADAGAIN
PLY_LW_ME_PITCHTABLEENDNOTREACHED:
	ld h, #0x0
    or a
    jp p, PLY_LW_ME_PITCHTABLEENDNOTREACHED_POSITIVE
    dec h
PLY_LW_ME_PITCHTABLEENDNOTREACHED_POSITIVE:
	ld +25(ix), a
    .db 0xdd
    .db 0x74
    .db 0x19
    inc +24(ix)
    ret 
PLY_LW_PLAYSOUNDSTREAM:
	ld l, +8(ix)
    ld h, +8(ix)
PLY_LW_PSS_READFIRSTBYTE:
	ld a, (hl)
    ld b, a
    inc hl
    rra 
    jr c, PLY_LW_PSS_SOFTORSOFTANDHARD
    rra 
    jr c, PLY_LW_PSS_SOFTWARETOHARDWARE
    rra 
    jr nc, PLY_LW_PSS_NSNH_NOTENDOFSOUND
    ld a, (hl)
    inc hl
    ld h, (hl)
    ld l, a
    .db 0xdd
    .db 0x75
    .db 0x8
    .db 0xdd
    .db 0x74
    .db 0x8
    jr PLY_LW_PSS_READFIRSTBYTE
PLY_LW_PSS_NSNH_NOTENDOFSOUND:
	set 2, c
    call PLY_LW_PSS_SHARED_ADJUSTVOLUME
    ld +1(iy), a
    rl b
    call c, PLY_LW_PSS_READNOISE
    jr PLY_LW_PSS_SHARED_STOREINSTRUMENTPOINTER
PLY_LW_PSS_SOFTORSOFTANDHARD:
	rra 
    jr c, PLY_LW_PSS_SOFTANDHARD
    call PLY_LW_PSS_SHARED_ADJUSTVOLUME
    ld +1(iy), a
    ld d, #0x0
    rl b
    jr nc, PLY_LW_PSS_S_AFTERARPANDORNOISE
    ld a, (hl)
    inc hl
    sra a
    ld d, a
    call c, PLY_LW_PSS_READNOISE
PLY_LW_PSS_S_AFTERARPANDORNOISE:
	ld a, d
    call PLY_LW_CALCULATEPERIODFORBASENOTE
    rl b
    call c, PLY_LW_READPITCHANDADDTOPERIOD
    exx
    ld +5(iy), l
    ld +9(iy), h
    exx
PLY_LW_PSS_SHARED_STOREINSTRUMENTPOINTER:
	ld a, +3(ix)
    cp +4(ix)
    jr z, PLY_LW_PSS_S_SPEEDREACHED
    inc +3(ix)
    ret 
PLY_LW_PSS_S_SPEEDREACHED:
	.db 0xdd
    .db 0x75
    .db 0x8
    .db 0xdd
    .db 0x74
    .db 0x8
    ld +3(ix), #0x0
    ret 
PLY_LW_PSS_SOFTANDHARD:
	call PLY_LW_PSS_SHARED_READENVBITPITCHARP_SOFTPERIOD_HARDVOL_HARDENV
    ld a, (hl)
    ld (PLY_LW_REG11), a
    inc hl
    ld a, (hl)
    ld (PLY_LW_REG12), a
    inc hl
    jr PLY_LW_PSS_SHARED_STOREINSTRUMENTPOINTER
PLY_LW_PSS_SOFTWARETOHARDWARE:
	call PLY_LW_PSS_SHARED_READENVBITPITCHARP_SOFTPERIOD_HARDVOL_HARDENV
    ld a, b
    rra 
    rra 
    and #0x1c
    ld (PLY_LW_PSS_STH_JUMP+1), a
    exx
PLY_LW_PSS_STH_JUMP:
	jr PLY_LW_PSS_STH_JUMP+2
    srl h
    rr l
    srl h
    rr l
    srl h
    rr l
    srl h
    rr l
    srl h
    rr l
    srl h
    rr l
    srl h
    rr l
    jr nc, PLY_LW_PSS_STH_RATIOEND
    inc hl
PLY_LW_PSS_STH_RATIOEND:
	ld a, l
    ld (PLY_LW_REG11), a
    ld a, h
    ld (PLY_LW_REG12), a
    exx
    jr PLY_LW_PSS_SHARED_STOREINSTRUMENTPOINTER
PLY_LW_PSS_SHARED_READENVBITPITCHARP_SOFTPERIOD_HARDVOL_HARDENV:
	and #0x2
    add a, #0x8
    ld (PLY_LW_SENDPSGREGISTERR13+1), a
    ld +1(iy), #0x10
    xor a
    bit 7, b
    jr z, PLY_LW_PSS_SHARED_RENVBAP_AFTERARPEGGIO
    ld a, (hl)
    inc hl
PLY_LW_PSS_SHARED_RENVBAP_AFTERARPEGGIO:
	call PLY_LW_CALCULATEPERIODFORBASENOTE
    bit 2, b
    call nz, PLY_LW_READPITCHANDADDTOPERIOD
    exx
    ld +5(iy), l
    ld +9(iy), h
    exx
    ret 
PLY_LW_PSS_SHARED_ADJUSTVOLUME:
	and #0xf
    sub +5(ix)
    ret nc
    xor a
    ret 
PLY_LW_PSS_READNOISE:
	ld a, (hl)
    inc hl
    ld (PLY_LW_NOISEREGISTER), a
    res 5, c
    ret 
PLY_LW_CALCULATEPERIODFORBASENOTE:
	exx
    ld h, #0x0
    add a, +2(ix)
    add a, +20(ix)
    ld l, a
    sla l
    add hl, de
    ld a, (hl)
    inc hl
    ld h, (hl)
    ld l, a
    ld a, +23(ix)
    or a
    jr z, PLY_LW_CALCULATEPERIODFORBASENOTE_NOPITCHTABLE
    ld c, +25(ix)
    ld b, +25(ix)
    add hl, bc
PLY_LW_CALCULATEPERIODFORBASENOTE_NOPITCHTABLE:
	ld c, +16(ix)
    ld b, +16(ix)
    add hl, bc
    exx
    ret 
PLY_LW_READPITCHANDADDTOPERIOD:
	ld a, (hl)
    inc hl
    exx
    ld c, a
    exx
    ld a, (hl)
    inc hl
    exx
    ld b, a
    add hl, bc
    exx
    ret 
PLY_LW_EFFECTRESET:
	call PLY_LW_READINVERTEDVOLUMEFROMB
    xor a
    ld +12(ix), a
    ld +18(ix), a
    ld +20(ix), a
    ld +23(ix), a
    jp PLY_LW_RT_CELLREAD
PLY_LW_EFFECTVOLUMEANDPITCHUPDOWN:
	call PLY_LW_READINVERTEDVOLUMEFROMB
    bit 4, b
    jp z, PLY_LW_RT_CELLREAD
PLY_LW_EFFECTPITCHUPDOWN_ACTIVATED:
	ld +12(ix), #0xff
    ld a, (hl)
    inc hl
    ld +14(ix), a
    ld a, (hl)
    inc hl
    ld +14(ix), a
    jp PLY_LW_RT_CELLREAD
PLY_LW_EFFECTTABLE:
	jr PLY_LW_EFFECTRESET
    jr PLY_LW_EFFECTARPEGGIOTABLE
    jr PLY_LW_EFFECTPITCHTABLE
    jr PLY_LW_EFFECTPITCHUPDOWN
    jr PLY_LW_EFFECTVOLUMEANDPITCHUPDOWN
    jr PLY_LW_EFFECTVOLUMEARPEGGIOTABLE
    jr PLY_LW_EFFECTRESETARPEGGIOTABLE
PLY_LW_EFFECTPITCHUPDOWN:
	rr b
    jr c, PLY_LW_EFFECTPITCHUPDOWN_ACTIVATED
    ld +12(ix), #0x0
    jp PLY_LW_RT_CELLREAD
PLY_LW_EFFECTARPEGGIOTABLE:
	ld a, b
    and #0x1f
PLY_LW_EFFECTARPEGGIOTABLE_AFTERMASK:
	ld +18(ix), a
    jr z, PLY_LW_EFFECTARPEGGIOTABLE_STOP
    add a, a
    exx
    ld l, a
    ld h, #0x0
PLY_LW_PTARPEGGIOS:
	ld bc, #0x0
    add hl, bc
    ld a, (hl)
    inc hl
    ld +21(ix), a
    ld a, (hl)
    ld +21(ix), a
    exx
    xor a
    ld +19(ix), a
    jp PLY_LW_RT_CELLREAD
PLY_LW_EFFECTARPEGGIOTABLE_STOP:
	ld +20(ix), a
    jp PLY_LW_RT_CELLREAD
PLY_LW_EFFECTPITCHTABLE:
	ld a, b
    and #0x1f
PLY_LW_EFFECTPITCHTABLE_AFTERMASK:
	ld +23(ix), a
    jp z, PLY_LW_RT_CELLREAD
    add a, a
    exx
    ld l, a
    ld h, #0x0
PLY_LW_PTPITCHES:
	ld bc, #0x0
    add hl, bc
    ld a, (hl)
    inc hl
    ld +27(ix), a
    ld a, (hl)
    inc hl
    ld +27(ix), a
    exx
    xor a
    ld +24(ix), a
    jp PLY_LW_RT_CELLREAD
PLY_LW_EFFECTVOLUMEARPEGGIOTABLE:
	call PLY_LW_READINVERTEDVOLUMEFROMB
    ld a, (hl)
    inc hl
    or a
    jr PLY_LW_EFFECTARPEGGIOTABLE_AFTERMASK
PLY_LW_EFFECTRESETARPEGGIOTABLE:
	call PLY_LW_EFFECTRESET
    ld a, (hl)
    inc hl
    or a
    jp PLY_LW_EFFECTARPEGGIOTABLE_AFTERMASK
PLY_LW_READINVERTEDVOLUMEFROMB:
	ld a, b
    and #0xf
    ld +5(ix), a
    ret 
PLY_LW_TRACK1_DATA:
PLY_LW_TRACK1_WAITEMPTYCELL:
	.db 0x0
PLY_LW_TRACK1_TRANSPOSITION:
	.db 0x0
PLY_LW_TRACK1_BASENOTE:
	.db 0x0
PLY_LW_TRACK1_INSTRUMENTCURRENTSTEP:
	.db 0x0
PLY_LW_TRACK1_INSTRUMENTSPEED:
	.db 0x0
PLY_LW_TRACK1_TRACKINVERTEDVOLUME:
	.db 0x0
PLY_LW_TRACK1_PTTRACK:
	.dw 0x0
PLY_LW_TRACK1_PTINSTRUMENT:
	.dw 0x0
PLY_LW_TRACK1_PTBASEINSTRUMENT:
	.dw 0x0
PLY_LW_TRACK1_ISPITCHUPDOWNUSED:
	.db 0x0
PLY_LW_TRACK1_TRACKPITCHDECIMAL:
	.db 0x0
PLY_LW_TRACK1_TRACKPITCHSPEED:
	.dw 0x0
PLY_LW_TRACK1_TRACKPITCHINTEGER:
	.dw 0x0
PLY_LW_TRACK1_ISARPEGGIOTABLEUSED:
	.db 0x0
PLY_LW_TRACK1_PTARPEGGIOOFFSET:
	.db 0x0
PLY_LW_TRACK1_CURRENTARPEGGIOVALUE:
	.db 0x0
PLY_LW_TRACK1_PTARPEGGIOTABLE:
	.dw 0x0
PLY_LW_TRACK1_ISPITCHTABLEUSED:
	.db 0x0
PLY_LW_TRACK1_PTPITCHOFFSET:
	.db 0x0
PLY_LW_TRACK1_CURRENTPITCHTABLEVALUE:
	.dw 0x0
PLY_LW_TRACK1_PTPITCHTABLE:
	.dw 0x0
PLY_LW_TRACK1_DATA_END:
PLY_LW_TRACK2_DATA:
PLY_LW_TRACK2_WAITEMPTYCELL:
	.db 0x0
PLY_LW_TRACK2_TRANSPOSITION:
	.db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
PLY_LW_TRACK2_PTTRACK:
	.db 0x0
    .db 0x0
PLY_LW_TRACK2_PTINSTRUMENT:
	.db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
PLY_LW_TRACK2_DATA_END:
PLY_LW_TRACK3_DATA:
PLY_LW_TRACK3_WAITEMPTYCELL:
	.db 0x0
PLY_LW_TRACK3_TRANSPOSITION:
	.db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
PLY_LW_TRACK3_PTTRACK:
	.db 0x0
    .db 0x0
PLY_LW_TRACK3_PTINSTRUMENT:
	.db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
    .db 0x0
PLY_LW_TRACK3_DATA_END:
PLY_LW_REGISTERS_RETTABLE:
PLY_LW_TRACK1_REGISTERS:
	.db 0x8
PLY_LW_TRACK1_VOLUME:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTER
    .db 0x0
PLY_LW_TRACK1_SOFTWAREPERIODLSB:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTER
    .db 0x1
PLY_LW_TRACK1_SOFTWAREPERIODMSB:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTER
PLY_LW_TRACK2_REGISTERS:
	.db 0x9
PLY_LW_TRACK2_VOLUME:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTER
    .db 0x2
PLY_LW_TRACK2_SOFTWAREPERIODLSB:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTER
    .db 0x3
PLY_LW_TRACK2_SOFTWAREPERIODMSB:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTER
PLY_LW_TRACK3_REGISTERS:
	.db 0xa
PLY_LW_TRACK3_VOLUME:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTER
    .db 0x4
PLY_LW_TRACK3_SOFTWAREPERIODLSB:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTER
    .db 0x5
PLY_LW_TRACK3_SOFTWAREPERIODMSB:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTER
    .db 0x6
PLY_LW_NOISEREGISTER:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTER
    .db 0x7
PLY_LW_MIXERREGISTER:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTER
    .db 0xb
PLY_LW_REG11:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTER
    .db 0xc
PLY_LW_REG12:
	.db 0x0
    .dw PLY_LW_SENDPSGREGISTERR13
    .dw PLY_LW_SENDPSGREGISTERAFTERPOP
    .dw PLY_LW_SENDPSGREGISTEREND
PLY_LW_PERIODTABLE:
	.dw 0x1a7a
    .dw 0x18fe
    .dw 0x1797
    .dw 0x1644
    .dw 0x1504
    .dw 0x13d6
    .dw 0x12b9
    .dw 0x11ac
    .dw 0x10ae
    .dw 0xfbe
    .dw 0xedc
    .dw 0xe07
    .dw 0xd3d
    .dw 0xc7f
    .dw 0xbcb
    .dw 0xb22
    .dw 0xa82
    .dw 0x9eb
    .dw 0x95d
    .dw 0x8d6
    .dw 0x857
    .dw 0x7df
    .dw 0x76e
    .dw 0x703
    .dw 0x69f
    .dw 0x63f
    .dw 0x5e6
    .dw 0x591
    .dw 0x541
    .dw 0x4f6
    .dw 0x4ae
    .dw 0x46b
    .dw 0x42c
    .dw 0x3f0
    .dw 0x3b7
    .dw 0x382
    .dw 0x34f
    .dw 0x320
    .dw 0x2f3
    .dw 0x2c8
    .dw 0x2a1
    .dw 0x27b
    .dw 0x257
    .dw 0x236
    .dw 0x216
    .dw 0x1f8
    .dw 0x1dc
    .dw 0x1c1
    .dw 0x1a8
    .dw 0x190
    .dw 0x179
    .dw 0x164
    .dw 0x150
    .dw 0x13d
    .dw 0x12c
    .dw 0x11b
    .dw 0x10b
    .dw 0xfc
    .dw 0xee
    .dw 0xe0
    .dw 0xd4
    .dw 0xc8
    .dw 0xbd
    .dw 0xb2
    .dw 0xa8
    .dw 0x9f
    .dw 0x96
    .dw 0x8d
    .dw 0x85
    .dw 0x7e
    .dw 0x77
    .dw 0x70
    .dw 0x6a
    .dw 0x64
    .dw 0x5e
    .dw 0x59
    .dw 0x54
    .dw 0x4f
    .dw 0x4b
    .dw 0x47
    .dw 0x43
    .dw 0x3f
    .dw 0x3b
    .dw 0x38
    .dw 0x35
    .dw 0x32
    .dw 0x2f
    .dw 0x2d
    .dw 0x2a
    .dw 0x28
    .dw 0x25
    .dw 0x23
    .dw 0x21
    .dw 0x1f
    .dw 0x1e
    .dw 0x1c
    .dw 0x1a
    .dw 0x19
    .dw 0x18
    .dw 0x16
    .dw 0x15
    .dw 0x14
    .dw 0x13
    .dw 0x12
    .dw 0x11
    .dw 0x10
    .dw 0xf
    .dw 0xe
    .dw 0xd
    .dw 0xc
    .dw 0xc
    .dw 0xb
    .dw 0xb
    .dw 0xa
    .dw 0x9
    .dw 0x9
    .dw 0x8
    .dw 0x8
    .dw 0x7
    .dw 0x7
    .dw 0x7
    .dw 0x6
    .dw 0x6
    .dw 0x6
    .dw 0x5
    .dw 0x5
    .dw 0x5
    .dw 0x4
