package ch.javaee.demo.angular2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

/**
 * Created by marco on 23/02/16.
 */

@SpringBootApplication
@ComponentScan(basePackages = "ch.javaee.demo")
public class Application {

    public static void main(String args[]){
        SpringApplication.run(Application.class, args);
    }

}
