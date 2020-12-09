$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("logindws.feature");
formatter.feature({
  "line": 1,
  "name": "login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Succesful login on entering valid Email and password",
  "description": "",
  "id": "login;succesful-login-on-entering-valid-email-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SuccessfulLogin"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Demo webshop Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enters the valid email and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user is navigated to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Logindws.user_is_on_Demo_webshop_Login_page()"
});
formatter.result({
  "duration": 9578968000,
  "status": "passed"
});
formatter.match({
  "location": "Logindws.user_enters_the_valid_email_and_password()"
});
formatter.result({
  "duration": 2339959200,
  "status": "passed"
});
formatter.match({
  "location": "Logindws.clicks_the_button()"
});
formatter.result({
  "duration": 4210680600,
  "status": "passed"
});
formatter.match({
  "location": "Logindws.user_is_navigated_to_home_page()"
});
formatter.result({
  "duration": 997387900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Unsuccesful login on entering valid Email and invalid password",
  "description": "",
  "id": "login;unsuccesful-login-on-entering-valid-email-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@UnsuccessfulLogin"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on Demo webshop Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user enters the valid email and invalid password",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "display alert message",
  "keyword": "Then "
});
formatter.match({
  "location": "Logindws.user_is_on_Demo_webshop_Login_page()"
});
formatter.result({
  "duration": 15815474600,
  "status": "passed"
});
formatter.match({
  "location": "Logindws.user_enters_the_valid_email_and_invalid_password()"
});
formatter.result({
  "duration": 2330880400,
  "status": "passed"
});
formatter.match({
  "location": "Logindws.clicks_the_button()"
});
formatter.result({
  "duration": 5090816000,
  "status": "passed"
});
formatter.match({
  "location": "Logindws.display_alert_message()"
});
formatter.result({
  "duration": 1412550400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Unsuccesful login on entering invalid email and invalid password",
  "description": "",
  "id": "login;unsuccesful-login-on-entering-invalid-email-and-invalid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@UnsuccessfulLogin"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User is on Demo webshop Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user enters the invlid email and password",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "display alert message",
  "keyword": "Then "
});
formatter.match({
  "location": "Logindws.user_is_on_Demo_webshop_Login_page()"
});
formatter.result({
  "duration": 10245541800,
  "status": "passed"
});
formatter.match({
  "location": "Logindws.user_enters_the_invlid_email_and_password()"
});
formatter.result({
  "duration": 2195599100,
  "status": "passed"
});
formatter.match({
  "location": "Logindws.clicks_the_button()"
});
formatter.result({
  "duration": 3675194300,
  "status": "passed"
});
formatter.match({
  "location": "Logindws.display_alert_message()"
});
formatter.result({
  "duration": 1444766800,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Unsuccesful login on entering invalid email and valid password",
  "description": "",
  "id": "login;unsuccesful-login-on-entering-invalid-email-and-valid-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@UnsuccessfulLogin"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "User is on Demo webshop Login page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "user enters the invlid email and valid password",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "clicks the login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "display alert message",
  "keyword": "Then "
});
formatter.match({
  "location": "Logindws.user_is_on_Demo_webshop_Login_page()"
});
formatter.result({
  "duration": 9730995700,
  "status": "passed"
});
formatter.match({
  "location": "Logindws.user_enters_the_invlid_email_and_valid_password()"
});
formatter.result({
  "duration": 2265983500,
  "status": "passed"
});
formatter.match({
  "location": "Logindws.clicks_the_button()"
});
formatter.result({
  "duration": 3567678800,
  "status": "passed"
});
formatter.match({
  "location": "Logindws.display_alert_message()"
});
formatter.result({
  "duration": 1444298700,
  "status": "passed"
});
formatter.uri("registrationdws.feature");
formatter.feature({
  "line": 1,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "User is on home page of the Demo Web Shop and Registration link is avaialble.",
  "description": "user has also clicked on the registration link",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "Successful Regisration with valid data",
  "description": "Description: to register, user needs to enter his Gender,First name,Last name,Email,password \u0026 confirm password",
  "id": "registration;successful-regisration-with-valid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@SuccessfulRegistration"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on Demo webshop registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user enters Gender,valid First name,Valid Last name,valid password and matching confirmPassword",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Message displayed Registration Successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationdws.user_is_on_Demo_webshop_registration_page()"
});
formatter.result({
  "duration": 13471181400,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.user_enters_Gender_valid_First_name_Valid_Last_name_valid_password_and_matching_confirmPassword()"
});
formatter.result({
  "duration": 6990092600,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.message_displayed_Registration_Successful()"
});
formatter.result({
  "duration": 2336197900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on home page of the Demo Web Shop and Registration link is avaialble.",
  "description": "user has also clicked on the registration link",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "Failure in Registration on leaving the first Name empty",
  "description": "",
  "id": "registration;failure-in-registration-on-leaving-the-first-name-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@SuccessfulRegistration"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on Demo webshop Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user leaves first Name blank",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "clicks the button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "display alert msg",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationdws.user_is_on_Demo_webshop_Registration_page()"
});
formatter.result({
  "duration": 9238714300,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.user_leaves_first_Name_blank()"
});
formatter.result({
  "duration": 5575586000,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.clicks_the_button()"
});
formatter.result({
  "duration": 157880200,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.display_alert_msg()"
});
formatter.result({
  "duration": 11347768000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on home page of the Demo Web Shop and Registration link is avaialble.",
  "description": "user has also clicked on the registration link",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 18,
  "name": "Failure in Registration on leaving the Last Name empty",
  "description": "",
  "id": "registration;failure-in-registration-on-leaving-the-last-name-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@SuccessfulRegistration"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on Demo webshop Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "user leaves last Name blank",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "clicks the button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "display alert last name msg",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationdws.user_is_on_Demo_webshop_Registration_page()"
});
formatter.result({
  "duration": 8799479800,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.user_leaves_last_Name_blank()"
});
formatter.result({
  "duration": 5573741500,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.clicks_the_button()"
});
formatter.result({
  "duration": 194430000,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.display_alert_last_name_msg()"
});
formatter.result({
  "duration": 11364264300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on home page of the Demo Web Shop and Registration link is avaialble.",
  "description": "user has also clicked on the registration link",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 24,
  "name": "Failure in Registration on entering incorrect email format",
  "description": "",
  "id": "registration;failure-in-registration-on-entering-incorrect-email-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@SuccessfulRegistration"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User is on Demo webshop Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "user enters invalid email id",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "clicks the button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "display alert invalid email format msg",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationdws.user_is_on_Demo_webshop_Registration_page()"
});
formatter.result({
  "duration": 11172604500,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.user_enters_invalid_email_id()"
});
formatter.result({
  "duration": 6733728300,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.clicks_the_button()"
});
formatter.result({
  "duration": 139541100,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.display_alert_invalid_email_format_msg()"
});
formatter.result({
  "duration": 1444273200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on home page of the Demo Web Shop and Registration link is avaialble.",
  "description": "user has also clicked on the registration link",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 30,
  "name": "Failure in Registration on leaving the Email id empty",
  "description": "",
  "id": "registration;failure-in-registration-on-leaving-the-email-id-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@SuccessfulRegistration"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "User is on Demo webshop Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "user leaves Email id blank",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "clicks the button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "display alert email msg",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationdws.user_is_on_Demo_webshop_Registration_page()"
});
formatter.result({
  "duration": 9654266800,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.user_leaves_Email_id_blank()"
});
formatter.result({
  "duration": 5656414000,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.clicks_the_button()"
});
formatter.result({
  "duration": 168985400,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.display_alert_email_msg()"
});
formatter.result({
  "duration": 11422597100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "User is on home page of the Demo Web Shop and Registration link is avaialble.",
  "description": "user has also clicked on the registration link",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 36,
  "name": "Failure in Registration on leaving the confirm password empty",
  "description": "",
  "id": "registration;failure-in-registration-on-leaving-the-confirm-password-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@UnsuccessfulRegistration"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "User is on Demo webshop Registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "user leaves confirm password blank",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "clicks the button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "display alert password msg",
  "keyword": "Then "
});
formatter.match({
  "location": "Registrationdws.user_is_on_Demo_webshop_Registration_page()"
});
formatter.result({
  "duration": 8991404200,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.user_leaves_confirm_password_blank()"
});
formatter.result({
  "duration": 5536405400,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.clicks_the_button()"
});
formatter.result({
  "duration": 168446500,
  "status": "passed"
});
formatter.match({
  "location": "Registrationdws.display_password_msg()"
});
formatter.result({
  "duration": 11409951200,
  "status": "passed"
});
formatter.uri("updateshoppingcartdws.feature");
formatter.feature({
  "line": 1,
  "name": "UpdateCart",
  "description": "",
  "id": "updatecart",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "User is logged in to the website using valid credentials",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 5,
  "name": "− Successful adding an item to the cart",
  "description": "Description: This feature will test successful Add to cart functionality",
  "id": "updatecart;−-successful-adding-an-item-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Update"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User clicks on books link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "selects a book to add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "click on Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "item is added to cart successfully",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User is on the shopping cart page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "the user selects the items on remove",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "clicks on the update button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Cart should be updated",
  "keyword": "Then "
});
formatter.match({
  "location": "UpdateShoppingCart.user_is_on_home_page()"
});
formatter.result({
  "duration": 9050209900,
  "status": "passed"
});
formatter.match({
  "location": "UpdateShoppingCart.user_clicks_on_books_link()"
});
formatter.result({
  "duration": 893996400,
  "status": "passed"
});
formatter.match({
  "location": "UpdateShoppingCart.selects_a_book_to_add_to_cart()"
});
formatter.result({
  "duration": 4011376200,
  "status": "passed"
});
formatter.match({
  "location": "UpdateShoppingCart.click_on_Add_to_cart()"
});
formatter.result({
  "duration": 127177000,
  "status": "passed"
});
formatter.match({
  "location": "UpdateShoppingCart.item_is_added_to_cart_successfully()"
});
formatter.result({
  "duration": 322771100,
  "status": "passed"
});
formatter.match({
  "location": "UpdateShoppingCart.user_is_on_the_shopping_cart_page()"
});
formatter.result({
  "duration": 525616500,
  "status": "passed"
});
formatter.match({
  "location": "UpdateShoppingCart.the_user_selects_the_items_on_remove()"
});
formatter.result({
  "duration": 244298100,
  "status": "passed"
});
formatter.match({
  "location": "UpdateShoppingCart.clicks_on_the_update_button()"
});
formatter.result({
  "duration": 731074400,
  "status": "passed"
});
formatter.match({
  "location": "UpdateShoppingCart.cart_should_be_updated()"
});
formatter.result({
  "duration": 72267700,
  "status": "passed"
});
});