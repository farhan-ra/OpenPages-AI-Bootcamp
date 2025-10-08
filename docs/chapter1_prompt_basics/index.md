# Chapter 1: Prompt Foundations & OpenPages Integration

**Goals:**  
- Understand prompt engineering basics  
- Run a simple PII redaction prompt  
- Integrate a prompt into OpenPages via a button / UI  

---

## 1.1 What Is a Prompt?

A **prompt** is a textual instruction (plus context and variables) you send to a foundation model to elicit desired output.  
A well‑designed prompt includes:

- Context / system instructions  
- Clear task instructions  
- Variable placeholders (e.g. `{{Text}}`)  
- Output format constraints (e.g. JSON schema, headings)  
- Error / fallback handling  

---

## 1.2 PII Redaction Example

We’ll start with a worked prompt: **PII Detection & Redaction**  
You can find the canonical prompt in [`prompts/pii_redaction.json`](../../prompts/pii_redaction.json)

**Prompt Template (excerpt):**

> ```text
> You are a privacy assistant.  
> Task:  
> 1. Identify any Personally Identifiable Information (PII) in the input text.  
> 2. Provide a redacted version of the text (replace PII with “[REDACTED]”).  
> 3. Return output in **JSON** format with fields:  
>    - `pii_identified` (list of strings)  
>    - `redacted_text` (string)  
>  
> Input:  
> {{Text}}  
>  
> Output:  
> ```json
> {
>   "pii_identified": [...],
>   "redacted_text": "..."
> }
> ```
> ```  

You can test this prompt in your prompt playground (e.g. via watsonx prompt client), feeding an input text.

**Sample input / output:**

- Input (in `examples/inputs/example_text_pii.txt`)  
- Expected output in `examples/outputs/example_pii_redacted.json`  

---

## 1.3 Lab: PII Redaction

Goal: wire up the prompt, run it, and integrate into OpenPages sandbox.

1. Copy the prompt template from `prompts/pii_redaction.json`  
2. In your prompt client or notebook, substitute `{{Text}}` with a sample input  
3. Execute and verify you get output matching the schema  
4. Using JSONata (or your mapping tool in OpenPages), extract the fields:

   - `pii_identified` → list  
   - `redacted_text` → string  

   e.g. JSONata expression:  
    $eval(results.generated_text).pii_identified

5. In the OpenPages sandbox, configure a button (or UI) that passes the record description to the prompt, receives output, and writes back results to designated fields  
6. Test a few edge cases (text with no PII, multiple PII types, partial overlap)  

---

## 1.4 Tips & Common Pitfalls

- Always constrain the output (e.g. “output **only** JSON”) to avoid extra prose.  
- Use stop sequences to prevent trailing tokens.  
- For edge cases, include fallback text (“If no PII found, return `pii_identified: []`).  
- Validate the output format before writing back into systems.

---

At the end you could also include links: “Proceed to Chapter 2 → Summarization & Tagging.”
