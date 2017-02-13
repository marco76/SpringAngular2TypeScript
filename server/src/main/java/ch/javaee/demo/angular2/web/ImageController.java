package ch.javaee.demo.angular2.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.*;

import javax.servlet.ServletContext;
import java.io.*;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;
import java.util.stream.Collectors;

/**
 * Created by marco on 21.01.17.
 */
@RestController
@CrossOrigin()
public class ImageController {

    private static String imagesPath = "/images/";
    private static String imageName = "angular.png";

    @RequestMapping(value = "/image/{id}", method = RequestMethod.GET)
    public @ResponseBody Map<String, String> getImage(@PathVariable String id) throws IOException, URISyntaxException {

        // getFile works with filesystems files
        // File file = new ClassPathResource("classpath:/" + imagesPath + imageName).getFile();

        InputStream stream = new ClassPathResource(imagesPath + imageName).getInputStream();

        byte[] targetArray = new byte[stream.available()];
        stream.read(targetArray);
        String encodeImage = Base64.getEncoder().withoutPadding().encodeToString(targetArray);

        Map<String, String> jsonMap = new HashMap<>();

        jsonMap.put("content", encodeImage);

        return jsonMap;
    }


}
