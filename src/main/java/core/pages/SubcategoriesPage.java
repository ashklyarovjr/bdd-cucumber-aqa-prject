package core.pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Utils;

import java.util.List;

public class SubcategoriesPage extends AbstractPage {
    public SubcategoriesPage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    @FindBy(css = "div[class~='ct'] > a")
    private List<WebElement> subcategories;

    public ProductsListPage chooseSubcategory(String subcategory) {
        WebElement subcategoryLink = Utils.getWebElementFromListByText(subcategories, subcategory);
        subcategoryLink.click();
        return new ProductsListPage(driver);
    }


}
