# Feature: <BrowserName> - Account Air Claiming - Manually send general air claim from not transmitted grid

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
#         |   Ellie           |   Duhig, Ellie |
    
# Scenario: Create immunisation 
#     Given I am ON "Patient Immunisations" 
#     When I click "New Immunisation button" 
#     Then I should EXPECT 
#         | New Immunisation pop up  |   Visible  |
#     When I select "ActHIB" in "Vaccine list" 
#     And I enter numeric
#         | Immunisation sequence  | 1 |
#     And I enter "autoGen3" in "Immunisation batch number" 
#     And I click "Immunisation save button" 
#     Then I should EXPECT 
#         | New Immunisation pop up  |   Invisible  |
	
# Scenario: Navigate to Acir screen
# 	Given I am ON "Menu"
# 	When I click "billing menu"
# 	When I click "acir menu" 
#     Then I should be ON "Acir Not Transmitted Page"
	
# Scenario Outline: Check Open Immunisation
#     Given I am ON "Acir Not Transmitted Page"
# 	When I enter 
#         | Acir Not Transmitted Search Grid field | <searchKey> |
# 	And I enter 
#         | Acir Not Transmitted Search Grid field | Keys.RETURN |
# 	And I check all "<patientName>" at "Acir Not Transmitted grid"    
#     And I click "Open Immunisation button"
#     Then I should EXPECT
#         | Acir Immunisation pop up | VISIBLE |
#     And I wait 2 seconds
#     Then I should EXPECT
#         | Acir Immunisation pop up Batch Number field | autoGen3 |
#     When I click "Acir Immunisation pop up Cancel button"
#     Then I should EXPECT
#         | Acir Immunisation pop up | INVISIBLE |

#     Examples:
# 		|   searchKey       |   patientName     		|
#         |   Ellie           |   Duhig, Ellie |

# Scenario Outline: Send Manually ACIR claim data
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
# 		|   searchKey       |   patientName     		|
#         |   Ellie           |   Duhig, Ellie |
	
# Scenario Outline: Check send manually status in Completed Chart
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
# 		|   searchKey     	 | 
#         |   Ellie           |
	
# @last 
# Scenario: close browser
		
	


