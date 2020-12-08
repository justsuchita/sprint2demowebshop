package page;


import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import framework.Demoworkshopmethods;

public class HomePage {
WebDriver driver;
@FindBy(xpath="/html/body/div[4]/div[1]/div[4]/div[1]/div[1]/div[2]/ul/li[1]/a")
WebElement books;
@FindBy(linkText="Computers")
WebElement computers;
@FindBy(linkText="Electronics")
WebElement electronics;
@FindBy(linkText="Apparel & Shoes")
WebElement apparel;
@FindBy(xpath="/html/body/div[4]/div[1]/div[4]/div[2]/div[2]/div[2]/div[3]/div[1]/div/div[2]/h2/a")
WebElement item;
@FindBy(how=How.ID,using="add-to-cart-button-13")
WebElement addcart;
@FindBy(xpath="//*[@id='bar-notification']/p")
@CacheLookup
WebElement msg;
@FindBy(xpath="//*[@id='topcartlink']/a")
WebElement shoppingcart;
public void goToCart()
{
	//shoppingcart.click();
	Demoworkshopmethods.clickButton(shoppingcart);
}



public void addToCart()
{
	
	//addcart.click();
	Demoworkshopmethods.clickButton(addcart);
	
}
public void selectCategory()
{
	
	//books.click();
	Demoworkshopmethods.clickButton(books);
}
public void selectItem() throws InterruptedException
{
	Actions actions = new Actions(driver);

     //Scroll Down using Actions class
	actions.sendKeys(Keys.PAGE_DOWN).build().perform();

	Thread.sleep(2000);
	
	//item.click();
	Demoworkshopmethods.clickButton(item);
}
public String getMessage()
{
	return(Demoworkshopmethods.Message(msg));
}

public HomePage(WebDriver driver) {
	this.driver = driver;
	PageFactory.initElements(driver, this);
}

}