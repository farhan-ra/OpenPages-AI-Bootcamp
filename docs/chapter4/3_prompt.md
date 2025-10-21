---
title: "Lab 3.3: Develop and Deploy Prompt"
description: ""
---

# Lab 3.3: Develop and Deploy Prompt

Now knowing the exact input type, we can create a prompt for our desired output.

---

## 1. Set Up and Deploy the prompt in Prompt Lab

1. As per Lab 1.1, develop and deploy the prompt. The only difference is the input data will be the json object we identified in the last step, and the prompt template variable must be `objectJson`
[prompt lab screenshot]

Here is an example prompt:

```
You are a compliance and risk expert writing an executive summary for a third-party qualitative risk assessment. 

Given the following JSON input (representing a risk assessment in OpenPages), summarize the key information in professional business language. Your summary should:

- Begin with a brief description of the purpose of the risk assessment.
- Mention the assessment type (e.g., Third Party, Qualitative), assessor, and reviewer.
- Highlight the assessment period and frequency.
- Summarize how many direct risks were identified, and break them down by their **Inherent** and **Residual Risk Ratings** (e.g., how many were High, Medium, Low, Very High).
- Identify any particularly critical risks (e.g., High Inherent AND High Residual).
- Include a high-level overview of the control environment: how many controls are mapped, and summarize their **Design** and **Operating Effectiveness** ratings.
- Note the current status of the assessment (e.g., Awaiting Assessment).
- Do not include any empty or irrelevant fields.

Input:
{objectJson}

Provide the executive summary in a short, readable paragraph of 5 sentences or less that could be shared with senior management or stakeholders. Generate only the executive summary with no other information or decorators (for example, "here is the executive summary" at the start or tags such as <|end_of_text|>). Do not repeat information and be succinct. Suggest anything that you believe, as an expert risk professional, that requires attention.

Output:
```