---
sidebar_position: 1
description: A comprehensive guide to understanding Byte Pair Encoding (BPE), a subword tokenization algorithm widely used in modern NLP models.
---

# Byte Pair Encoding (BPE)

## Introduction

Byte Pair Encoding (BPE) is a subword tokenization algorithm that has become a fundamental component in modern Natural Language Processing (NLP). Originally developed for data compression, BPE was later adapted for use in machine translation and has since become a standard preprocessing step for many state-of-the-art language models.

## How BPE Works

The BPE algorithm works by iteratively merging the most frequent pair of adjacent symbols (bytes or characters) in a text corpus. Here's a step-by-step breakdown:

1. **Initialize Vocabulary**: Start with a vocabulary of individual characters and their frequencies.
2. **Count Pairs**: Count the frequency of all adjacent symbol pairs in the vocabulary.
3. **Merge Most Frequent Pair**: Replace the most frequent pair with a new symbol.
4. **Update Vocabulary**: Add the new symbol to the vocabulary.
5. **Repeat**: Continue the process until a desired vocabulary size is reached or no more merges are possible.

### Example

Consider the following text with word frequencies:

```
"low" (5), "lower" (2), "newest" (6), "widest" (3)
```

1. Initial vocabulary: `{l, o, w, e, r, n, s, i, d, t}`
2. After first merge (most frequent pair 'e' and 's'): `{l, o, w, e, r, n, es, i, d, t}`
3. Continue merging until desired vocabulary size is reached.

## Implementation in NLP

BPE is particularly useful for NLP because it:

- Handles out-of-vocabulary words by breaking them into known subword units
- Reduces vocabulary size while maintaining meaningful representations
- Balances between word-level and character-level representations

### Common Implementations

1. **SentencePiece**: Google's implementation that supports both BPE and unigram language model tokenization.
2. **Hugging Face Tokenizers**: Provides BPE implementation along with other tokenization algorithms.
3. **Subword NMT**: The original implementation for neural machine translation.

## Applications

BPE is widely used in:

- Pre-training language models (e.g., GPT, BERT)
- Neural machine translation
- Text generation tasks
- Any NLP task requiring subword tokenization

## Advantages and Limitations

### Advantages

- Handles rare words effectively
- Reduces vocabulary size
- Maintains meaningful subword units
- Language-agnostic

### Limitations

- May split words in unintuitive ways
- Requires preprocessing and training on a corpus
- Fixed vocabulary size must be determined in advance

## Encoding

Use the following prebuilt encodings. For modern models like GPT-4o and GPT-4.1, prefer `o200k_base`. For GPT-4 and GPT-3.5, use `cl100k_base`.

- [o200k_base (modern models: GPT-4o, GPT-4.1, o1, etc.)](https://unpkg.com/gpt-tokenizer/dist/o200k_base.js)
- [cl100k_base (GPT-4, GPT-3.5)](https://unpkg.com/gpt-tokenizer/dist/cl100k_base.js)
- [p50k_base](https://unpkg.com/gpt-tokenizer/dist/p50k_base.js)
- [p50k_edit](https://unpkg.com/gpt-tokenizer/dist/p50k_edit.js)
- [r50k_base](https://unpkg.com/gpt-tokenizer/dist/r50k_base.js)

### ZH-CN Tokens extension

- [Chinese tokenization extension (community)](https://gist.github.com/ctlllll/4451e94f3b2ca415515f3ee369c8c374)

## Code Example

### JavaScript (Node)

```bash
npm install gpt-tokenizer
```

```javascript
import { encode, decode } from "gpt-tokenizer/encoding/o200k_base";

const text = "Hello, 世界!";
const tokens = encode(text);

console.log("token count:", tokens.length);
console.log("tokens:", tokens);
console.log("decoded:", decode(tokens));

// If you need GPT-4/3.5 compatibility instead:
// import { encode as encodeCl100k } from 'gpt-tokenizer/encoding/cl100k_base';
// const tokensCl = encodeCl100k(text);
```

### Python

```bash
pip install tiktoken
```

```python
import tiktoken

enc = tiktoken.get_encoding("o200k_base")
text = "Hello, 世界!"
tokens = enc.encode(text)

print("token count:", len(tokens))
print("tokens:", tokens)
print("decoded:", enc.decode(tokens))

# For GPT-4/3.5 models:
# enc = tiktoken.get_encoding("cl100k_base")
```

> Tip: Token counts are model-dependent. Always match the encoding to your target model.

## Conclusion

BPE provides a practical compromise between character- and word-level tokenization, enabling robust handling of rare and novel words while keeping the vocabulary manageable for efficient training and inference.

## Further Reading

1. [OpenAI TikToken](https://github.com/openai/tiktoken/tree/main)
2. [Tiktokenizer](https://github.com/dqbd/tiktokenizer)
3. [Hugging Face Tokenizers Documentation](https://huggingface.co/docs/tokenizers/)
4. [GPT Tokenizer](https://github.com/niieani/gpt-tokenizer)
5. [How LLMs See the World](https://blog.bytebytego.com/p/how-llms-see-the-world)

---

_Last updated: August 2025_
