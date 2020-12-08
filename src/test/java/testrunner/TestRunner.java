package testrunner;


import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "C:\\Users\\Suchita Malireddy\\workspace\\demowebshop1\\src\\test\\java\\feature"
,glue={"stepdefinition"}
//,tags={"@Update"}
//,plugin = {"pretty", "html:target/cucumber-html-report"}
,plugin = {"json:target/cucumber.json"}
)
public class TestRunner extends AbstractTestNGCucumberTests {

}


