/** Test Case: HomePage Tests
 * 
 * Tags @smoke @regression
 * 
 * Steps:
 * 1) Navigate to the HomePage
 * 2) Validate key elements are visible
 * 3) Validate key element attributes
 * 
 */

import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test.describe('Home page tests', () => {

       let homePage: HomePage;

       test.beforeEach(async ({ page }) => {
              await page.goto("/");
              homePage = new HomePage(page);
       });

       test('Validate home page title @smoke @regression', async () => {
              await homePage.expectTitle(/Practice Software Testing - Toolshop/);
       });

       test('Validate home page loads successfully @smoke @regression', async () => {
              await homePage.expectPageLoaded();
       });

       test('Validate home page sign-in link attributes @regression', async () => {
              await homePage.expectSignInLinkAttributes();
       });

       test('Validate home page language button attributes @regression', async () => {
              await homePage.expectLanguageButtonAttributes();
       });

       test('Validate home page contact link attributes @regression', async () => {
              await homePage.expectContactLinkAttributes();
       });

       test('Validate home page link attributes @regression', async () => {
              await homePage.expectHomeLinkAttributes();
       });

       test('Validate home page banner image attributes @regression', async () => {
              await homePage.expectBannerImageAttributes();
       });

});