package ch.javaee.demo.angular2.service;

import ch.javaee.demo.angular2.model.DavisCup;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by marco on 28.01.17.
 */

@Service
public class DavisServiceCodedImpl implements DavisService {

    @Override
    public List<DavisCup> getResultList() {

        List<DavisCup> davisCupList = new ArrayList<>();
        davisCupList.add(new DavisCup(2015, "Great Britain", "Belgium", "3-1"));

        davisCupList.add(new DavisCup(2014, "Switzerland", "France", "3-1"));
        davisCupList.add(new DavisCup(2013, "Czech Republic", "Serbia", "3-2"));

        return davisCupList;
    }

    @Override
    public DavisCup getResultForYear(String year) {

        for (DavisCup current : getResultList()) {

            if (current.getYear().toString().equals(year)){
                return current;
            }
        }

        return null;
    }
}
