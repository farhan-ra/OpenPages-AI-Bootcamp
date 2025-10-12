---
title: "Lab 1: Integrating a Custom ML Model into OpenPages for Risk Taxonomy Classification"
description: "Step‑by‑step lab to integrate an AI model to classify risk descriptions into Basel II taxonomy in OpenPages using Custom Machine Learning Models"
---

# Lab 1: Integrating a Custom ML Model for Risk Classification in OpenPages

This lab walks through how to configure and use the *Custom Machine Learning Models* feature in **IBM OpenPages 9.0.0** to automatically classify risk descriptions into your two‑level taxonomy.

You will:

1. Set up and deploy the prompt in Prompt Lab
2. Configure a connection to your deployed model 
2. Map input fields  
3. Map output fields and JSONata expressions  
4. Configure user guidance  
5. Add the model to a view  
6. Test the integration  

> **Prerequisites & Notes**  
> - You must have **Custom Machine Learning Models** permission in OpenPages, otherwise the menu is not visible. :contentReference[oaicite:0]{index=0}  
> - You must already have deployed your classification model (e.g. on Watson ML or another AI service). :contentReference[oaicite:1]{index=1}  
> - You must know the exact enum values for your OpenPages fields (Level 1 / Level 2 classification) so they match the model output.  
> - You should be familiar with **JSONata** syntax to parse model outputs. :contentReference[oaicite:2]{index=2}  
