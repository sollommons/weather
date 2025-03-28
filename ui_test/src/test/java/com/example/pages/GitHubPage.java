package com.example.pages;

import com.codeborne.selenide.WebDriverRunner;

public class GitHubPage implements LoadablePage {
    
    @Override
    public boolean checkUI() {
        return true;
    }

    public void checkUrl() {
        WebDriverRunner.url().matches("https://github.com/Churina-Margaery/weather");
    }
}
