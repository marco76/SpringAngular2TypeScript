package ch.javaee.demo.angular2.service.blog;

import ch.javaee.demo.angular2.model.blog.Article;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by marco on 01.02.17.
 */

public interface BlogService {
    List<Article> getArticles();
}
