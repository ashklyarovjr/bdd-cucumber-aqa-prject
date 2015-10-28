package core.pages;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utils.Utils;

import java.util.List;

public class MainPage extends AbstractPage {

    public MainPage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(driver, this);
    }

    @FindBy(css = "h1 a.main_page_link_catalog")
    private List<WebElement> categories;

    public SubcategoriesPage chooseCategory(String category) {
        WebElement categoryLink = Utils.getWebElementFromListByText(categories, category);
        categoryLink.click();
        return new SubcategoriesPage(driver);
    }


}
