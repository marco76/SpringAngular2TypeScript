package ch.javaee.demo.angular2.test.web;

import ch.javaee.demo.angular2.model.blog.Article;
import ch.javaee.demo.angular2.test.blog.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by marco on 01.02.17.
 */

@RestController
@CrossOrigin()
public class BlogController {

    @Autowired
    BlogService blogService;

    @RequestMapping(value = "/blog/list", method = RequestMethod.GET)
    public @ResponseBody
        List<Article> resultList() {

        return blogService.getArticles();

    }


}
