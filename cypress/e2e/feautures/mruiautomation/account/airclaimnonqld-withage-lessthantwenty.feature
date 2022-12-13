@regression

Feature: Account Air Claiming - General air claim immunization in non-QLD practice and patient age < 20 yo
  
	Background:Login to MRAPP
		Given I login to MRAPP using:
		| username | airclaim_username_value_2    |
		| email    | airclaim_email_value_2       |
		| password | airclaim_password_value   	  |
    Then I should be successfully login

	Scenario: Go to Patient Details Page
		Given I am ON "Menu"
		When I click "Patients" menu
		Then I should be on "Patients" page

  Scenario Outline: Go to Patient Details page
		Given I am ON "Patients" page
		When I search "<searchKey>" patients name
		And I check "<patientName>" at patients grid
		And I click "Edit" patients button
		Then I should be on "Patients Details" page
    Examples:
			|   searchKey       |   patientName     		|
			|   Mullaly         |  Mullaly, Elijah      |	

  Scenario Outline: Go to Patient Clinical tab
    Given I am on "Patients Details" page with "<patientName>"
    When I click "Clinical" tab
    Then I should be on "Patients Clinical Tab" page
    Examples:
      |  patientName     		  |
      |  Mullaly, Elijah      |

  Scenario Outline: Go to Patient Immunisation tab
    Given I am on "Clinical Tab" with "<patientName>"
    When I click "Immunisations" section
    Then I should be on "Patient Immunisations" page
    Examples:
      |  patientName     		  |
      |  Mullaly, Elijah      |

  Scenario Outline: Create immunisation
    Given I am on "Patient Immunisations" section of "<patientName>"
    When I click "New Immunisation" button
    And I select "ActHIB" in "Vaccine list" from New Immunization popup
    And I enter 1 in "Immunisation sequence" 
    And I enter "autoGen1" in "Immunisation batch number" 
    And I click "Immunisation save" button 
    Then I should expect "ActHIB" to be added in the immunisation grid
    Examples:
      | patientName             |
      | Mullaly, Elijah         |
	
  # Scenario: Navigate to Acir screen and check Completed item
  #   Given I am ON "Menu"
  #   When I click "billing menu"
  #   And I click "acir menu" 
  #   And I click "Acir Completed button" at "Acir Not Transmitted Page" 
  #   Then I should be ON "Acir Completed Page"

  # Scenario Outline: Search Completed item
  #   Given I am ON "Acir Completed Page"
  #   When I enter
  #     | Acir Completed Search Grid field | <searchItem> |
  #   And I enter
  #     | Acir Completed Search Grid field | Keys.RETURN |
  #   Then I should EXPECT
  #     | Acir Status Completed	|	Completed	|
  #   Examples:
  #     |   searchItem	     |
  #     |   Mullaly          | 
          