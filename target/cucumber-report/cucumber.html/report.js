$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchResultsFilter.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As a user\nI want to filter search results\nTo spend less time on searching for specific product",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "",
  "description": "",
  "id": ";",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@MaxAndMinPriceScenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the \"http://pn.com.ua\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I choose \"\u003ccategory\u003e\" as products category",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I choose \"\u003csubcategory\u003e\" as products subcategory",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I set maximum price to \"\u003cmaxPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I set minimum price to \"\u003cminPrice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see correct result",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": ";;",
  "rows": [
    {
      "cells": [
        "category",
        "subcategory",
        "minPrice",
        "maxPrice"
      ],
      "line": 16,
      "id": ";;;1"
    },
    {
      "cells": [
        "Компьютеры",
        "Настольные компьютеры",
        "3000",
        "6000"
      ],
      "line": 17,
      "id": ";;;2"
    },
    {
      "cells": [
        "Авто",
        "Мотоциклы",
        "20000",
        "40000"
      ],
      "line": 18,
      "id": ";;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6382720105,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": ";;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@MaxAndMinPriceScenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the \"http://pn.com.ua\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I choose \"Компьютеры\" as products category",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I choose \"Настольные компьютеры\" as products subcategory",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I set maximum price to \"6000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I set minimum price to \"3000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see correct result",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://pn.com.ua",
      "offset": 13
    }
  ],
  "location": "StepDefsHolder.I_am_on_the_site(String)"
});
formatter.result({
  "duration": 2342102207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Компьютеры",
      "offset": 10
    }
  ],
  "location": "StepDefsHolder.I_choose_as_products_category(String)"
});
formatter.result({
  "duration": 1233227972,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Настольные компьютеры",
      "offset": 10
    }
  ],
  "location": "StepDefsHolder.I_choose_as_products_subcategory(String)"
});
formatter.result({
  "duration": 3906697007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6000",
      "offset": 24
    }
  ],
  "location": "StepDefsHolder.I_set_maximum_price_to(String)"
});
formatter.result({
  "duration": 259125298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 24
    }
  ],
  "location": "StepDefsHolder.I_set_minimum_price_to(String)"
});
formatter.result({
  "duration": 2021654239,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHolder.I_see_correct_result()"
});
formatter.result({
  "duration": 1884580865,
  "status": "passed"
});
formatter.after({
  "duration": 553529030,
  "status": "passed"
});
formatter.before({
  "duration": 5476973526,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": ";;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@MaxAndMinPriceScenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the \"http://pn.com.ua\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I choose \"Авто\" as products category",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I choose \"Мотоциклы\" as products subcategory",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I set maximum price to \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I set minimum price to \"20000\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I see correct result",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://pn.com.ua",
      "offset": 13
    }
  ],
  "location": "StepDefsHolder.I_am_on_the_site(String)"
});
formatter.result({
  "duration": 1982419483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Авто",
      "offset": 10
    }
  ],
  "location": "StepDefsHolder.I_choose_as_products_category(String)"
});
formatter.result({
  "duration": 1370587790,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Мотоциклы",
      "offset": 10
    }
  ],
  "location": "StepDefsHolder.I_choose_as_products_subcategory(String)"
});
formatter.result({
  "duration": 2511878589,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 24
    }
  ],
  "location": "StepDefsHolder.I_set_maximum_price_to(String)"
});
formatter.result({
  "duration": 279495192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 24
    }
  ],
  "location": "StepDefsHolder.I_set_minimum_price_to(String)"
});
formatter.result({
  "duration": 4021684391,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHolder.I_see_correct_result()"
});
formatter.result({
  "duration": 332350935,
  "status": "passed"
});
formatter.after({
  "duration": 386698239,
  "status": "passed"
});
formatter.before({
  "duration": 6232444663,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "",
  "id": ";",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@ManufacturerScenario"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on the \"http://pn.com.ua\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I choose \"Компьютеры\" as products category",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I choose \"Настольные компьютеры\" as products subcategory",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I choose \"ASUS\" as manufacturer",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I see that products quantity equals to one mentioned on the page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://pn.com.ua",
      "offset": 13
    }
  ],
  "location": "StepDefsHolder.I_am_on_the_site(String)"
});
formatter.result({
  "duration": 2156649694,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Компьютеры",
      "offset": 10
    }
  ],
  "location": "StepDefsHolder.I_choose_as_products_category(String)"
});
formatter.result({
  "duration": 1696459583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Настольные компьютеры",
      "offset": 10
    }
  ],
  "location": "StepDefsHolder.I_choose_as_products_subcategory(String)"
});
formatter.result({
  "duration": 1812805409,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ASUS",
      "offset": 10
    }
  ],
  "location": "StepDefsHolder.I_choose(String)"
});
formatter.result({
  "duration": 367989589,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHolder.I_see_that_products_quantity_equals_to_one_mentioned_on_the_page()"
});
formatter.result({
  "duration": 1247768274,
  "status": "passed"
});
formatter.after({
  "duration": 389208870,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "",
  "description": "",
  "id": ";",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@CheapestProductSearch"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on the \"http://pn.com.ua\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I choose \"\u003ccategory\u003e\" as products category",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I choose \"\u003csubcategory\u003e\" as products subcategory",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I sort products by price",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I get the cheapest product\u0027s name",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I search that product by name",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I see that product",
  "keyword": "Then "
});
formatter.examples({
  "line": 38,
  "name": "",
  "description": "",
  "id": ";;",
  "rows": [
    {
      "cells": [
        "category",
        "subcategory"
      ],
      "line": 39,
      "id": ";;;1"
    },
    {
      "cells": [
        "Компьютеры",
        "Настольные компьютеры"
      ],
      "line": 40,
      "id": ";;;2"
    },
    {
      "cells": [
        "Авто",
        "Мотоциклы"
      ],
      "line": 41,
      "id": ";;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5762546262,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "",
  "description": "",
  "id": ";;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@CheapestProductSearch"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on the \"http://pn.com.ua\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I choose \"Компьютеры\" as products category",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I choose \"Настольные компьютеры\" as products subcategory",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I sort products by price",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I get the cheapest product\u0027s name",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I search that product by name",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I see that product",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://pn.com.ua",
      "offset": 13
    }
  ],
  "location": "StepDefsHolder.I_am_on_the_site(String)"
});
formatter.result({
  "duration": 2550619046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Компьютеры",
      "offset": 10
    }
  ],
  "location": "StepDefsHolder.I_choose_as_products_category(String)"
});
formatter.result({
  "duration": 2080641095,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Настольные компьютеры",
      "offset": 10
    }
  ],
  "location": "StepDefsHolder.I_choose_as_products_subcategory(String)"
});
formatter.result({
  "duration": 2074474057,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHolder.I_sort_products_by_price()"
});
formatter.result({
  "duration": 230811325,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHolder.I_get_the_cheapest_product_s_name()"
});
formatter.result({
  "duration": 1417826287,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHolder.I_search_that_product_by_name()"
});
formatter.result({
  "duration": 1011768246,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHolder.I_see_that_product()"
});
formatter.result({
  "duration": 1773883078,
  "status": "passed"
});
formatter.after({
  "duration": 480820467,
  "status": "passed"
});
formatter.before({
  "duration": 5533644775,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "",
  "description": "",
  "id": ";;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@CheapestProductSearch"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on the \"http://pn.com.ua\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I choose \"Авто\" as products category",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I choose \"Мотоциклы\" as products subcategory",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I sort products by price",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I get the cheapest product\u0027s name",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I search that product by name",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I see that product",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://pn.com.ua",
      "offset": 13
    }
  ],
  "location": "StepDefsHolder.I_am_on_the_site(String)"
});
formatter.result({
  "duration": 1936863401,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Авто",
      "offset": 10
    }
  ],
  "location": "StepDefsHolder.I_choose_as_products_category(String)"
});
formatter.result({
  "duration": 1661129826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Мотоциклы",
      "offset": 10
    }
  ],
  "location": "StepDefsHolder.I_choose_as_products_subcategory(String)"
});
formatter.result({
  "duration": 1940620848,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHolder.I_sort_products_by_price()"
});
formatter.result({
  "duration": 285021661,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHolder.I_get_the_cheapest_product_s_name()"
});
formatter.result({
  "duration": 1817838541,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHolder.I_search_that_product_by_name()"
});
formatter.result({
  "duration": 2642484688,
  "status": "passed"
});
formatter.match({
  "location": "StepDefsHolder.I_see_that_product()"
});
formatter.result({
  "duration": 58639787,
  "status": "passed"
});
formatter.after({
  "duration": 409895039,
  "status": "passed"
});
});