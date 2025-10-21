---
title: "Lab 3.2: Validate the View Input"
description: ""
---

# Lab 3.2: Set-up and Integrate AI Model

With a view input created, we need to get the format the data will be sent to the AI model in so we can test our prompt with it, and confirm that it actually contains all the information we need to perform our AI analysis.

---

## 1. Set-up OpenPages Logging so that Machine Learning Information is Recorded 

1. We will capture the data format by accessing the logs inside OpenPages, and so this must be configured correctly first. From the **Administration ⚙️** menu, go to **System Configuration → Settings**.

2. By default, OpenPages obfuscates the request and response payloads for security. We must disable this - In settings, navigate to: 
/OpenPages/Applications/Common/Administration/Integrations/Logs/Obfuscation Disabled. Ensure the value is set to `true`.
[image placeholder]

3. From the **Administration ⚙️** menu, go to **Other → Logs**.

4. In **System tracing options** ensure only **Machine Learning** is checked. Click Save.
[image placeholder] 

---

## 2. Deploy a Dummy AI Model

1. We need extract the exact payload of our view that OpenPages sends to watsonx.ai. To do this, we need to configure an AI insight trigger that calls our input view. We can achieve this by deploying a dummy AI model that calls our view input, into **another** view that a user will interact with the AI in. The payload will be sent to the dummy AI model. 

In watsonx.ai, deploy a prompt template with the following:

```
This is a dummy AI model. For the following input:
{objectJson}
Generate the word "Yes".
```

---

## 3. Integrating Deployed Dummy AI Model to OpenPages

1. From the **Administration** menu, go to **Integrations → Custom Machine Learning Models**.
2. Click **New Model** to begin configuring a new integration.  
3. On the “New Model” screen:
- Enter **Name** and **Label** (e.g. `view_input_test`)  
- Select the **AI Service Type** (e.g. Watson Machine Learning on IBM Cloud)  
- Enter **Access Parameters** such as:  
  - **Watson service type:** `Watson Machine Learning on Cloud`
  - **Authentication URL:** `https://iam.cloud.ibm.com/identity/token`
  - **API Key:** Retrieve from IBM Cloud 
  - **Base Deployment URL:** `https://us-south.ml.cloud.ibm.com/ml/v4`
  - **Deployment ID:** Retrieve from dummy AI model deployment space on watsonx.ai
  - **Space ID:**  Retrieve from model/prompt template deployment on watsonx.ai
  - **API version:** `2021-05-01`  
- Click **Test Connection** to verify connectivity  

4. Set the **Input type** as view definition and select the appropriate object type (Risk Assessment).
[image placeholder]

2. For **Outputs**, select **Insight type** as display only with dummy text for the output label and JSONata string.
[image placeholder]

3. Add a suitable description and customise the style to your choosing in **Guidance**. Save the model.
[image placeholder]

---

## 4. Add the Dummy Model to a View 

1. Navigate to the relevant object view (Risk Assessment) to add the AI model we deployed.

2. Add a new **View AI Insights** button, adding a suitable label and the dummy AI model for **Select AI model integration**. Select the view created in Lab 3.1 for **Select a view to send to the model**.
[image placeholder]

3. Publish the view

---

## 5. Test the Dummy Model in OpenPages

1. Find an example Risk Assessment, and run the Dummy Model in the area you placed in the previous step.
[image placeholder]

---

## 6. Access the OpenPages Logs to Find the View Input Payload 

1. Now that the payload has been sent to watsonx.ai, we can track down the exact input by accessing the OpenPages logs. From the **Administration ⚙️** menu, go to **Other → Logs**.

2. Launch the Log Collector. Only the **Log Files** option needs to be selected.

3. Wait for the logging to complete. This could take a few minutes depending on what you have selected for System tracing options. That's why it is recommended only to select machine learning.
[image placeholder]

4. Once the logging is complete, download the file.

5. Unzip the archive and navigate to LogCollector_{date}_OPNodeServer1/OpenPages/aurora/logs/debug/OpenPagesNodeServerServer1-machinelearning.log

6. This file contains detailed entries for each AI interaction, including the constructed prompt, the JSON payload, and the LLM’s response.Look for the line that contains a request corresponding to the time you clicked the AI button. 
[image placeholder]

7. The payload sent to your model is then the value against the `objectJson` key.

8. Here is an example of the payload:

<pre>{
    "guidance": {
        "": "",
        "incompletedRequiredItems": [],
        "incompleteOptionalItems": [],
        "completedItems": [
            "Description",
            "Name"
        ]
    },
    "objectTypeLabel": "Risk Assessment",
    "Related Information": {
        "Tab Group-0000": {
            "Process Risks": {
                "relationshipType": "descendants",
                "objectTypeName": "SOXRisk",
                "relatedObjects": []
            },
            "Issue Summary": {
                "relationshipType": "descendants",
                "objectTypeName": "SOXIssue",
                "relatedObjects": []
            },
            "Direct Risks": {
                "relationshipType": "children",
                "objectTypeName": "SOXRisk",
                "relatedObjects": [
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "Medium",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Risk Assessment and Treatment Risk",
                        "Residual Risk Rating": "Low",
                        "id": 111040,
                        "parentId": 111037,
                        "Name": "RSK-SA-001"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "High",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Security Policy Risk",
                        "Residual Risk Rating": "Medium",
                        "id": 111042,
                        "parentId": 111037,
                        "Name": "RSK-SA-002"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "High",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Organization Security Risk",
                        "Residual Risk Rating": "High",
                        "id": 111044,
                        "parentId": 111037,
                        "Name": "RSK-SA-003"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "Medium",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Asset and Information Management Risk",
                        "Residual Risk Rating": "Low",
                        "id": 111046,
                        "parentId": 111037,
                        "Name": "RSK-SA-004"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "Medium",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Human Resource Security Risk",
                        "Residual Risk Rating": "Low",
                        "id": 111048,
                        "parentId": 111037,
                        "Name": "RSK-SA-005"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "Low",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Physical and Environmental Security Risk",
                        "Residual Risk Rating": "Low",
                        "id": 111050,
                        "parentId": 111037,
                        "Name": "RSK-SA-006"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "High",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Operations Management Risk",
                        "Residual Risk Rating": "Medium",
                        "id": 111052,
                        "parentId": 111037,
                        "Name": "RSK-SA-007"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "High",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Access Control Risk",
                        "Residual Risk Rating": "High",
                        "id": 111054,
                        "parentId": 111037,
                        "Name": "RSK-SA-008"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "High",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Application Security Risk",
                        "Residual Risk Rating": "Very High",
                        "id": 111056,
                        "parentId": 111037,
                        "Name": "RSK-SA-009"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "High",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Incident Event and Communications Management Risk",
                        "Residual Risk Rating": "Medium",
                        "id": 111058,
                        "parentId": 111037,
                        "Name": "RSK-SA-010"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "High",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Business Resiliency Risk",
                        "Residual Risk Rating": "Very High",
                        "id": 111060,
                        "parentId": 111037,
                        "Name": "RSK-SA-011"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "Low",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Compliance Risk",
                        "Residual Risk Rating": "Low",
                        "id": 111062,
                        "parentId": 111037,
                        "Name": "RSK-SA-012"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "Low",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "End User Device Security Risk",
                        "Residual Risk Rating": "Low",
                        "id": 111064,
                        "parentId": 111037,
                        "Name": "RSK-SA-013"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "Medium",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Network Security Risk",
                        "Residual Risk Rating": "Medium",
                        "id": 111066,
                        "parentId": 111037,
                        "Name": "RSK-SA-014"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "High",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Privacy Risk",
                        "Residual Risk Rating": "High",
                        "id": 111068,
                        "parentId": 111037,
                        "Name": "RSK-SA-015"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "Medium",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Threat Management Risk",
                        "Residual Risk Rating": "Low",
                        "id": 111070,
                        "parentId": 111037,
                        "Name": "RSK-SA-016"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "Medium",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Server Security Risk",
                        "Residual Risk Rating": "Medium",
                        "id": 111072,
                        "parentId": 111037,
                        "Name": "RSK-SA-017"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Inherent Risk Rating": "Low",
                        "Owner": "OpenPagesAdministrator",
                        "Description": "Cloud Hosting Risk",
                        "Residual Risk Rating": "Low",
                        "id": 111074,
                        "parentId": 111037,
                        "Name": "RSK-SA-018"
                    }
                ]
            },
            "Controls": {
                "relationshipType": "descendants",
                "objectTypeName": "SOXControl",
                "relatedObjects": [
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "A comprehensive Risk Governance Plan is in Place including Policies, Procedures, and Internal Controls",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Not Determined",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111077,
                        "parentId": 111040,
                        "Name": "CTRL-SA-001"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "An Information Security Policy Program has been established and implemented based on industry accepted standards and practices",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111079,
                        "parentId": 111042,
                        "Name": "CTRL-SA-002"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "Local and Site-specific security risk processes are implemented to adequately manage organizational security risk",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Ineffective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111081,
                        "parentId": 111044,
                        "Name": "CTRL-SA-003"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "The Asset Inventory or CMDB is updated periodically and Asset Information is adquate and complete",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Ineffective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111083,
                        "parentId": 111046,
                        "Name": "CTRL-SA-004"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "A human resource policy is approved by management, communicated to all constituents, and includes comprehensive background checks.",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111085,
                        "parentId": 111048,
                        "Name": "CTRL-SA-005"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "A Physical Security program including physical access and environmental controls is implemented and approved by Management.",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111087,
                        "parentId": 111050,
                        "Name": "CTRL-SA-006"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "Operating procedures are documented, maintained, and made available to all users",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111089,
                        "parentId": 111052,
                        "Name": "CTRL-SA-007"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "Access Control Policy is implemented and preventative controls are in place to prevent access to client data.",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111091,
                        "parentId": 111054,
                        "Name": "CTRL-SA-008"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "Applicatoins that transmit, process, or store scoped data have been reviewed by security experts",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111093,
                        "parentId": 111056,
                        "Name": "CTRL-SA-009"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "Incidents are properly documented, managed, and addressed in accordance with SLA's",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111095,
                        "parentId": 111058,
                        "Name": "CTRL-SA-010"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "There is an established business resiliency program that has been approved by management, communicated to appropriate constituents, and an owner to maintain and review the program",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111097,
                        "parentId": 111060,
                        "Name": "CTRL-SA-011"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "There are policies and procedures to ensure compliance with applicable legislative, regulatory and contractual requirements including intellectual property rights on business processes or information technology software products",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111099,
                        "parentId": 111062,
                        "Name": "CTRL-SA-012"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "End user device security configuration standards are reviewed and/or updated at least annually to account for any changes in environment, available security features and/or best practices",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111101,
                        "parentId": 111064,
                        "Name": "CTRL-SA-013"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "Reviews are performed to validate compliance with documented standards at least annually",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111103,
                        "parentId": 111066,
                        "Name": "CTRL-SA-014"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "Client Data is scoped collected, transmitted, processed, or stored that can be classified as non-public information (NPI), personally identifiable information (PII), or personally identifiable financial information",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111105,
                        "parentId": 111068,
                        "Name": "CTRL-SA-015"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "The anti-malware policy or program includes defined operating systems that require antivirus",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111107,
                        "parentId": 111070,
                        "Name": "CTRL-SA-016"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "Server security configuration reviews are performed regularly to validate compliance with documented standards",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111109,
                        "parentId": 111072,
                        "Name": "CTRL-SA-017"
                    },
                    {
                        "Status": "Awaiting Assessment",
                        "Description": "An Internet-accessible self-service portal is available that allows clients to configure security settings and view access logs, security events and alerts",
                        "Design Effectiveness": "Effective",
                        "Operating Effectiveness": "Effective",
                        "Control Owner": "OpenPagesAdministrator",
                        "id": 111111,
                        "parentId": 111074,
                        "Name": "CTRL-SA-018"
                    }
                ]
            },
            "Attachments": {
                "relationshipType": "children",
                "objectTypeName": "SOXDocument",
                "relatedObjects": []
            }
        }
    },
    "name": "1-TPRM-VRA-SCA-BigTech",
    "objectTypeName": "RiskAssessment",
    "header": {
        "Status": "Awaiting Assessment",
        "Type": "Qualitative",
        "Number of Issues": 0
    },
    "RCSA Dates": {
        "group-dates": {
            "Next Assessment Date": "",
            "Start Date": "6/18/2022",
            "End Date": "7/16/2022",
            "Frequency": "Quarterly"
        }
    },
    "Overview": {
        "Guidance": "",
        "Description": "Vendor Standardized Risk and Control Assessment",
        "group-owners": {
            "Status": "Awaiting Assessment",
            "Risk Assessment Type": "Third Party",
            "Type": "Qualitative",
            "Domain": "Compliance",
            "Assessor": "Vicky Manfred [vendormanager]",
            "Reviewer": "Vicky Manfred [vendormanager]"
        },
        "Name": "1-TPRM-VRA-SCA-BigTech"
    },
    "id": "111037",
    "Processes In Scope": {
        "Scoping": "Scope the Assessment by associating to processes.\\nAll child risks of a process will be then deemdeed to be in scope and shown in the grids below",
        "Tab Group-0001": {
            "Processes": {
                "relationshipType": "children",
                "objectTypeName": "SOXProcess",
                "relatedObjects": []
            }
        }
    }
}</pre>
---



