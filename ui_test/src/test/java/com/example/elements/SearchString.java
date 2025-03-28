package com.example.elements;

import org.openqa.selenium.By;

import static com.codeborne.selenide.Condition.enabled;
import static com.codeborne.selenide.Condition.exactText;
import static com.codeborne.selenide.Condition.visible;
import static com.codeborne.selenide.Selectors.byXpath;
import static com.codeborne.selenide.Selenide.$;
import com.example.pages.LoadablePage;

public class SearchString implements LoadablePage {

    private static final By nameString = byXpath("//div[@class = 'header__weather-label']");
    private static final By searchImage = byXpath("//img[@alt = 'loupe']");
    private static final By searchString = byXpath("//input[@type = 'search']");
    private static final By themeButton = byXpath("//button[@class = 'header__btn']");
    private static final By supportProjectButton = byXpath("//button[@class = 'header__support-btn']");

    @Override
    public boolean checkUI() {
        $(nameString).shouldBe(visible);
        $(searchImage).shouldBe(visible);
        $(searchString).shouldBe(visible);
        $(themeButton).shouldBe(visible);
        $(supportProjectButton).shouldBe(visible);
        $(supportProjectButton).shouldHave(exactText("Support Project"));
        return true;
    }

    public void openSupport() {
        $(supportProjectButton).click();
    }

    public void setText(String value) {
        $(searchString).shouldBe(enabled).click();
        $(searchString).type(value);
    }

    public String getText() {
        return $(searchString).getValue();
    }
}
