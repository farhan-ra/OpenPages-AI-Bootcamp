---
title: "Lab 1.1: Creating and deploying the model in watsonx.ai"
description: "Step‑by‑step lab to integrate an AI model to classify risk descriptions into Basel II taxonomy in OpenPages using Custom Machine Learning Models"
---

# Lab 1.1: Creating and Deploying a model in watsonx.ai

---

## 1. Set Up and Deploy the prompt in Prompt Lab

1. Create a new Prompt Lab asset in your project.
![1_create_new_prompt_lab_asset](images/1_create_new_prompt_lab_asset.png)

2. Craft your prompt, with reference to what bits of information will be coming from the object you want the AI feature on. Add this as a variable in the prompt.
![2_create_new_freeform_prompt_with_variable](images/2_create_new_freeform_prompt_with_variable.png)

3. Save the prompt as a prompt template.
![3_save_prompt_template](images/3_save_prompt_template.png)

4. Promote asset to deployment space.
![4_promote_to_space](images/4_promote_to_space.png)

5. Deploy asset in deployment space.
![7_deploy_promoted_asset](images/7_deploy_promoted_asset.png)

6. Note down the deployment ID. We will need this in OpenPages.
![9_deployed_prompt_template](images/9_deployed_prompt_template.png)

