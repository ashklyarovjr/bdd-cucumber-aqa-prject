package core.factory;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import utils.PathsKeeper;
import utils.PropertiesReader;

import java.util.concurrent.TimeUnit;

public class DriverFactory {

    private static WebDriver driver;
    private static PropertiesReader reader = new PropertiesReader(PathsKeeper.DRIVER_PROPERTIES_PATH);
    private static String DRIVER_TYPE = reader.getPropertyValue("driver.type");

    public WebDriver getDriverInstance() {
        if (DRIVER_TYPE.equals("firefox")) {
            driver = new FirefoxDriver();
        } else if (DRIVER_TYPE.equals("firefox")) {
            driver = new ChromeDriver();
        } else {
            throw new IllegalArgumentException(DRIVER_TYPE + " driver type is not supported!");
        }
        optimizeDriver(driver);
        return driver;
    }

    private static void optimizeDriver(WebDriver driver) {
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
    }
}
