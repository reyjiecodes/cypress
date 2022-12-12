# Feature: <BrowserName> - Account Air Claiming - Manually send historical air claim from not transmitted grid

# Scenario: Login to MRAPP
#     Given I have logged in using 
#         | username | <airclaim_username_value_3>   |
#         | email    | <airclaim_email_value_3>      |
#         | password | <airclaim_password_value>   |
#     Then I should be ON "HomePage"

# Scenario Outline: Go to Patient Immunsations
#     Given I am ON "Menu"
#     When I click "patients menu"
#     Then I should be ON "PatientsPage"
#     When I enter 
#         | search | <searchKey> |
#     And I enter 
#         | search | Keys.RETURN |
#     And I check "<patientName>" at "Patient Grid"
#     And I click "edit patient"
# 	Then I should be ON "Patient Details page"
#     When I click "Patient clinical tab" 
#     Then I should be ON "Patient Clinical Tab" 
#     When I click "Immunisations section" 
#     Then I should be ON "Patient Immunisations" 
    
#     Examples:
# 		|   searchKey       |   patientName     		|
#         |   Gabriella       |   Douglass, Gabriella     |
    
# Scenario: Create immunisation 
#     Given I am ON "Patient Immunisations" 
#     When I click "New Immunisation button" 
#     Then I should EXPECT 
#         | New Immunisation pop up  |   Visible  |
#     When I select "ActHIB" in "Vaccine list" 
#     And I click check box "Immunisation Vaccinated Elsewhere check box"
#     Then I should EXPECT
#     	| Immunisation given by		|	Disable	|
#     	| Immunisation batch number	| 	Disable	|
#     And I enter numeric 
#         | Immunisation sequence     | 99 |
# 	And I enter "autoGen4" in "Immunisation batch number"
#     And I click "Immunisation save button" 
#     Then I should EXPECT 
#         | New Immunisation pop up  |   Invisible  |
	
# Scenario: Navigate to Acir screen and check Completed item
# 	Given I am ON "Menu"
# 	When I click "billing menu"
# 	When I click "acir menu" 
#     Then I should be ON "Acir Not Transmitted Page"
	
# Scenario: Check Sidebar
#     Given I am ON "Acir Not Transmitted Page"
#     When I click "Acir Sidebar Open button"
#     Then I should EXPECT
#         | Acir Sidebar AIR Claim            | VISIBLE |
#         | Acir Sidebar AIR Claim History    | VISIBLE |
#     When I click "Acir Sidebar Close button"
# 	Then I should EXPECT
#         | Acir Sidebar AIR Claim            | INVISIBLE |
#         | Acir Sidebar AIR Claim History    | INVISIBLE |
		
# Scenario Outline: Click One ACIR claim data
# 	Given I am ON "Acir Not Transmitted Page"
# 	When I enter 
#         | Acir Not Transmitted Search Grid field | <searchKey> |
# 	And I enter 
#         | Acir Not Transmitted Search Grid field | Keys.RETURN |
# 	And I check all "<patientName>" at "Acir Not Transmitted grid"
# 	And I click "More button"
# 	And I click "More Sent Manually button"
# 	Then I click "Acir Alert Yes button"
		
# 	Examples:
# 		|   searchKey      	|   patientName     			|
#         |   Gabriella       |   Douglass, Gabriella     |
	
# Scenario Outline: Check send manually status
# 	Given I am ON "Acir Not Transmitted Page"
# 	When I click "Acir Completed button"
# 	Then I should be ON "Acir Completed Page"
# 	When I enter 
#         | Acir Completed Search Grid field | <searchKey> |
# 	And I enter 
#         | Acir Completed Search Grid field | Keys.RETURN |
#     And I should EXPECT
#         | Acir Status | Send Manually |
			
# 	Examples:
# 		|   searchKey     	| 
#         |   Gabriella       | 
	
	
# @last 
# Scenario: close browser
		
	


