package com.example.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import com.example.elements.SearchString;
import com.example.pages.BasePage;
import com.example.pages.GitHubPage;
import static com.codeborne.selenide.Selenide.switchTo;

public class WeatherPageTest extends BaseTest {
    
    @Test
    public void openSupport() {
        SearchString searchString = new SearchString();
        searchString.checkUI();
        GitHubPage gitHubPage = searchString.openSupport();
        switchTo().window(1);
        gitHubPage.checkUI();
        assertEquals("https://github.com/Churina-Margaery/weather", gitHubPage.checkUrl());
    }

    @Test
    public void changeTheme() {
        BasePage basePage = new BasePage();
        basePage.isDarkTheme();
        SearchString searchString = new SearchString();
        searchString.changeTheme();
        basePage.isLightTheme();
    }
}
