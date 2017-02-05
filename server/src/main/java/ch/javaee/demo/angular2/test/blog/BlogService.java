package ch.javaee.demo.angular2.test.blog;

import ch.javaee.demo.angular2.model.blog.Article;

import java.util.List;

/**
 * Created by marco on 01.02.17.
 */

public interface BlogService {
    List<Article> getArticles();
}
