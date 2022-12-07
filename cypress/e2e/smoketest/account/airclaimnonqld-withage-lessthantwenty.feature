Feature: <BrowserName> - Account Air Claiming - General air claim immunization in non-QLD practice and patient age < 20 yo

	Scenario: Background name: Login to MRAPP
		Given I am login to MRAPP using
		| username | airclaim_username_value_2   |
		| email    | airclaim_email_value_2      |
		| password | airclaim_password_value   	 |

# Scenario: Login to MRAPP
# 	Given I have logged in using 
# 		| username | <airclaim_username_value_2>   |
# 		| email    | <airclaim_email_value_2>      |
# 		| password | <airclaim_password_value>   |
# 	Then I should be ON "HomePage"
	
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
#         |   Mullaly         |  Mullaly, Elijah |	
    
# Scenario: Create immunisation 
#     Given I am ON "Patient Immunisations" 
#     When I click "New Immunisation button" 
#     Then I should EXPECT 
#         | New Immunisation pop up  |   Visible  |
#     When I select "ActHIB" in "Vaccine list"
#     And I enter 1 in "Immunisation sequence" 
#     And I enter "autoGen1" in "Immunisation batch number" 
#     And I click "Immunisation save button" 
#     Then I should EXPECT 
#         | New Immunisation pop up  |   Invisible  |
	
# Scenario: Navigate to Acir screen and check Completed item
# 	Given I am ON "Menu"
# 	When I click "billing menu"
# 	When I click "acir menu" 
#     Then I should be ON "Acir Not Transmitted Page"
#     When I click "Acir Completed button"
#     Then I should be ON "Acir Completed Page"
    
# Scenario Outline: Search Completed item
#     Given I am ON "Acir Completed Page"
#     When I enter
#         | Acir Completed Search Grid field | <searchItem> |
#     And I enter
#         | Acir Completed Search Grid field | Keys.RETURN |
#     Then I should EXPECT
# 		| Acir Status Completed	|	Completed	|
		
#         Examples:
#         |   searchItem	     |
#         |   Mullaly         | 
        