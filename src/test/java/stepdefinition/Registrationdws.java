package stepdefinition;

import java.util.List;
//import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import framework.Demoworkshopmethods;
import page.RegistrationPage;
//import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;



public class Registrationdws {
	WebDriver driver;
	RegistrationPage rpfobj;
	
	/*@Before
	public void openBrowsser() {
	System.setProperty("webdriver.chrome.driver", "C:\\Users\\himav\\Downloads\\selenium all files\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.manage().window().maximize();
	rpfobj = new RegistrationPageFactory(driver);
	rpfobj = PageFactory.initElements(driver,RegistrationPageFactory.class );


	}*/

	@Given("^User is on Demo webshop registration page$")
	public void user_is_on_Demo_webshop_registration_page() throws Throwable {
		driver=Demoworkshopmethods.startBrowser();
	    driver.get("http://demowebshop.tricentis.com/");
	    rpfobj = new RegistrationPage(driver);
	    rpfobj.registerlink.click()
;	}

	@When("^user enters Gender,valid First name,Valid Last name,valid password and matching confirmPassword$")
	public void user_enters_Gender_valid_First_name_Valid_Last_name_valid_password_and_matching_confirmPassword() throws Throwable {
	    rpfobj.setFemale(); Thread.sleep(1000);
	    rpfobj.setFirstName("Suchita"); Thread.sleep(1000);
	    rpfobj.setLastName("Malireddy"); Thread.sleep(1000);
	    rpfobj.setEmail("suchitamalireddy26@gmail.com");Thread.sleep(1000);
	    rpfobj.setPassword("suchita123");Thread.sleep(1000);
	    rpfobj.setConfirmPassword("suchita123");Thread.sleep(1000);
	   // rpfobj.submit();
	}

	@Then("^Message displayed Registration Successful$")
	public void message_displayed_Registration_Successful() throws Throwable {
		rpfobj.submit();
		Thread.sleep(1000);
		driver.close();
	}

	@Given("^User is on Demo webshop Registration page$")
	public void user_is_on_Demo_webshop_Registration_page() throws Throwable {
		driver=Demoworkshopmethods.startBrowser();
		 driver.get("http://demowebshop.tricentis.com/");
		 rpfobj = new RegistrationPage(driver);
		    rpfobj.registerlink.click();
	    
	}

	@When("^user leaves first Name blank$")
	public void user_leaves_first_Name_blank() throws Throwable {
		rpfobj.setFemale(); Thread.sleep(1000);
	   // rpfobj.setFirstName("Himavarshini"); Thread.sleep(1000);
	    rpfobj.setLastName("Malireddy"); Thread.sleep(1000);
	    rpfobj.setEmail("suchitamalireddy26@gmail.com");Thread.sleep(1000);
	    rpfobj.setPassword("suchita123");Thread.sleep(1000);
	    rpfobj.setConfirmPassword("suchita123");Thread.sleep(1000);
	    
	    
	}

	@When("^clicks the button$")
	public void clicks_the_button() throws Throwable {
		rpfobj.submit();
	}

	@Then("^display alert msg$")
	public void display_alert_msg() throws Throwable {
		List<String> msgs=rpfobj.textRegistration();
		Thread.sleep(1000);
		msgs.contains("First name is required.");
	    driver.close();
	}

	@When("^user leaves last Name blank$")
	public void user_leaves_last_Name_blank() throws Throwable {
		 rpfobj.setFemale(); Thread.sleep(1000);
		    rpfobj.setFirstName("Suchita"); Thread.sleep(1000);
		  //  rpfobj.setLastName("Katakam"); Thread.sleep(1000);
		    rpfobj.setEmail("suchitamalireddy26@gmail.com");Thread.sleep(1000);
		    rpfobj.setPassword("suchita123");Thread.sleep(1000);
		    rpfobj.setConfirmPassword("suchita123");Thread.sleep(1000);
		    
	}
	@Then("^display alert last name msg$")
	public void display_alert_last_name_msg() throws Throwable {
		List<String> msgs=rpfobj.textRegistration();
		Thread.sleep(1000);
		msgs.contains("Last name is required.");
	    driver.close();
	}
	
	

	@When("^user enters invalid email id$")
	public void user_enters_invalid_email_id() throws Throwable {
		 rpfobj.setFemale(); Thread.sleep(1000);
		    rpfobj.setFirstName("Suchita"); Thread.sleep(1000);
		    rpfobj.setLastName("Malireddy"); Thread.sleep(1000);
		    rpfobj.setEmail("suchitamalireddy26");Thread.sleep(1000);
		    rpfobj.setPassword("suchita123");Thread.sleep(1000);
		    rpfobj.setConfirmPassword("suchita123");Thread.sleep(1000);
		   
	}

	@Then("^display alert invalid email format msg$")
	public void display_alert_invalid_email_format_msg() throws Throwable {
		String msg=rpfobj.emailFormat();
		Thread.sleep(1000);
		Assert.assertEquals(msg, "Wrong email");
	    driver.close();
	} 
	
	@When("^user leaves Email id blank$")
	public void user_leaves_Email_id_blank() throws Throwable {
		 rpfobj.setFemale(); Thread.sleep(1000);
		    rpfobj.setFirstName("Suchita"); Thread.sleep(1000);
		    rpfobj.setLastName("Malireddy"); Thread.sleep(1000);
		  //  rpfobj.setEmail("suchitamalireddy26@gmail.com");Thread.sleep(1000);
		    rpfobj.setPassword("suchita123");Thread.sleep(1000);
		    rpfobj.setConfirmPassword("suchita123");Thread.sleep(1000);
		    
	}
	
	@Then("^display alert email msg$")
	public void display_alert_email_msg() throws Throwable {
		List<String> msgs=rpfobj.textRegistration();
		Thread.sleep(1000);
		msgs.contains("Email is required.");
	    driver.close();
	} 

	@When("^user leaves confirm password blank$")
	public void user_leaves_confirm_password_blank() throws Throwable {
		 rpfobj.setFemale(); Thread.sleep(1000);
		    rpfobj.setFirstName("Suchita"); Thread.sleep(1000);
		    rpfobj.setLastName("Malireddy"); Thread.sleep(1000);
		    rpfobj.setEmail("suchitamalireddy26@gmail.com");Thread.sleep(1000);
		    rpfobj.setPassword("suchita123");Thread.sleep(1000);
		   // rpfobj.setConfirmPassword("himavarshini123");Thread.sleep(1000);
		    
	}
	@Then("^display alert password msg$")
	public void display_password_msg() throws Throwable {
		List<String> msgs=rpfobj.textRegistration();
		Thread.sleep(1000);
		msgs.contains("Email is required.");
	    driver.close();
	} 


}
