package utils;


import org.apache.commons.lang.NullArgumentException;
import org.apache.commons.lang.StringUtils;
import org.openqa.selenium.WebElement;

import java.util.List;

public class Utils {

    public static WebElement getWebElementFromListByText(List<WebElement> elements, String text) {
        WebElement correctCategory = null;
        if (elements != null && text != null) {
            for (WebElement category : elements) {
                if (category.getText().equals(text)) {
                    correctCategory = category;
                    break;
                }
            }
        } else {
            throw new NullArgumentException("Argument 'list' is: " + elements + " and 'text' argument is: " + text +
                    ". None of them can be null");
        }
        return correctCategory;
    }

    public static boolean checkThatElementAttributeContainsString(WebElement element, String attribute, String text) {
        boolean answer = false;
        if (element != null && attribute != null && text != null) {
            String attrText = element.getAttribute(attribute);
            if (StringUtils.contains(attrText, text))
                answer = true;
        } else {
            throw new NullArgumentException("Argument 'element' is: " + element + ", 'attribute' argument is: " + attribute +
                    " and 'text' argument is: " + text + ". None of them can be null");
        }
        return answer;
    }

    public static int getElementIndexFromListByText(List<WebElement> elements, String text) {
        WebElement needed = getWebElementFromListByText(elements, text);
        return elements.indexOf(needed);
    }

    public static int parsePriceOrQuantityToInt(String number) {
        String trimmed = number.trim();
        String result = trimmed.replaceAll("\\D", "");
        return Integer.parseInt(result);
    }

    public static int getQuantityOfManufacturerProducts(List<WebElement> manufacturers, List<WebElement> quantities, String manufacturer) {
        int manufacturerIndex = getElementIndexFromListByText(manufacturers, manufacturer);
        String quantity = quantities.get(manufacturerIndex).getText();
        return parsePriceOrQuantityToInt(quantity);
    }


}
