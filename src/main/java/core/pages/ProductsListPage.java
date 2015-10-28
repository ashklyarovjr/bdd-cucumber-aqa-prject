package core.pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Utils;

import java.util.List;

public class ProductsListPage extends AbstractPage {

    public ProductsListPage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    @FindBy(css = "div.name a")
    private List<WebElement> productsNames;

    @FindBy(css = "div.price strong")
    private List<WebElement> productsPrices;

    @FindBy(xpath = "//a[contains(@href, 'price')]")
    private WebElement priceSort;

    @FindBy(css = "div.group:nth-of-type(3) a")
    private List<WebElement> minPrices;

    @FindBy(css = "div.group:nth-of-type(4) a")
    private List<WebElement> maxPrices;

    @FindBy(css = "div.group:nth-of-type(5) a")
    private List<WebElement> manufacturers;

    @FindBy(css = "div.group:nth-of-type(5) i")
    private List<WebElement> quantities;

    @FindBy(css = "div.total b")
    private WebElement foundItemsQuantity;

    @FindBy(css = "input#edit-name-1")
    private WebElement searchField;

    @FindBy(css = "input#edit-submit-1")
    private WebElement submitSearchBtn;

    public List<WebElement> getQuantities() {
        return quantities;
    }

    public List<WebElement> getManufacturers() {
        return manufacturers;
    }

    public int getFoundItemsQuantity() {
        return Integer.parseInt(foundItemsQuantity.getText().trim());
    }

    public List<WebElement> getProductsNames() {
        return productsNames;
    }

    public List<WebElement> getProductsPrices() {
        return productsPrices;
    }

    public ProductsListPage sortByPrice() {
        priceSort.click();
        return new ProductsListPage(driver);
    }

    public ProductsListPage chooseMinPrice(String price) {
        WebElement minPrice = Utils.getWebElementFromListByText(minPrices, price);
        minPrice.click();
        return new ProductsListPage(driver);
    }

    public ProductsListPage chooseMaxPrice(String price) {
        WebElement maxPrice = Utils.getWebElementFromListByText(maxPrices, price);
        maxPrice.click();
        return new ProductsListPage(driver);
    }

    public ProductsListPage chooseManufacturer(String manufacturer) {
        WebElement manufacturerLink = Utils.getWebElementFromListByText(manufacturers, manufacturer);
        manufacturerLink.click();
        return new ProductsListPage(driver);
    }

    public ProductsListPage searchFor(String subject) {
        searchField.sendKeys(subject);
        return this;
    }

    public ProductsListPage submitSearch(){
        submitSearchBtn.click();
        return new ProductsListPage(driver);
    }


}
