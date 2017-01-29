package ch.javaee.demo.angular2.web;

import ch.javaee.demo.angular2.service.HelloWorldService;
import com.fasterxml.jackson.annotation.JsonValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin()
public class HelloWorldController {

    @Autowired
    protected HelloWorldService helloWorldService;

    @RequestMapping(value = "/hello-world", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    Map<String, String> sayHello() {

        String helloWorld = helloWorldService.getHelloWorld();

        // we want to return a JSON object so we have to conver our String to a JSON key/value compatible format
        Map<String, String> jsonMap = new HashMap<>();
        // {"content" : "Hello World"}
        jsonMap.put("content", helloWorld);

        return jsonMap;
    }
}
