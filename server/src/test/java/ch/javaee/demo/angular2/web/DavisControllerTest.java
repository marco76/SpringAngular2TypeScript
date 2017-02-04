package ch.javaee.demo.angular2.web;

import ch.javaee.demo.angular2.model.DavisCup;
import ch.javaee.demo.angular2.service.DavisService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.SpyBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
/**
 * Created by marco on 28.01.17.
 */

@RunWith(SpringRunner.class)
@WebMvcTest(DavisController.class)
public class DavisControllerTest {

    @Autowired
    private DavisService davisService;

    @Autowired
    private MockMvc mvc;


    @Test
    public void resultListTest() throws Exception {

        String expectedResult = "[{\"year\":2015,\"winner\":\"Marco Team\"}]";
        given(this.davisService.getResultList()).willReturn(mockedDavisData());

        this.mvc.perform(get("/result_list"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedResult));

    }

    @Test
    public void resultYearTest() throws Exception {

        String expectedResult = "{\"year\":2015,\"winner\":\"Marco Team\"}";
        given(this.davisService.getResultList()).willReturn(mockedDavisData());

        this.mvc.perform(get("/result_year"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedResult));

    }

    private List<DavisCup> mockedDavisData() {

        List<DavisCup> davisCupMockedList = new ArrayList<>();
        DavisCup davisCup = new DavisCup(2015, "Marco Team", "Roger Team", "3-2");

        davisCupMockedList.add(davisCup);

        return davisCupMockedList;

    }
}
