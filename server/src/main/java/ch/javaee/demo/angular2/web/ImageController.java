package ch.javaee.demo.angular2.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletContext;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by marco on 21.01.17.
 */
@RestController
@CrossOrigin()
public class ImageController {

    private static String imagesPath = "images/";
    private static String imageName = "angular.png";

    @RequestMapping(value = "/image/{id}", method = RequestMethod.GET)
    public @ResponseBody Map<String, String> getImage(@PathVariable String id) throws IOException {

        File file = new ClassPathResource(imagesPath + imageName).getFile();

        String encodeImage = Base64.getEncoder().withoutPadding().encodeToString(Files.readAllBytes(file.toPath()));

        Map<String, String> jsonMap = new HashMap<>();

        jsonMap.put("content", encodeImage);

        return jsonMap;
    }


}
