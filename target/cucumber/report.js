$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("convertLength.feature");
formatter.feature({
  "line": 1,
  "name": "Convert length",
  "description": "User should be able to convert lengths from one unit to another",
  "id": "convert-length",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Convert from foot to centimeter",
  "description": "",
  "id": "convert-length;convert-from-foot-to-centimeter",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I see converter from \"Foot\" to \"Centimeter\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I tap \"\u003cnumber\u003e\" in the number pad",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see \"\u003cnumber\u003e\" and \"ft\" in the source",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the result \"\u003cresult\u003e\" and \"cm\" in the target",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "convert-length;convert-from-foot-to-centimeter;",
  "rows": [
    {
      "cells": [
        "number",
        "result"
      ],
      "line": 14,
      "id": "convert-length;convert-from-foot-to-centimeter;;1"
    },
    {
      "cells": [
        "5",
        "152.4"
      ],
      "line": 15,
      "id": "convert-length;convert-from-foot-to-centimeter;;2"
    },
    {
      "cells": [
        "9",
        "274.32"
      ],
      "line": 16,
      "id": "convert-length;convert-from-foot-to-centimeter;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 26845012975,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Convert from foot to centimeter",
  "description": "",
  "id": "convert-length;convert-from-foot-to-centimeter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I see converter from \"Foot\" to \"Centimeter\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I tap \"5\" in the number pad",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see \"5\" and \"ft\" in the source",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the result \"152.4\" and \"cm\" in the target",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Foot",
      "offset": 22
    },
    {
      "val": "Centimeter",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 2937330512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1532917194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    },
    {
      "val": "ft",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 1820952563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "152.4",
      "offset": 25
    },
    {
      "val": "cm",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 1137140862,
  "status": "passed"
});
formatter.after({
  "duration": 2553261211,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 17092065604,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Convert from foot to centimeter",
  "description": "",
  "id": "convert-length;convert-from-foot-to-centimeter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "I see converter from \"Foot\" to \"Centimeter\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I tap \"9\" in the number pad",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see \"9\" and \"ft\" in the source",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see the result \"274.32\" and \"cm\" in the target",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Foot",
      "offset": 22
    },
    {
      "val": "Centimeter",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 2684490229,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1203063304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 14
    },
    {
      "val": "ft",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 1659797841,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "274.32",
      "offset": 25
    },
    {
      "val": "cm",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 1286566847,
  "status": "passed"
});
formatter.after({
  "duration": 3964656962,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 17249017229,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Switch length units",
  "description": "",
  "id": "convert-length;switch-length-units",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I see converter from \"Foot\" to \"Centimeter\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I tap \"5\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I tap in \"switch\" button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I see converter from \"Centimeter\" to \"Foot\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should see \"5\" and \"cm\" in the source",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I should see the result \"0.164\" and \"ft\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Foot",
      "offset": 22
    },
    {
      "val": "Centimeter",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 2288378770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1614948807,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "switch",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iTapInButton(String)"
});
formatter.result({
  "duration": 1568585974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Centimeter",
      "offset": 22
    },
    {
      "val": "Foot",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 898349509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    },
    {
      "val": "cm",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 2105526231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.164",
      "offset": 25
    },
    {
      "val": "ft",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 1764198325,
  "status": "passed"
});
formatter.after({
  "duration": 3711502429,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 15621869369,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Show all length conversions",
  "description": "",
  "id": "convert-length;show-all-length-conversions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I see converter from \"Foot\" to \"Centimeter\"",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I tap \"5\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I tap in \"Show All\" button",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I should see the title with \"Foot (ft)\" and \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I should see all conversion units",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Foot",
      "offset": 22
    },
    {
      "val": "Centimeter",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 1419936161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 2011370278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iTapInButton(String)"
});
formatter.result({
  "duration": 860359232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Foot (ft)",
      "offset": 29
    },
    {
      "val": "5",
      "offset": 45
    }
  ],
  "location": "StepDefinitions.iShouldSeeTheTitleWithAnd(String,String)"
});
formatter.result({
  "duration": 3678131810,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.iShouldSeeAllConversionUnits()"
});
formatter.result({
  "duration": 219900962,
  "status": "passed"
});
formatter.after({
  "duration": 2339930871,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 18422666478,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Delete value",
  "description": "",
  "id": "convert-length;delete-value",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I see converter from \"Foot\" to \"Centimeter\"",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I tap \"5\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I tap \"6\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I tap in \"C\" button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I should see \"1\" and \"ft\" in the source",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should see the result \"30.48\" and \"cm\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Foot",
      "offset": 22
    },
    {
      "val": "Centimeter",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 2193069217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1370437157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1034624990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iTapInButton(String)"
});
formatter.result({
  "duration": 2357185638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    },
    {
      "val": "ft",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 2251532514,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30.48",
      "offset": 25
    },
    {
      "val": "cm",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 1008428092,
  "status": "passed"
});
formatter.after({
  "duration": 3661063227,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 16657340052,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Change first unit of conversion",
  "description": "",
  "id": "convert-length;change-first-unit-of-conversion",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 42,
  "name": "I see converter from \"Foot\" to \"Centimeter\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I select \"Millimeter\" in the source dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I should see in the \"source\" dropdown \"Millimeter\"",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I should see \"1\" and \"mm\" in the source",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Foot",
      "offset": 22
    },
    {
      "val": "Centimeter",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 2476629206,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Millimeter",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheSourceDropdown(String)"
});
formatter.result({
  "duration": 16194751427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "source",
      "offset": 21
    },
    {
      "val": "Millimeter",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.iShouldSeeInTheDropdown(String,String)"
});
formatter.result({
  "duration": 209260056,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    },
    {
      "val": "mm",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 2694741690,
  "status": "passed"
});
formatter.after({
  "duration": 1912849582,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 17392106773,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Change second unit of conversion",
  "description": "",
  "id": "convert-length;change-second-unit-of-conversion",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 48,
  "name": "I see converter from \"Foot\" to \"Centimeter\"",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "I select \"Meter\" in the target dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I should see in the \"target\" dropdown \"Meter\"",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I should see the result \"0.3048\" and \"m\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Foot",
      "offset": 22
    },
    {
      "val": "Centimeter",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 2834543125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meter",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheTargetDropdown(String)"
});
formatter.result({
  "duration": 7907107151,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "target",
      "offset": 21
    },
    {
      "val": "Meter",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.iShouldSeeInTheDropdown(String,String)"
});
formatter.result({
  "duration": 184338051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.3048",
      "offset": 25
    },
    {
      "val": "m",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 2824097874,
  "status": "passed"
});
formatter.after({
  "duration": 3619383945,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 16111405757,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Convert number with more than one number",
  "description": "",
  "id": "convert-length;convert-number-with-more-than-one-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "I select \"Millimeter\" in the source dropdown",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I select \"Meter\" in the target dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I tap \"4\" in the number pad",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "I tap \"5\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I tap \"0\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I tap \"0\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I should see \"4500\" and \"mm\" in the source",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I should see the result \"4.5\" and \"m\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Millimeter",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheSourceDropdown(String)"
});
formatter.result({
  "duration": 14468019135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meter",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheTargetDropdown(String)"
});
formatter.result({
  "duration": 8706145326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1385344621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 2136963570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1326799957,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1913777303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4500",
      "offset": 14
    },
    {
      "val": "mm",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 1716159541,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4.5",
      "offset": 25
    },
    {
      "val": "m",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 1505094199,
  "status": "passed"
});
formatter.after({
  "duration": 3540811391,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 16172326442,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Correct input value",
  "description": "",
  "id": "convert-length;correct-input-value",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 64,
  "name": "I select \"Millimeter\" in the source dropdown",
  "keyword": "Given "
});
formatter.step({
  "line": 65,
  "name": "I select \"Meter\" in the target dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I tap \"4\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I tap \"5\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I tap \"0\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I tap \"0\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I tap in \"delete\" button",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I should see \"450\" and \"mm\" in the source",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "I should see the result \"0.45\" and \"m\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Millimeter",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheSourceDropdown(String)"
});
formatter.result({
  "duration": 14417093224,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meter",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheTargetDropdown(String)"
});
formatter.result({
  "duration": 9604953272,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 912702561,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 3208668125,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1208172070,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1236462137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iTapInButton(String)"
});
formatter.result({
  "duration": 665335525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "450",
      "offset": 14
    },
    {
      "val": "mm",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 2590490556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.45",
      "offset": 25
    },
    {
      "val": "m",
      "offset": 36
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 1256414009,
  "status": "passed"
});
formatter.after({
  "duration": 1454873477,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 17359051215,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Select same unit length",
  "description": "",
  "id": "convert-length;select-same-unit-length",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 75,
  "name": "I select \"Millimeter\" in the source dropdown",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "I select \"Meter\" in the target dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I tap \"4\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I tap \"5\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I tap \"0\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I select \"Millimeter\" in the target dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "I should see \"450\" and \"mm\" in the source",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "I should see the result \"450\" and \"mm\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Millimeter",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheSourceDropdown(String)"
});
formatter.result({
  "duration": 13770727641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meter",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheTargetDropdown(String)"
});
formatter.result({
  "duration": 10010509284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1501224393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 552592217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 2510877961,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Millimeter",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheTargetDropdown(String)"
});
formatter.result({
  "duration": 4381922571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "450",
      "offset": 14
    },
    {
      "val": "mm",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 1227532003,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "450",
      "offset": 25
    },
    {
      "val": "mm",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 1229915826,
  "status": "passed"
});
formatter.after({
  "duration": 3543362144,
  "status": "passed"
});
formatter.uri("convertSpeed.feature");
formatter.feature({
  "line": 1,
  "name": "Convert speed",
  "description": "User should be able to convert speeds from one unit of speed to another",
  "id": "convert-speed",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Convert from Mile per hour to Kilometer per hour",
  "description": "",
  "id": "convert-speed;convert-from-mile-per-hour-to-kilometer-per-hour",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I see converter from \"Mile per hour\" to \"Kilometer per hour\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I tap \"\u003cnumber\u003e\" in the number pad",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see \"\u003cnumber\u003e\" and \"mph\" in the source",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see the result \"\u003cresult\u003e\" and \"km/h\" in the target",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "convert-speed;convert-from-mile-per-hour-to-kilometer-per-hour;",
  "rows": [
    {
      "cells": [
        "number",
        "result"
      ],
      "line": 15,
      "id": "convert-speed;convert-from-mile-per-hour-to-kilometer-per-hour;;1"
    },
    {
      "cells": [
        "5",
        "8.04672"
      ],
      "line": 16,
      "id": "convert-speed;convert-from-mile-per-hour-to-kilometer-per-hour;;2"
    },
    {
      "cells": [
        "9",
        "14.4841"
      ],
      "line": 17,
      "id": "convert-speed;convert-from-mile-per-hour-to-kilometer-per-hour;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to Speed converter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 15983323253,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.iGoToSpeedConverter()"
});
formatter.result({
  "duration": 12326019067,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Convert from Mile per hour to Kilometer per hour",
  "description": "",
  "id": "convert-speed;convert-from-mile-per-hour-to-kilometer-per-hour;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I see converter from \"Mile per hour\" to \"Kilometer per hour\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I tap \"5\" in the number pad",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see \"5\" and \"mph\" in the source",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see the result \"8.04672\" and \"km/h\" in the target",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mile per hour",
      "offset": 22
    },
    {
      "val": "Kilometer per hour",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 1340188011,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1109732044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    },
    {
      "val": "mph",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 1854344899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8.04672",
      "offset": 25
    },
    {
      "val": "km/h",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 2240377054,
  "status": "passed"
});
formatter.after({
  "duration": 2894154247,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to Speed converter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 18893419903,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.iGoToSpeedConverter()"
});
formatter.result({
  "duration": 12972133193,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Convert from Mile per hour to Kilometer per hour",
  "description": "",
  "id": "convert-speed;convert-from-mile-per-hour-to-kilometer-per-hour;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "I see converter from \"Mile per hour\" to \"Kilometer per hour\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I tap \"9\" in the number pad",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see \"9\" and \"mph\" in the source",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should see the result \"14.4841\" and \"km/h\" in the target",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mile per hour",
      "offset": 22
    },
    {
      "val": "Kilometer per hour",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 1326862579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1655576314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 14
    },
    {
      "val": "mph",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 5539748966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "14.4841",
      "offset": 25
    },
    {
      "val": "km/h",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 2543869732,
  "status": "passed"
});
formatter.after({
  "duration": 3743409522,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to Speed converter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 17329155152,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.iGoToSpeedConverter()"
});
formatter.result({
  "duration": 14385761719,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Switch speed units",
  "description": "",
  "id": "convert-speed;switch-speed-units",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I see converter from \"Mile per hour\" to \"Kilometer per hour\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I tap \"5\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I tap in \"switch\" button",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I see converter from \"Kilometer per hour\" to \"Mile per hour\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I should see \"5\" and \"km/h\" in the source",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see the result \"3.1069\" and \"mph\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mile per hour",
      "offset": 22
    },
    {
      "val": "Kilometer per hour",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 250868848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1289260193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "switch",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iTapInButton(String)"
});
formatter.result({
  "duration": 1241286879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kilometer per hour",
      "offset": 22
    },
    {
      "val": "Mile per hour",
      "offset": 46
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 1542126180,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    },
    {
      "val": "km/h",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 2027513701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3.1069",
      "offset": 25
    },
    {
      "val": "mph",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 1428413090,
  "status": "passed"
});
formatter.after({
  "duration": 1785163811,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to Speed converter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 17367279833,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.iGoToSpeedConverter()"
});
formatter.result({
  "duration": 15234421860,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Show all length conversions",
  "description": "",
  "id": "convert-speed;show-all-length-conversions",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I see converter from \"Mile per hour\" to \"Kilometer per hour\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I tap \"5\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I tap in \"Show All\" button",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I should see the title with \"Mile per hour (mph)\" and \"5\"",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I should see all conversion units",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mile per hour",
      "offset": 22
    },
    {
      "val": "Kilometer per hour",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 1069570731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1211689701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Show All",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iTapInButton(String)"
});
formatter.result({
  "duration": 2250251350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mile per hour (mph)",
      "offset": 29
    },
    {
      "val": "5",
      "offset": 55
    }
  ],
  "location": "StepDefinitions.iShouldSeeTheTitleWithAnd(String,String)"
});
formatter.result({
  "duration": 2600785912,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.iShouldSeeAllConversionUnits()"
});
formatter.result({
  "duration": 415693622,
  "status": "passed"
});
formatter.after({
  "duration": 1678662195,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to Speed converter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 15784237196,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.iGoToSpeedConverter()"
});
formatter.result({
  "duration": 13623087394,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Delete value",
  "description": "",
  "id": "convert-speed;delete-value",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "I see converter from \"Mile per hour\" to \"Kilometer per hour\"",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I tap \"5\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I tap \"6\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I tap in \"C\" button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I should see \"1\" and \"mph\" in the source",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I should see the result \"1.6093\" and \"km/h\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mile per hour",
      "offset": 22
    },
    {
      "val": "Kilometer per hour",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 209241063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 2125753461,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 2069222052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iTapInButton(String)"
});
formatter.result({
  "duration": 1828406600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    },
    {
      "val": "mph",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 2518641995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.6093",
      "offset": 25
    },
    {
      "val": "km/h",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 1477227884,
  "status": "passed"
});
formatter.after({
  "duration": 3797876696,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to Speed converter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 17563016297,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.iGoToSpeedConverter()"
});
formatter.result({
  "duration": 12921050492,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Change first unit of conversion",
  "description": "",
  "id": "convert-speed;change-first-unit-of-conversion",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I see converter from \"Mile per hour\" to \"Kilometer per hour\"",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I select \"Kilometer per second\" in the source dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "I should see in the \"source\" dropdown \"Kilometer per second\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I should see \"1\" and \"km/s\" in the source",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I should see the result \"3 600\" and \"km/h\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mile per hour",
      "offset": 22
    },
    {
      "val": "Kilometer per hour",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 966620581,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kilometer per second",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheSourceDropdown(String)"
});
formatter.result({
  "duration": 12501478673,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "source",
      "offset": 21
    },
    {
      "val": "Kilometer per second",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.iShouldSeeInTheDropdown(String,String)"
});
formatter.result({
  "duration": 168436800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 14
    },
    {
      "val": "km/s",
      "offset": 22
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 1789176934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 600",
      "offset": 25
    },
    {
      "val": "km/h",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 2323065362,
  "status": "passed"
});
formatter.after({
  "duration": 4093883946,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to Speed converter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 15979055931,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.iGoToSpeedConverter()"
});
formatter.result({
  "duration": 13143327906,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Change second unit of conversion",
  "description": "",
  "id": "convert-speed;change-second-unit-of-conversion",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "I see converter from \"Mile per hour\" to \"Kilometer per hour\"",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "I select \"Meter per second\" in the target dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I should see in the \"target\" dropdown \"Meter per second\"",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I should see the result \"0.447\" and \"m/s\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Mile per hour",
      "offset": 22
    },
    {
      "val": "Kilometer per hour",
      "offset": 41
    }
  ],
  "location": "StepDefinitions.iSeeConverterFromTo(String,String)"
});
formatter.result({
  "duration": 1231135517,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meter per second",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheTargetDropdown(String)"
});
formatter.result({
  "duration": 6564432620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "target",
      "offset": 21
    },
    {
      "val": "Meter per second",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.iShouldSeeInTheDropdown(String,String)"
});
formatter.result({
  "duration": 146638363,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.447",
      "offset": 25
    },
    {
      "val": "m/s",
      "offset": 37
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 1659980238,
  "status": "passed"
});
formatter.after({
  "duration": 3667404042,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to Speed converter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 16652323341,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.iGoToSpeedConverter()"
});
formatter.result({
  "duration": 17059896412,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Convert number with more than one number",
  "description": "",
  "id": "convert-speed;convert-number-with-more-than-one-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "I select \"Meter per hour\" in the source dropdown",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "I select \"Mile per minute\" in the target dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I tap \"4\" in the number pad",
  "keyword": "When "
});
formatter.step({
  "line": 59,
  "name": "I tap \"5\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I tap \"0\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I tap \"0\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I should see \"4500\" and \"m/h\" in the source",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "I should see the result \"0.0466\" and \"mpm\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Meter per hour",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheSourceDropdown(String)"
});
formatter.result({
  "duration": 11398671508,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mile per minute",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheTargetDropdown(String)"
});
formatter.result({
  "duration": 10488724762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1739280845,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 764985920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1774502847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 899957050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4500",
      "offset": 14
    },
    {
      "val": "m/h",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 2515876015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.0466",
      "offset": 25
    },
    {
      "val": "mpm",
      "offset": 38
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 1289626143,
  "status": "passed"
});
formatter.after({
  "duration": 2029076258,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to Speed converter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 16373188685,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.iGoToSpeedConverter()"
});
formatter.result({
  "duration": 12902227915,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Correct input value",
  "description": "",
  "id": "convert-speed;correct-input-value",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 66,
  "name": "I select \"Meter per hour\" in the source dropdown",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "I select \"Mile per minute\" in the target dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I tap \"4\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I tap \"5\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I tap \"0\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I tap \"0\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I tap in \"delete\" button",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I should see \"450\" and \"m/h\" in the source",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I should see the result \"0.00466\" and \"mpm\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Meter per hour",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheSourceDropdown(String)"
});
formatter.result({
  "duration": 12521577933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mile per minute",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheTargetDropdown(String)"
});
formatter.result({
  "duration": 9725571033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1808236768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 962443557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1450573939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1150013316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "delete",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iTapInButton(String)"
});
formatter.result({
  "duration": 779224253,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "450",
      "offset": 14
    },
    {
      "val": "m/h",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 2390446658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.00466",
      "offset": 25
    },
    {
      "val": "mpm",
      "offset": 39
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 1519790153,
  "status": "passed"
});
formatter.after({
  "duration": 1534371100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Application is opened",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I go to Speed converter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.i_open_the_application()"
});
formatter.result({
  "duration": 15705802875,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.iGoToSpeedConverter()"
});
formatter.result({
  "duration": 13106439788,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Select same unit length",
  "description": "",
  "id": "convert-speed;select-same-unit-length",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 77,
  "name": "I select \"Meter per hour\" in the source dropdown",
  "keyword": "Given "
});
formatter.step({
  "line": 78,
  "name": "I select \"Mile per minute\" in the target dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I tap \"4\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I tap \"5\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I tap \"0\" in the number pad",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I select \"Meter per hour\" in the target dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 83,
  "name": "I should see \"450\" and \"m/h\" in the source",
  "keyword": "Then "
});
formatter.step({
  "line": 84,
  "name": "I should see the result \"450\" and \"m/h\" in the target",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Meter per hour",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheSourceDropdown(String)"
});
formatter.result({
  "duration": 12864521939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mile per minute",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheTargetDropdown(String)"
});
formatter.result({
  "duration": 9715585823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1136932448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 2049454223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 7
    }
  ],
  "location": "StepDefinitions.i_type_in_the_number_pad(String)"
});
formatter.result({
  "duration": 1523377382,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Meter per hour",
      "offset": 10
    }
  ],
  "location": "StepDefinitions.iSelectInTheTargetDropdown(String)"
});
formatter.result({
  "duration": 11016100730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "450",
      "offset": 14
    },
    {
      "val": "m/h",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.i_should_see_and_in_the_source(String,String)"
});
formatter.result({
  "duration": 1472068079,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "450",
      "offset": 25
    },
    {
      "val": "m/h",
      "offset": 35
    }
  ],
  "location": "StepDefinitions.i_should_see_the_result_and_in_the_target(String,String)"
});
formatter.result({
  "duration": 2010643259,
  "status": "passed"
});
formatter.after({
  "duration": 1602142749,
  "status": "passed"
});
});