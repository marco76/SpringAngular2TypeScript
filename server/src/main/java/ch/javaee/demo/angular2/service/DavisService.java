package ch.javaee.demo.angular2.service;

import ch.javaee.demo.angular2.model.DavisCup;

import java.util.List;

/**
 * Created by marco on 28.01.17.
 */

public interface DavisService {

    List<DavisCup> getResultList();

    DavisCup getResultForYear(String year);
}
