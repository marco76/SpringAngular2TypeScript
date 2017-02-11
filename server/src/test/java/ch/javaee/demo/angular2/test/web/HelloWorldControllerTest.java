package ch.javaee.demo.angular2.test.web;

import ch.javaee.demo.angular2.Application;
import ch.javaee.demo.angular2.service.HelloWorldService;
import ch.javaee.demo.angular2.service.HelloWorldServiceImpl;
import ch.javaee.demo.angular2.web.HelloWorldController;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@WebMvcTest(controllers = {HelloWorldController.class},
includeFilters = {
        @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = {HelloWorldService.class, HelloWorldServiceImpl.class})},
excludeFilters = {
        @ComponentScan.Filter(type = FilterType.ASSIGNABLE_TYPE, classes = {Application.class})
}, secure = false)
public class HelloWorldControllerTest {

    @Autowired
    private MockMvc mvc;

    @Test
    @Ignore
    public void resultListTest() throws Exception {

        String expectedResult = "{\"content\":\"Hello World from Java!\"}";

        this.mvc.perform(get("/rest/hello-world"))
                .andExpect(status().isOk())
                .andExpect(content().string(expectedResult));

    }
}
