package ch.javaee.demo.angular2.web;

import ch.javaee.demo.angular2.model.DavisCup;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by marco on 23/02/16.
 */
@RestController
@CrossOrigin()
public class DavisController {

    private List<DavisCup> resultList = new ArrayList<>();


    public DavisController() {
        resultList.add(new DavisCup(2015, "Great Britain", "Belgium", "3-1"));
        resultList.add(new DavisCup(2014, "Switzerland", "France", "3-1"));
        resultList.add(new DavisCup(2013, "Czech Republic", "Serbia", "3-2"));


    }

    @RequestMapping(value = "/result_list", method = RequestMethod.GET)
    public @ResponseBody List<DavisCup> resultList(){
        return resultList;
    }

    @RequestMapping("/result_year")
    public @ResponseBody DavisCup result(@RequestParam(required = true, defaultValue = "2015") String year){
        for (DavisCup current : resultList){
            if (current.getYear().toString().equals(year)){
                return current;
            }

        }
        return null;
    }


}
