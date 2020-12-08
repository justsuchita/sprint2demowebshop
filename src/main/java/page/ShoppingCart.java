package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
//import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import framework.Demoworkshopmethods;

public class ShoppingCart {
	WebDriver driver;
	//@FindBy(how=How.LINK_TEXT,using="Shopping cart")
	//WebElement shoppingcart;
	@FindBy(name="removefromcart")
	WebElement remove; 
	@FindBy(xpath="/html/body/div[4]/div[1]/div[4]/div/div/div[2]/div/form/div[1]/div/input[1]")
	WebElement update;
	@FindBy(xpath="/html/body/div[4]/div[1]/div[4]/div/div[2]/div[2]/div")
	WebElement msg;
	
	
	public ShoppingCart(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	/*public void goToCart()
	{
		shoppingcart.click();
	}*/
	
	public void removeItem()
	{
		//remove.click();
		Demoworkshopmethods.clickButton(remove);
	}
	public void updateCart()
	{
		//update.click();
		Demoworkshopmethods.clickButton(update);
	}
	public String cartMessage()
	{
		return(Demoworkshopmethods.Message(msg));
	}

}