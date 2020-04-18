# appiumTests

Automated testing for Android application using Appium and Cucumber. 

# Running tests
Before running tests, you need to start android emulator or connect physical device and modify capabilities, change Desired Capabilities in BaseAppium.java file. 

Use Runner to execute all tests. 

You don't need to start appium server, it will start programmatically by using AppiumServiceBuilder.

# Reports
HTML reports available in /target/cucumber/index.html
