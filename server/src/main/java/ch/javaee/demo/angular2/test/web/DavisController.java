package ch.javaee.demo.angular2.test.web;

import ch.javaee.demo.angular2.model.DavisCup;
import ch.javaee.demo.angular2.service.DavisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by marco on 23/02/16.
 */
@RestController
@CrossOrigin()
public class DavisController {

    @Autowired
    protected DavisService davisService;

    @RequestMapping(value = "/result_list", method = RequestMethod.GET)
    public @ResponseBody List<DavisCup> resultList() {

        return davisService.getResultList();

    }

    @RequestMapping(value = "/result_year", method = RequestMethod.GET)
    public @ResponseBody DavisCup result(@RequestParam(value="year", defaultValue = "2015") String year) {

        return davisService.getResultForYear(year);

    }
}
