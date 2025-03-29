package com.example.test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import com.example.elements.SearchString;
import com.example.pages.BasePage;
import com.example.pages.GitHubPage;
import io.qameta.allure.Allure;
import static com.codeborne.selenide.Selenide.switchTo;

@DisplayName("Основной экран")
public class WeatherPageTest extends BaseTest {
    
    @Test
    @DisplayName("Открытие GitHub по нажатию на Support Project")
    public void openSupport() {

        SearchString searchString = new SearchString();

        Allure.step("Отображение элементов строки поиска", () -> {
            searchString.checkUI();
        });

        Allure.step("Переход на Гитхаб и проверка отображения и URL", () -> {
            GitHubPage gitHubPage = searchString.openSupport();
            switchTo().window(1);
            gitHubPage.checkUI();
            assertEquals("https://github.com/Churina-Margaery/weather", gitHubPage.checkUrl());
        });
    }

    @Test
    @DisplayName("Изменение темы сайты")
    public void changeTheme() {
        BasePage basePage = new BasePage();
        
        Allure.step("Проверка, что текущая тема - темная", () -> {
            basePage.isDarkTheme();
        });

        Allure.step("Переключение темы", () -> {
            SearchString searchString = new SearchString();
            searchString.changeTheme();
        });

        Allure.step("Проверка, что текущая тема - светлая", () -> {
            basePage.isLightTheme();
        });
    }
}
