package com.example.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import com.example.elements.SearchString;

public class SearchingStringTest extends BaseTest {
    
    @Test
    public void checkUI() {
        SearchString searchString = new SearchString();
        searchString.checkUI();
    }

    @Test
    public void setText() {
        SearchString searchString = new SearchString();
        searchString.setText("Санкт-Петербург");
        assertEquals("Санкт-Петербург", searchString.getText());
    }
}
