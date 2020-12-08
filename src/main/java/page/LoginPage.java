package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import framework.Demoworkshopmethods;

public class LoginPage {
 WebDriver driver;
 
    @FindBy(id="Email")
	@CacheLookup
	WebElement emailid;
    
    @FindBy(linkText="Log in")
	@CacheLookup
	public
	WebElement loginlink;
    
    @FindBy(how=How.NAME, using="Password")
	@CacheLookup
	WebElement password;
    
    @FindBy(xpath="/html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[5]/input")
	@CacheLookup
	WebElement loginbutton;
    
    @FindBy(xpath="/html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[1]/div/span")
    @CacheLookup
    WebElement errormsg;
    
    public LoginPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
    
    public void setEmail(String emailid)
    {
    	Demoworkshopmethods.sendData(this.emailid, emailid);
    }
    
    public void setPassword(String password)
    {
    	Demoworkshopmethods.sendData(this.password, password);
    }
     
    public void submit()
    {
    	Demoworkshopmethods.clickButton(loginbutton);
    }
    
    public String textMessage()
    {
    	return(Demoworkshopmethods.Message(errormsg));
    	
    }
    public void successfullogin(String emailid,String password)
    {
    	Demoworkshopmethods.sendData(this.emailid, emailid);
    	Demoworkshopmethods.sendData(this.password, password);
    	loginbutton.click();
    	
    }
    public void clickLogin()
    {
    	Demoworkshopmethods.clickButton(loginlink);
    }
 
}