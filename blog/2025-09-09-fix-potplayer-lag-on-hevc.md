---
title: "How to fix lag on HEVC/H.265 Files with PotPlayer"
slug: potplayer-lag-on-hevc
authors:
  - name: Tom Lam
    title: Software Developer
    url: https://github.com/ShigureDD
    image_url: https://github.com/ShigureDD.png
tags:
  - PotPlayer
  - hevc
  - decoding
  - lag
  - lavfilters
date: 2025-09-09 GMT+8
description: "See how to fix lag onHEVC/H.265 files with PotPlayer."
---

## 1. Download [OpenCodec](https://potplayer.org/en/opencodec.html)

![2025-09-09-fix-potplayer-lag-on-hevc](../static/img/blog/2025-09-09-fix-potplayer-lag-on-hevc.png)

## 2. Install OpenCodec

![2025-09-09-open-codec-for-potplayer](../static/img/blog/2025-09-09-open-codec-for-potplayer.png)

## 2.1 LavFilters

Download [LavFilters](https://github.com/nevcairiel/lavfilters/releases)

Add LavFilters in PotPlayer
![2025-09-09-add-lavfilters](../static/img/blog/2025-09-09-potplayer-add-lavfilter.png)

## 3. Change PotPlayer Decoder

Open PotPlayer > Settings > Performance > Filters control > Video Decoder
![2025-09-09-change-decoder](../static/img/blog/2025-09-09-change-decoder.png)
Reference:\
[OpenCodec for PotPlayer](https://potplayer.org/en/opencodec.html)\
[Lavfilters](https://github.com/nevcairiel/lavfilters/releases)\
[how-to-play-hevc-h265-files-with-potplayer](https://www.free-codecs.com/guides/how-to-play-hevc-h265-files-with-potplayer.htm)
