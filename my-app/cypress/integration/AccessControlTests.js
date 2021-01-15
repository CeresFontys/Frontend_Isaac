describe("TestUserAdd", () => {
  it("Adds an user", () => {
    cy.visit("http://localhost:3000");
    cy.get(":nth-child(2) > a").click();
    cy.get(".AccessUserAdd").click();
    cy.get(":nth-child(1) > label > input").type("testName");
    cy.get(":nth-child(2) > label > input").type("test@test.nl");
    cy.get(":nth-child(3) > label > input").type("password");
    cy.get("form > button").click();
    cy.get(".AccessUserAdd").click();
    //Refresh when not mocked
    cy.get(":nth-child(9) > .userName").contains("testName");
    cy.get(":nth-child(9) > .userOptionsIcon").click();
  });
});

describe("TestUserRemove", () => {
  it("Adds an user", () => {
    cy.visit("http://localhost:3000");
    cy.get(":nth-child(2) > a").click();
    cy.get(":nth-child(1) > .userName").contains("Test User 1");
    cy.get(":nth-child(1) > .userOptionsIcon").click();
    cy.get(":nth-child(1) > .userName").contains("Test User 2");
  });
});

describe("TestIpAdd", () => {
  it("Adds a whitelist entry", () => {
    cy.visit("http://localhost:3000");
    cy.get(":nth-child(2) > a").click();
    cy.get(".AccessIpAdd").click();
    cy.get(":nth-child(1) > input").type("testName");
    cy.get(":nth-child(2) > input").type("127.0.0.1");
    cy.get("form > button").click();
    cy.get(".AccessIpAdd").click();
    //Refresh when not mocked
    cy.get(":nth-child(8) > .ipName").contains("testName");
    cy.get(":nth-child(8) > .ipIp").contains("127.0.0.1");
    cy.get(":nth-child(8) > .userOptionsIcon").click();
  });
});

describe("TestIpRemove", () => {
  it("Adds a whitelist entry", () => {
    cy.visit("http://localhost:3000");
    cy.get(":nth-child(2) > a").click();
    cy.get(":nth-child(1) > .ipName").contains("Locatie 1");
    cy.get(":nth-child(1) > .ipOptionsIcon").click();
    cy.get(":nth-child(1) > .ipName").contains("Locatie 2");
  });
});

describe("TestRefresh", () => {
  it("Adds a whitelist entry", () => {
    cy.visit("http://localhost:3000");
    cy.get(":nth-child(2) > a").click();
    cy.get(":nth-child(1) > .userOptionsIcon").click();
    cy.get(":nth-child(1) > .userOptionsIcon").click();
    cy.get(":nth-child(1) > .userOptionsIcon").click();
    cy.get(":nth-child(1) > .userOptionsIcon").click();
    cy.get(":nth-child(1) > .userOptionsIcon").click();
    cy.get(":nth-child(1) > .userOptionsIcon").click();
    cy.get(":nth-child(1) > .userOptionsIcon").click();
    cy.get(":nth-child(1) > .userOptionsIcon").click();
    cy.get("button").click();
    cy.get(":nth-child(8) > .userOptionsIcon").click();
  });
});
