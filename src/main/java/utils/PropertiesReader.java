package utils;


import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.NoSuchElementException;
import java.util.Properties;

public class PropertiesReader {

    private String propertyFilePath;
    public Properties properties;

    public PropertiesReader(String filePath) {
        propertyFilePath = filePath;
        properties = loadProperties();
    }

    public Properties loadProperties() {
        properties = new Properties();
        try (InputStream inputStream = Files.newInputStream(Paths.get(".").resolve(propertyFilePath))) {
            properties.load(inputStream);
        } catch (IOException e) {
            System.out.println(e.getMessage());
        }
        return properties;
    }

    public String getPropertyValue(String propertyName) {
        try {
            return properties.getProperty(propertyName);
        } catch (NoSuchElementException e) {
            throw new NoSuchElementException("There's no such property, like " + propertyName + " in the " + propertyFilePath + "property file");
        }
    }


}
