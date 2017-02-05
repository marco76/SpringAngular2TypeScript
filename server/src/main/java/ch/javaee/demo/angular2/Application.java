package ch.javaee.demo.angular2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * Created by marco on 23/02/16.
 */

@SpringBootApplication
@ComponentScan(basePackages = "ch.javaee.demo.angular2")
public class Application {

    public static void main(String args[]){

        SpringApplication.run(Application.class, args);

    }
}
