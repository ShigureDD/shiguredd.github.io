---
sidebar_position: 1
description: Prompts Templates on stable diffusion
author: ShigureDD
tags:
  - prompt
  - stable-diffusion

keywords:
  - prompt
  - stable-diffusion
last_update:
  date: 2025/09/01 GMT+8
  author: ShigureDD
---

# Prompts Templates

There are two types of prompts templates:

1. NLP
2. Tags

## NLP Prompt

Example:

```
A girl with long hair running in the forest.
```

## Tags Prompt

- Character
  - common traits : 1 girl
  - character name (optional): saber
    - reference: /(fate)/
  - artist style: @artist_name
  - character details:
    - info: solo , long hair,
    - hair: black hair, brown hair, gradient hair color
    - eyes: blue eyes, green eyes, brown eyes, half eyes closed, gaze
    - emotion: happy, sad, angry
    - face details: wavy_mouth, open_mouth, smile
    - body: slim body, normal body, fat body
    - body details: collarbone, breast, armpits
    - skin : light skin, dark skin, shiny skin, shiny
  - Clothes
    - dress: school uniform, dress, open clothes
    - detail:
      - sleeve: short sleeve, long sleeve
      - pants: short pants, long pants
      - skirt: short skirt, long skirt
      - styles: transparent, see through
  - Action
    - action: walk, run, jump, dance
    - pose: sitting, standing, lying, squeezing, one leg up, kneeling
- Background
  - sky: day, night, sun set
  - glow: glowing, non-glowing
  - light: soft light, hard light
  - details: glowing particles, sparkles
  - weather: sunny, cloudy, rainy
  - location: city, countryside, forest
- Camera
  - angle: top view, side view, front view
  - shot: close shot, medium shot, wide shot
  - body: full body, half body, cowboy shot
- Style
  - style: realistic, cartoon, anime,anime screenshot, pixel art
  - themes: japan styles, western styles, ghibli style, midjourney style
- Quality
  - quality: masterpiece, high quality, absurdres, best quality, very aesthetic, newest, ultra detailed, stunning illustration, high resolution
  - score: score_9, score_8_up, score_7_up

## Tags Prompt + NLP Prompt

Example:

```
A girl with long hair running in the forest, lake|reflection, full body, front view, best quality .
```

## Negative Prompt

Not more than 40 negative prompts is recommended.

<details>
  <summary>Click me</summary>
  ```
  worst quality, low quality, lowres, bad quality, bad hands, text, error, missing fingers, extra digits, fewer digits, cropped, jpeg artifacts, signature, watermark, username, blurry, artist name, old, early, lowres, logo, mutated hands, mammal, anthropomorphism, furry, ambiguous form, feral, semi-Anthro, realistic, photorealistic, 3d, ((nsfw))
  ```
</details>

## Prompts Weight

Classic Weight Adjustment:

parenthesis: (a rainy day) <span class="success">⇡ **10%**</span>

parenthesis: (((((a rainy day))))) <span class="success">⇡ **50%**</span>

square brackets: [a rainy day] <span class="danger">⇣ **10%**</span>

square brackets: [[[[[a rainy day]]]]] <span class="danger">⇣ **50%**</span>

explict weight: (token:1.5) <span class="success">⇡ **160%**</span>

## Pipe

The pipe symbol `|` can be used to separate multiple prompts.

Example:

```
A girl with long hair running in the forest, lake|reflection, full body, front view, best quality .
```

## Reference

[CivitAI Articles - Making Images Great Again Remastered](https://civitai.com/articles/4808/making-images-great-again-remastered)

[CivitAI Articles - Neta Anime Lumina2 Drawing Model Prompt Guide](https://civitai.com/articles/16274/neta-anime-lumina2-drawing-model-prompt-guide)

[CivitAI Articles - Illustrious Prompt Guide Optimized and Complete](https://civitai.com/articles/16016/illustrious-prompt-guide-optimized-and-complete)
