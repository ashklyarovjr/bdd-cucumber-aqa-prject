package core.stepdefs;


import core.factory.DriverFactory;
import core.pages.MainPage;
import core.pages.ProductsListPage;
import core.pages.SubcategoriesPage;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import utils.Utils;

import java.util.List;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.Assert.assertTrue;

public class StepDefsHolder {

    private WebDriver driver;

    private MainPage mainPage;
    private ProductsListPage productsListPage;
    private SubcategoriesPage subcategoriesPage;

    private String manufacturer;
    private String cheapestProductName;
    private int minPrice;
    private int maxPrice;
    private int mentionedQuantity;

    @Before
    public void setUp() {
        DriverFactory factory = new DriverFactory();
        driver = factory.getDriverInstance();
    }

    @After
    public void tearDown() {
        driver.close();
        driver.quit();
    }

    @And("^I choose \"([^\"]*)\" as products subcategory$")
    public void I_choose_as_products_subcategory(String subcategory) throws Throwable {
        productsListPage = subcategoriesPage.chooseSubcategory(subcategory);
    }

    @And("^I set maximum price to \"([^\"]*)\"$")
    public void I_set_maximum_price_to(String price) throws Throwable {
        maxPrice = Utils.parsePriceOrQuantityToInt(price);
        productsListPage = productsListPage.chooseMaxPrice(price);
    }

    @And("^I set minimum price to \"([^\"]*)\"$")
    public void I_set_minimum_price_to(String price) throws Throwable {
        minPrice = Utils.parsePriceOrQuantityToInt(price);
        productsListPage = productsListPage.chooseMinPrice(price);
    }

    @And("^I choose \"([^\"]*)\" as manufacturer$")
    public void I_choose(String manufacturer) throws Throwable {
        this.manufacturer = manufacturer;
        mentionedQuantity = Utils.getQuantityOfManufacturerProducts(productsListPage.getManufacturers(), productsListPage.getQuantities(), manufacturer);
        productsListPage = productsListPage.chooseManufacturer(manufacturer);
    }

    @And("^I sort products by price$")
    public void I_sort_products_by_price() throws Throwable {
        productsListPage = productsListPage.sortByPrice();
    }

    @And("^I get the cheapest product's name$")
    public void I_get_the_cheapest_product_s_name() throws Throwable {
        cheapestProductName = productsListPage.getProductsNames().get(0).getText();
    }

    @And("^I search that product by name$")
    public void I_search_that_product_by_name() throws Throwable {
        productsListPage = productsListPage.searchFor(cheapestProductName);
        productsListPage = productsListPage.submitSearch();
    }

    @Then("^I see that product$")
    public void I_see_that_product() throws Throwable {
        assertThat(productsListPage.getProductsNames().get(0).getText(), is(equalTo(cheapestProductName)));
        assertThat(productsListPage.getProductsNames().size(), is(equalTo(1)));
    }

    @Then("^I see that products quantity equals to one mentioned on the page$")
    public void I_see_that_products_quantity_equals_to_one_mentioned_on_the_page() throws Throwable {
        assertThat(mentionedQuantity, is(equalTo(productsListPage.getFoundItemsQuantity())));
    }

    @Given("^I am on the \"([^\"]*)\" site$")
    public void I_am_on_the_site(String url) throws Throwable {
        driver.get(url);
    }

    @When("^I choose \"([^\"]*)\" as products category$")
    public void I_choose_as_products_category(String category) throws Throwable {
        mainPage = new MainPage(driver);
        subcategoriesPage = mainPage.chooseCategory(category);
    }

    @Then("^I see correct result$")
    public void I_see_correct_result() throws Throwable {
        List<WebElement> productsPrices = productsListPage.getProductsPrices();
        for (WebElement price : productsPrices) {
            int intPrice = Utils.parsePriceOrQuantityToInt(price.getText());
            assertTrue(intPrice >= minPrice && intPrice <= maxPrice);
        }
    }
}
