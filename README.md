# About

Exercises for training tests mocking.

All exercises have detailed descriptions available after signing here:
https://jaktestowac.pl/mockowanie/
You will get link to recording of webinar, presentation and tips (in Polish language).

## Tested app

Information how to get tested app is located in page available after registering here https://jaktestowac.pl/mockowanie/

⚠️ Glitch free account is limited to 4k requests per hour, app is deleted after 5 days without account

## Required software

- `Node.js`
- `Visual Studio Code`
- extensions for VSC (after installing project it should be suggested for installation):
  - `Prettier - Code formatter` - for formatting
  - `Playwright Test for VSCode` - for easy Playwright test running
  - `GitLens` - for commits handling
  - `Code Spell Checker` - for highlighting spelling mistakes

## How to install project
Download this repository and open it main folder, then:

1. Install packages:

   ```
   npm i
   ```

2. Install Playwright browsers:

   ```
   npx playwright install
   ```

3. Configure `playwright.config.json`
   - Set baseURL to your app main url.
   - Set timeout to desired value (current 6s can be to short)

## How to run tests

There are few ways of test running:

1. Navigate to folder with given exercise an simply run test by pressing green arrow
2. Open `Testing` tab located in left menu (flask icon), unfold all tests and choose one or as many as you want to be run.
   If test not appears, refresh tab or check `playwright.config.ts` if you have everything set properly with `projects` section.
3. Run npm scripts by copy pasting scripts form `package.json` form `scripts` section.
4. Use VSC npm script run section:
   - in `Explorer` tab menu check `NPM Scripts`
   - in very bottom of Explorer tab you will find section `NPM SCRIPTS`
   - choose script you want to run

## UI Mode

Just run script form `package.json`:

```
npm run test:ui
```

Recommended option is running this script in separate console.

# Tips

- there are two main folder for tests and you can compare implementation with or without mocking
- broke test and try to find problem in report
- some tests are designed to fail and those tests contains tag `@fail` in name
- if tests fail without clear reason: 
    - check if tested app is up and running, 
    - check timeout in playwright.config.ts (on slow machines it need to be increased)


# 📞 Contact & Support

Feel free to reach out to us:

- 🌐 **Website**: [jaktestowac.pl](https://jaktestowac.pl)
- 💼 **LinkedIn**: [jaktestowac.pl](https://www.linkedin.com/company/jaktestowac/)
- 💬 **Discord**: [Polish Playwright Community](https://discord.gg/mUAqQ7FUaZ)
- 📧 **Support**: Check our website for contact details

---

# 📚 Learning Resources

We have gathered a collection of resources to help you learn and master Playwright, both in Polish and English. Whether you're a beginner or an advanced user, these resources will help you enhance your skills and knowledge.

## 🇵🇱 Polish Resources

- [JavaScript and TypeScript for Testers](https://jaktestowac.pl/js-ts/) - Comprehensive (13h+) course on JavaScript and TypeScript for testers, with practical examples and exercises
- [Professional Test Automation with Playwright](https://jaktestowac.pl/playwright/) - Comprehensive (100h+) course on Playwright, test automation, CI/CD and test architecture
- [Back-end Test Automation](https://jaktestowac.pl/api/) - Comprehensive (45h+) course on Back-end Test Automation with Postman, Mocha, Chai, and Supertest
- [Free Playwright Resources](https://jaktestowac.pl/darmowy-playwright/) - Comprehensive and Free Polish learning materials
- [Playwright Basics](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cD2TCB__K7NP5XARaCzZYn7) - YouTube series (Polish)
- [Playwright Elements](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cAcpd-XN4pKeo-l4YK35FDA) - Advanced concepts (Polish)
- [Playwright MCP](https://www.youtube.com/playlist?list=PLfKhn9AcZ-cCqD34AG5YRejujaBqCBgl4) - MCP course (Polish)
- [Discord Community](https://discord.gg/mUAqQ7FUaZ) - First Polish Playwright community!
- [Playwright Info](https://playwright.info/) - first and only Polish Playwright blog

## 🇬🇧 English Resources

- [VS Code Extensions](https://marketplace.visualstudio.com/publishers/jaktestowac-pl) - Our free Playwright plugins
- [Playwright Documentation](https://playwright.dev/docs/intro) - Official documentation
- [Playwright GitHub](https://github.com/microsoft/playwright) - Source code and issues

_PS. For more resources and updates, follow us on our [website](https://jaktestowac.pl) and [GitHub](https://github.com/jaktestowac)._

---

**Happy testing and automation!** 🚀

**jaktestowac.pl Team** ❤️💚

_PS. For more resources and updates, follow us on our [website](https://jaktestowac.pl) and [GitHub](https://github.com/jaktestowac)._

---

_Built with ❤️💚 for the Playwright and test automation community_
