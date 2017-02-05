package ch.javaee.demo.angular2.repository.blog;

import ch.javaee.demo.angular2.model.blog.Article;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by marco on 01.02.17.
 */

public interface ArticleRepository extends CrudRepository<Article, Long> {
}
