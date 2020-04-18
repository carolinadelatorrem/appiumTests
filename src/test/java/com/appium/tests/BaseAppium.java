package com.appium.tests;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.service.local.AppiumDriverLocalService;
import io.appium.java_client.service.local.AppiumServiceBuilder;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.WebDriverWait;
import utils.PropertyLoader;

import java.io.File;

public class BaseAppium {
    public static AppiumDriverLocalService server;
    public static AndroidDriver<WebElement> driver;
    public static WebDriverWait wait;

    public void init() throws Exception {
        // Properties file
        PropertyLoader loadproperty = new PropertyLoader();

        try {
            //Appium server
            AppiumServiceBuilder serviceBuilder = new AppiumServiceBuilder();

            serviceBuilder.usingAnyFreePort();

            serviceBuilder.usingDriverExecutable(new File("/usr/local/bin/node"));
            serviceBuilder.withAppiumJS(new File("/usr/local/bin/appium/"));

            server = AppiumDriverLocalService.buildService(serviceBuilder);
            server.start();

            DesiredCapabilities caps = new DesiredCapabilities();
            caps.setCapability("platformName", "Android");
            caps.setCapability("UDID", "emulator-5554");
            caps.setCapability("deviceName", "Android Device");

            caps.setCapability("app", "src/test/resources/PreciseUnitConversion.apk");

            //Driver
            driver = new AndroidDriver(server.getUrl(), caps);
            wait = new WebDriverWait(driver,10);

        } catch (Exception e) {
            throw new Exception ("Error connecting to Appium service : " + e.getMessage());
        }
    }

    public void tearDown() {
        if(driver != null) {
            driver.quit();
        }
    }

    public static void stopAppiumServer() {
        server.stop();
    }

}