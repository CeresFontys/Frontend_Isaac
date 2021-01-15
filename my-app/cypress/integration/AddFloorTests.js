import FloorMock from "../fixtures/FloorMock.json";

describe("TestAddFloor", () => {
  it("Adds a floor", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "http://localhost:5006/Floor/", {
      statusCode: 200,
      body: FloorMock,
    }).as("getFloors");
    cy.get("#Links > :nth-child(1) > a").click();
    cy.wait(["@getFloors"]);
    cy.get(".sliderIcon").click();
    cy.get("#formBasicName").clear();
    cy.get("#formBasicName").type("TestName");
    cy.get("#formBasicLength").clear();
    cy.get("#formBasicLength").type(12);
    cy.get("#formBasicWidth").clear();
    cy.get("#formBasicWidth").type(15);
    cy.get(":nth-child(5) > .btn").click();
    cy.intercept("PUT", "http://localhost:5006/Floor/*", {
      statusCode: 200,
      body: "success",
    });
  });
});

describe("SelectFloor", () => {
  it("Selects a floor", () => {
    cy.visit("http://localhost:3000");
    cy.intercept("GET", "http://localhost:5006/Floor/", {
      statusCode: 200,
      body: FloorMock,
    }).as("getFloors");
    cy.get("#Links > :nth-child(1) > a").click();
    cy.wait(["@getFloors"]);
    cy.get("#dropdown-item-button").click();
    cy.get('[value="2"] > div').click();
    cy.get(".sliderIcon").click();
    cy.get("#formBasicWidth").should("have.value", 34);
    cy.get("#formBasicName").should("have.value", "Floor 2");
  });
});
