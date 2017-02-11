package ch.javaee.demo.angular2.test.blog;

import ch.javaee.demo.angular2.model.blog.Article;
import ch.javaee.demo.angular2.service.BlogService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

/**
 * Created by marco on 01.02.17.
 */

@RunWith(SpringRunner.class)
@SpringBootApplication
@EnableJpaRepositories(basePackages = ("ch.javaee.demo.angular2"))
@EntityScan(basePackages = "ch.javaee.demo.angular2")
public class BlogServiceTest {

    @Autowired
    BlogService blogService;

    @Test
    public void getAllArticlesTest() {

        List<Article> articleList = blogService.getArticles();
        assertThat(articleList).isNotNull();

        Article article = articleList.get(0);
        assertThat(article).hasNoNullFieldsOrProperties();
        assertThat(article.getId().equals(1L));
        assertThat(article.getTitle()).isEqualTo("Article Example");

        Article articleTwo = articleList.get(1);
        assertThat(articleTwo).hasNoNullFieldsOrProperties();
        assertThat(articleTwo.getId().equals(2L));
        assertThat(articleTwo.getContent()).isEqualTo("Maybe for fun");

    }
}
