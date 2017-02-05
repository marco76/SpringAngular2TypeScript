package ch.javaee.demo.angular2.test.blog;

import ch.javaee.demo.angular2.model.blog.Article;
import ch.javaee.demo.angular2.repository.blog.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by marco on 01.02.17.
 */

@Service
public class BlogServiceImpl implements BlogService {

    @Autowired
    public ArticleRepository articleRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Article> getArticles() {

        List<Article> articleList = new ArrayList<>();

        // lambda expression
        // findAll() retrieve an Iterator

        // method reference ...
        articleRepository.findAll().forEach(articleList::add);
        // ... it is equivalent to
        // articleRepository.findAll().forEach(article -> articleList.add(article));

        return articleList;

    }
}
