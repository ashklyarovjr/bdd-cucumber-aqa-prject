Feature:
  As a user
  I want to filter search results
  To spend less time on searching for specific product

  @MaxAndMinPriceScenario
  Scenario Outline:
    Given I am on the "http://pn.com.ua" site
    When I choose "<category>" as products category
    And I choose "<subcategory>" as products subcategory
    And I set maximum price to "<maxPrice>"
    And I set minimum price to "<minPrice>"
    Then I see correct result

    Examples:
      | category   | subcategory           | minPrice | maxPrice |
      | Компьютеры | Настольные компьютеры | 3000     | 6000     |
      | Авто       | Мотоциклы             | 20000    | 40000    |

  @ManufacturerScenario
  Scenario:
    Given I am on the "http://pn.com.ua" site
    When I choose "Компьютеры" as products category
    And I choose "Настольные компьютеры" as products subcategory
    And I choose "ASUS" as manufacturer
    Then I see that products quantity equals to one mentioned on the page

  @CheapestProductSearch
  Scenario Outline:
    Given  I am on the "http://pn.com.ua" site
    When I choose "<category>" as products category
    And I choose "<subcategory>" as products subcategory
    And I sort products by price
    And I get the cheapest product's name
    And I search that product by name
    Then I see that product

    Examples:
      | category   | subcategory           |
      | Компьютеры | Настольные компьютеры |
      | Авто       | Мотоциклы             |
