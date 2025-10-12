# Lab: PII Redaction Prompt

## Objective

Implement the PII redaction prompt, run it, parse results, and integrate with OpenPages UI.

---

## Steps

1. Open the prompt template: `prompts/pii_redaction.json`  
2. Load the example input: `examples/inputs/example_text_pii.txt`  
3. Replace placeholder `{{Text}}` with the example input  
4. Run the prompt in your prompt client (or notebook)  
5. Inspect returned JSON, compare against `examples/outputs/example_pii_redacted.json`  
6. Use JSONata or mapping logic to extract `pii_identified` and `redacted_text`  
7. Inside OpenPages sandbox, create a UI component (e.g. a button) that:
   - Takes the record’s relevant text  
   - Sends it to the prompt  
   - Parses returned JSON  
   - Updates record fields (e.g. `piiList`, `redactedDescription`)  
8. Test with multiple input variations  
9. Document any mis‑parses or format errors  

---

## Extension Tasks

- Modify the prompt to also return the character indexes (start/end) of each PII occurrence  
- Add optional types (e.g. “Phone number,” “Email”) and group by type  
- Add a fallback clause: if no PII detected, return an empty list (don’t error)

