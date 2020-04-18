package com.appium.tests.stepDefinitions;

import com.appium.tests.BaseAppium;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.appium.java_client.MobileElement;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

import static io.appium.java_client.MobileBy.AndroidUIAutomator;
import static io.appium.java_client.MobileBy.ByAccessibilityId;
import static org.junit.Assert.assertEquals;
import static org.openqa.selenium.support.ui.ExpectedConditions.*;

public class StepDefinitions extends BaseAppium  {

    @Given("^I open the application$")
    public void i_open_the_application() throws Throwable {
         BaseAppium baseAppium = new BaseAppium();
         baseAppium.init();
    }

    @When("^I tap \"([^\"]*)\" in the number pad$")
    public void i_type_in_the_number_pad(String number) throws Throwable {
        MobileElement numberFromPad = (MobileElement) driver.findElement(By.xpath("//android.widget.Button[@text=\""+number+"\"]"));
        numberFromPad.click();
    }

    @Then("^I should see \"([^\"]*)\" and \"([^\"]*)\" in the source$")
    public void i_should_see_and_in_the_source(String number, String unit) throws Throwable {
        MobileElement sourceValue = (MobileElement) driver.findElement(By.xpath("//android.widget.TextView[@text=\""+number+"\"]"));
        assertEquals(number, sourceValue.getText());
        MobileElement sourceUnit = (MobileElement) driver.findElement(By.xpath("//android.widget.TextView[@text=\""+unit+"\"]"));
        assertEquals(unit, sourceUnit.getText());
    }

    @And("^I should see the result \"([^\"]*)\" and \"([^\"]*)\" in the target$")
    public void i_should_see_the_result_and_in_the_target(String result, String target) throws Throwable {
        MobileElement targetValue = (MobileElement) driver.findElement(By.xpath("//android.widget.TextView[@text=\""+result+"\"]"));
        assertEquals(result, targetValue.getText());
        MobileElement targetUnit = (MobileElement) driver.findElement(By.xpath("//android.widget.TextView[@text=\""+target+"\"]"));
        assertEquals(target, targetUnit.getText());
    }

    @Given("^I see converter from \"([^\"]*)\" to \"([^\"]*)\"$")
    public void iSeeConverterFromTo(String sourceUnit, String targetUnit) throws Throwable {
            List<WebElement> spinners = driver.findElementsById("select_unit_spinner");
            MobileElement sourceDropdown = (MobileElement) spinners.get(0);
            MobileElement targetDropdown = (MobileElement) spinners.get(1);
            assertEquals(sourceUnit, sourceDropdown.getText());
            assertEquals(targetUnit, targetDropdown.getText());
    }

    @When("^I tap in \"([^\"]*)\" button$")
    public void iTapInButton(String buttonName) throws Throwable {
            MobileElement button = assignButtonLocator(buttonName);
            button.click();
        }

    private MobileElement assignButtonLocator(String buttonName) {
        MobileElement button = null;
        if (buttonName.equals("C")) {
            System.out.println("El botón es C");
            button = (MobileElement) driver.findElement(By.xpath("//android.widget.Button[@text=\"C\"]"));
            System.out.println(button);
        } else if (buttonName.equals("switch")) {
            System.out.println("El botón es switch");
            button = (MobileElement) driver.findElements(By.xpath("//android.widget.ImageButton[@content-desc=\"Swap units\"]")).get(1);
            System.out.println(button);
        } else if (buttonName.equals("Show All")) {
            System.out.println("El botón es show all");
            button = (MobileElement) driver.findElement(By.id("btn_show_all"));
            System.out.println(button);
        } else if(buttonName.equals("delete")) {
            System.out.println("El botón es delete");
            button = (MobileElement) driver.findElement(By.id("btn_del"));
            System.out.println(button);
        }
        return button;
    }

    @Then("^I should see in the \"([^\"]*)\" dropdown \"([^\"]*)\"$")
    public void iShouldSeeInTheDropdown(String position, String unit) throws Throwable {
        By locator = By.id("select_unit_spinner");
        if (position.equals("source")){
            MobileElement dropdown = (MobileElement) driver.findElements(locator).get(0);
            assertEquals(unit, dropdown.getText());
        } else if (position.equals("target")){
            MobileElement dropdown = (MobileElement) driver.findElements(locator).get(1);
            assertEquals(unit, dropdown.getText());
        } else {
            System.out.println("Invalid position");
        }
    }

    @Then("^I should see the title with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iShouldSeeTheTitleWithAnd(String unit, String value) throws Throwable {
        By elementLocator;
        elementLocator = By.id("all_units_source_value");
        try {
            wait.until(presenceOfElementLocated(elementLocator));
        } catch (Exception e) {
            e.printStackTrace();
        }
        MobileElement allUnitsSourceName = (MobileElement) driver.findElementById("com.ba.universalconverter:id/all_units_source_name");
        MobileElement allUnitsSourceValue = (MobileElement) driver.findElementById("com.ba.universalconverter:id/all_units_source_value");
        assertEquals(unit, allUnitsSourceName.getText());
        assertEquals(value, allUnitsSourceValue.getText());
    }

    @And("^I should see all conversion units$")
    public void iShouldSeeAllConversionUnits() {
        List<WebElement> allUnitsSingleUnitName = (List<WebElement>) driver.findElementsById("all_units_single_unit_name");
        List<WebElement> allUnitsSingleUnitValue = (List<WebElement>) driver.findElementsById("all_units_single_unit_value");
        Assert.assertTrue(allUnitsSingleUnitName.size()>0);
        Assert.assertTrue(allUnitsSingleUnitValue.size()>0);
    }

    @When("^I select \"([^\"]*)\" in the source dropdown$")
    public void iSelectInTheSourceDropdown(String sourceUnit) throws Throwable {
        By elementLocator;
        elementLocator = By.id("select_unit_spinner");
        MobileElement sourceDropdown = (MobileElement) driver.findElements(elementLocator).get(0);
        sourceDropdown.click();
        MobileElement unitToSelectForSource = (MobileElement) driver.findElement(AndroidUIAutomator("new UiScrollable(new UiSelector().resourceId(\"android:id/select_dialog_listview\")).getChildByText("+ "new UiSelector().className(\"android.widget.TextView\"), \""+sourceUnit+"\")"));
        unitToSelectForSource.click();
        try {
            wait.until(visibilityOfAllElementsLocatedBy(elementLocator));
        } catch (Exception e) {
            e.printStackTrace();
        }
        assertEquals(sourceUnit, driver.findElements(elementLocator).get(0).getText());
    }

    @When("^I select \"([^\"]*)\" in the target dropdown$")
    public void iSelectInTheTargetDropdown(String targetUnit) throws Throwable {
        By elementLocator;
        elementLocator = By.id("select_unit_spinner");
        MobileElement targetDropdown = (MobileElement) driver.findElements(elementLocator).get(1);
        targetDropdown.click();
        MobileElement unitToSelectForTarget = (MobileElement) driver.findElement(AndroidUIAutomator("new UiScrollable(new UiSelector().resourceId(\"android:id/select_dialog_listview\")).getChildByText("+ "new UiSelector().className(\"android.widget.TextView\"), \""+targetUnit+"\")"));
        unitToSelectForTarget.click();
        try {
            wait.until(visibilityOfAllElementsLocatedBy(elementLocator));
        } catch (Exception e) {
            e.printStackTrace();
        }
        assertEquals(targetUnit, driver.findElements(elementLocator).get(1).getText());
    }

    @And("^I go to Speed converter$")
    public void iGoToSpeedConverter() {
        By menuButtonLocator = new ByAccessibilityId("Open navigation drawer");
        MobileElement menu = (MobileElement) driver.findElement(menuButtonLocator);
        menu.click();
        By backButtonLocator = new ByAccessibilityId("Close navigation drawer");
        try {
            wait.until(ExpectedConditions.presenceOfElementLocated(backButtonLocator));
        } catch (Exception e) {
            e.printStackTrace();
        };
        MobileElement speedSelector = (MobileElement) driver.findElement(AndroidUIAutomator("new UiScrollable(new UiSelector().resourceId(\"com.ba.universalconverter:id/category_list_drawer\")).getChildByText("+ "new UiSelector().className(\"android.widget.TextView\"), \"Speed\")"));
        speedSelector.click();
        try {
            wait.until(ExpectedConditions.presenceOfElementLocated(menuButtonLocator));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @After
    public void close(){
        BaseAppium baseAppium = new BaseAppium();
        baseAppium.tearDown();
        baseAppium.stopAppiumServer();
    }

}
