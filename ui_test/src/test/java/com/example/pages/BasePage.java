package com.example.pages;

import static com.codeborne.selenide.Condition.cssClass;
import static com.codeborne.selenide.Selenide.$;
import static com.codeborne.selenide.Selenide.executeJavaScript;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;

import com.example.elements.InfoBlock;
import com.example.elements.SearchString;
import com.example.elements.StatisticBlock;

public class BasePage implements LoadablePage {

    private final SearchString searchString = new SearchString();
    private final InfoBlock infoBlock = new InfoBlock();
    private final StatisticBlock statisticBlock = new StatisticBlock();

    @Override
    public boolean checkUI() {
        searchString.checkUI();
        infoBlock.checkUI();
        statisticBlock.checkUI();
        return true;
    }

    public boolean isDarkTheme() {
        $("body").shouldHave(cssClass("dark-theme")); 
        return true;
    }
    
    public boolean isLightTheme() {
        $("html").shouldNotHave(cssClass("dark-theme"));
        return true;
    }
}
